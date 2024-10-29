import { decrypt, encrypt } from '@repo/encrypt/client';
import { tokenVaultPrisma, prisma } from '@repo/prisma_database/client';
import { generateSecureTokenWithSalt } from './generating_token';

// Function to generate a unique account number
async function generateUniqueAccountNumber(): Promise<{ encryptedAccountNumber: string; token: string }> {
  const initialAccountNumber = 322564874;

  // Start a transaction to ensure atomicity
  const newAccountNumber = await tokenVaultPrisma.$transaction(async (prisma) => {
    // Fetch the last account based on the highest account number
    const lastAccount = await prisma.accountTokenVault.findFirst({
      orderBy: {
        accountNumberIndex: 'desc', // Ensuring we get the highest account number
      },
      select: {
        accountNumber: true,
      },
    });

    // If no account exists, start with the initial number
    return lastAccount
      ? (parseInt(decrypt(lastAccount.accountNumber)) + 1).toString()
      : initialAccountNumber.toString();
  });

  // Encrypt the new account number
  const encryptedAccountNumber = encrypt(newAccountNumber);

  // Generate a secure token with salt
  const token = generateSecureTokenWithSalt(newAccountNumber);

  // Return both encrypted account number and token as an object
  return { encryptedAccountNumber, token };
}

// Function to generate a unique IFSC 
async function generateUniqueIFSC(): Promise<string> {
  let ifsc: string;
  let ifscExists: boolean;

  do {
    // Generate a 6-digit random number as IFSC
    ifsc = Math.floor(100000 + Math.random() * 900000).toString();

    // Check if the IFSC already exists in the database
    const existingIfsc = await prisma.accountDetails.findFirst({
      where: { ifsc },
    });

    ifscExists = !!existingIfsc; // If it exists, set the flag to true
  } while (ifscExists); // Keep generating until a unique IFSC is found

  // Return the unique IFSC code
  return ifsc.toString();
}

// Export both functions to use elsewhere
export { generateUniqueAccountNumber, generateUniqueIFSC };
