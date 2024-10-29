import {prisma,tokenVaultPrisma} from "@repo/prisma_database/client";
import { getUserId } from "../../userId/userId";
import { decrypt } from "@repo/encrypt/client";

export async function getdecryptupi() {
    const userId = await getUserId();

    if (!userId) {
        console.log('Cannot find user ID in session');
        return null;
    }

    const upi_data = await tokenVaultPrisma.upiTokenVault.findFirst({
        where: {
            userId: userId
        },
        select: {
            pa: true,
        }
    });


    if (!upi_data?.pa ) {
        console.log('No UPI data or encrypted PA found');
        return null;
    }

    try {
        const encryptedUpiValue = upi_data.pa;

        if (!encryptedUpiValue ) {
            throw new Error("No UPI value to decrypt");
        }

        // Decrypt the UPI data
        const decryptedUpiValue = decrypt(encryptedUpiValue);

        // Return the decrypted values as an object
        return {
            decryptedUpiValue
        };
    } catch (error: any) {
        console.error('Decryption failed: ', error.message);
        return null;
    }
} 
export async function getdecryptaccount() {
    const userId = await getUserId();

    if (!userId) {
        console.log('Cannot find user ID in session');
        return null;
    }

    const acc_data = await tokenVaultPrisma.accountTokenVault.findFirst({
        where: {
            userId: userId
        },
        select: {
            accountNumber: true,
        }
    });


    if (!acc_data?.accountNumber ) {
        console.log('No Account NO data or encrypted account no found');
        return null;
    }

    try {
        const encryptedAccountValue = acc_data.accountNumber;

        if (!encryptedAccountValue ) {
            throw new Error("No Account NO value to decrypt");
        }

        // Decrypt the UPI data
        const decryptedAccountValue = decrypt(encryptedAccountValue);

        // Return the decrypted values as an object
        return {
            decryptedAccountValue
        };
    } catch (error: any) {
        console.error('Decryption failed: ', error.message);
        return null;
    }
}
export async function getdecryptdebit() {
    const userId = await getUserId();

    if (!userId) {
        console.log('Cannot find user ID in session');
        return null;
    }

    const debit_data = await tokenVaultPrisma.debitTokenVault.findFirst({
        where: {
            userId: userId
        },
        select: {
            debitNumber: true,
        }
    });


    if (!debit_data?.debitNumber ) {
        console.log('No Debit NO data or encrypted debit no found');
        return null;
    }

    try {
        const encryptedDebitValue = debit_data.debitNumber;

        if (!encryptedDebitValue ) {
            throw new Error("No Debit No value to decrypt");
        }

        // Decrypt the UPI data
        const decryptedDebitValue = decrypt(encryptedDebitValue);

        // Return the decrypted values as an object
        return {
            decryptedDebitValue
        };
    } catch (error: any) {
        console.error('Decryption failed: ', error.message);
        return null;
    }
}
export async function getdecryptCredit() {
    const userId = await getUserId();

    if (!userId) {
        console.log('Cannot find user ID in session');
        return null;
    }

    const credit_data = await tokenVaultPrisma.creditTokenVault.findFirst({
        where: {
            userId: userId
        },
        select: {
            creditNumber: true,
        }
    });


    if (!credit_data?.creditNumber ) {
        console.log('No Credit No data or encrypted credit found');
        return null;
    }

    try {
        const encryptedCreditValue = credit_data.creditNumber;

        if (!encryptedCreditValue ) {
            throw new Error("No Credit NO value to decrypt");
        }

        // Decrypt the UPI data
        const decryptedCreditValue = decrypt(encryptedCreditValue);

        // Return the decrypted values as an object
        return {
            decryptedCreditValue
        };
    } catch (error: any) {
        console.error('Decryption failed: ', error.message);
        return null;
    }
}

export async function getdecryptEmail() {
    const userId = await getUserId();

    if (!userId) {
        console.log('Cannot find user ID in session');
        return null;
    }

    const email_data = await tokenVaultPrisma.emailTokenVault.findFirst({
        where: {
            userId: userId
        },
        select: {
            email: true,
        }
    });


    if (!email_data?.email ) {
        console.log('No Email data or encrypted email found');
        return null;
    }

    try {
        const encryptedEmailValue = email_data.email;
        if (!encryptedEmailValue ) {
            throw new Error("No Email value to decrypt");
        }

        // Decrypt the UPI data
        const decryptedEmailValue = decrypt(encryptedEmailValue);

        // Return the decrypted values as an object
        return {
            decryptedEmailValue
        };
    } catch (error: any) {
        console.error('Decryption failed: ', error.message);
        return null;
    }
}

export async function getdecryptPhone() {
    const userId = await getUserId();

    if (!userId) {
        console.log('Cannot find user ID in session');
        return null;
    }

    const phone_data = await tokenVaultPrisma.phoneTokenVault.findFirst({
        where: {
            userId: userId 
        },
        select: {
            phone: true,
        }
    });


    if (!phone_data?.phone ) {
        console.log('No Phone data or encrypted phone found');
        return null;
    }

    try {
        const encryptedPhoneValue = phone_data.phone;
        if (!encryptedPhoneValue ) {
            throw new Error("No Phone value to decrypt");
        }

        // Decrypt the UPI data
        const decryptedPhoneValue = decrypt(encryptedPhoneValue);

        // Return the decrypted values as an object
        return {
            decryptedPhoneValue
        };
    } catch (error: any) {
        console.error('Decryption failed: ', error.message);
        return null;
    }
}


export async function getdecryptCvv() {
    const userId = await getUserId();

    if (!userId) {
        console.log('Cannot find user ID in session');
        return null;
    }

    const debit_cvv_data = await prisma.debitCard.findFirst({
        where: {
            user_id: userId
        },
        select: {
            cvv: true,
        }
    });


    if (!debit_cvv_data?.cvv) {
        console.log('No Cvv data or encrypted cvv found');
        return null;
    }

    try {
        const encryptedCvvValue = debit_cvv_data.cvv;
        if (!encryptedCvvValue ) {
            throw new Error("No Phone value to decrypt");
        }

        // Decrypt the UPI data
        const decryptedCvvValue = decrypt(encryptedCvvValue);

        // Return the decrypted values as an object
        return {
            decryptedCvvValue
        };
    } catch (error: any) {
        console.error('Decryption failed: ', error.message);
        return null;
    }
}
