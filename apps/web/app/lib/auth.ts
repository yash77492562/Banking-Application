import CredentialsProvider from "next-auth/providers/credentials";
import { prisma, tokenVaultPrisma } from '@repo/prisma_database/client';
import bcrypt from 'bcrypt';
import { User as NextAuthUser, Session as NextAuthSession } from "next-auth";
import { encrypt } from "@repo/encrypt/client";
import { generateUniqueAccountNumber, generateUniqueIFSC } from "../backend/service/account_service";
import { generateDebitCardNumber } from "../backend/service/dedit_card_service";
import { generateCsvCode, generateExpiryDate } from "../backend/service/cvs_exp";
import { JWT } from "next-auth/jwt";
import { generateSecureTokenWithSalt, storeEncryptedAccountNumber, storeEncryptedDebitNumber, storeEncryptedEmail, storeEncryptedPhone, storeEncryptedUpi } from "../backend/service/generating_token";
import { check_email_details } from "../backend/service/check_details";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "john Smith", required: true },
        phone: { label: "PhoneNo", type: "tel", placeholder: "1234567899", required: true },
        password: { label: "Password", type: "password", required: true },
        email: { label: "Email", type: "email", placeholder: "example@gmail.com", required: true }
      },
      async authorize(credentials): Promise<NextAuthUser | null> {
        try {
          if (!credentials) {
            console.error("Credentials are not provided");
            return null;
          }

          const { username, email, password, phone } = credentials;
          console.log(credentials)

          // Basic field validation
          // if (!username || username.length < 3 || username.length > 20) {
          //   console.error("Invalid username");
          //   return null;
          // }
          // if (!email || !/\S+@\S+\.\S+/.test(email)) {
          //   console.error("Invalid email");
          //   return null;
          // }
          // if (!phone || phone.length !== 10) {
          //   console.error("Invalid phone number");
          //   return null;
          // }
          // if (!password || password.length < 8) {
          //   console.error("Invalid password");
          //   return null;
          // }

          if (!process.env.SECRET_KEY_NUMBER) {
            console.error("SECRET_KEY_NUMBER is not set in the environment variables");
            return null;
          }

          const secret_number = parseInt(process.env.SECRET_KEY_NUMBER, 10);
          if (isNaN(secret_number)) {
            console.error("Invalid SECRET_KEY_NUMBER");
            return null;
          }

          // Check if the user already exists
          const userId = await check_email_details({ email });
          let User_details;

          if (!userId) {
            const hashedPassword = await bcrypt.hash(password, secret_number);
            const encryptEmail = encrypt(email);
            const encryptPhone = encrypt(phone);

            // Start a transaction for both user and account creation
            try {
              const transactionResult = await prisma.$transaction(async (tx) => {
                // Create new user
                const newUser = await tx.user.create({
                  data: {
                    username,
                    password: hashedPassword
                  }
                });

                const ifsc = await generateUniqueIFSC();

                await tx.accountDetails.create({
                  data: {
                    ifsc,
                    accountId: newUser.id
                  }
                });

                await tx.upi.create({
                  data: {
                    pn: newUser.username,
                    upi_id: newUser.id,
                    cu: "INR"
                  }
                });

                const cvs = generateCsvCode();
                const exp = generateExpiryDate();
                await tx.debitCard.create({
                  data: {
                    cvv: cvs,
                    valid_Thur: exp,
                    user_id: newUser.id
                  }
                });

                await tx.balance.create({
                  data: {
                    balanceId: newUser.id
                  }
                });

                await tokenVaultPrisma.$transaction(async (tx) => {
                  const accountNumber = await generateUniqueAccountNumber();
                  const { encryptedAccountNumber, token } = accountNumber;
                  await storeEncryptedAccountNumber(encryptedAccountNumber, newUser.id, token, tx);

                  const emailToken = generateSecureTokenWithSalt(email);
                  await storeEncryptedEmail(encryptEmail, newUser.id, emailToken, tx);

                  const phoneToken = generateSecureTokenWithSalt(phone);
                  await storeEncryptedPhone(encryptPhone, newUser.id, phoneToken, tx);

                  const payee_upi_address = `${phone}@gringotts`;
                  const upi_token = generateSecureTokenWithSalt(payee_upi_address);
                  const encrypt_upi_address = encrypt(payee_upi_address);
                  await storeEncryptedUpi(encrypt_upi_address, newUser.id, upi_token, tx);

                  const debitCardNumber = generateDebitCardNumber();
                  const { encrypt_number, card_token } = debitCardNumber;
                  await storeEncryptedDebitNumber(encrypt_number, newUser.id, card_token, tx);
                });

                return newUser;
              });

              User_details = transactionResult;
            } catch (error) {
              console.error('Transaction failed:', error);
              return null;
            }
          } else {
            if (typeof userId === 'string') {
              User_details = await prisma.user.findUnique({
                where: { id: userId }
              });

              if (!User_details) {
                return null;
              }

              const passwordValid = await bcrypt.compare(password, User_details.password);
              if (!passwordValid) {
                console.log('password incorrect please enter right password')
                return null;
              }
            }
          }

          if (!User_details) {
            return null;
          }

          return {
            id: User_details.id,
            name: User_details.username
          };
        } catch (e) {
          console.error(e);
          return null;
        }
      }
    })
  ],
  secret: process.env.JWT_SECRET,
  callbacks: {
    async session({ session, token }: { session: NextAuthSession; token: JWT }) {
      if (token && session.user) {
        session.user.id = token.sub!;
      }
      return session;
    }
  }
};
