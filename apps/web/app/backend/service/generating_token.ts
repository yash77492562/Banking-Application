import crypto from 'crypto';
import {tokenVaultPrisma} from '@repo/prisma_database/client';
import { Prisma,PrismaClient } from '../../../../../packages/prisma_database/generated/tokenVault-client';

// Generate a secure HMAC token from the account number
const salt = process.env.SECRET_KEY || '49';

function generateSecureTokenWithSalt(input: string): string {
    return crypto.createHash('sha256').update(input + salt).digest('hex');
}
  
async function storeEncryptedAccountNumber(accountNumber: string,userId:string,token:string,tx: Prisma.TransactionClient): Promise<void> {

    await tx.accountTokenVault.create({
        data: {
            token, // Store the secure token
            accountNumber,
            userId
        }
    });
}
async function storeEncryptedPhone(phone: string,userId:string,token:string,tx: Prisma.TransactionClient): Promise<void> {

    await tx.phoneTokenVault.create({
        data: {
            token, // Store the secure token
            phone,
            userId
        }
    });
}
async function storeEncryptedEmail(email: string,userId:string,token:string,tx: Prisma.TransactionClient): Promise<void> {

    await tx.emailTokenVault.create({
        data: {
            token, // Store the secure token
            email,
            userId
        }
    });
}
async function storeEncryptedDebitNumber(debitNumber: string,userId:string,token:string,tx: Prisma.TransactionClient): Promise<void> {

    await tx.debitTokenVault.create({
        data: {
            token, // Store the secure token
            debitNumber,
            userId
        }
    });
}
async function storeEncryptedCreditNumber(creditNumber: string,userId:string ,token:string): Promise<void> {

    await tokenVaultPrisma.creditTokenVault.create({
        data: {
            token, // Store the secure token
            creditNumber,
            userId
        }
    });
}
async function storeEncryptedUpi(pa: string,userId:string,token:string,tx: Prisma.TransactionClient): Promise<void> {

    await tx.upiTokenVault.create({
        data: {
            token, // Store the secure token
            pa,
            userId
        }
    });
}

export {generateSecureTokenWithSalt,storeEncryptedAccountNumber,storeEncryptedCreditNumber,storeEncryptedDebitNumber,storeEncryptedUpi,storeEncryptedEmail ,storeEncryptedPhone}