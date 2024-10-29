import { prisma } from "@repo/prisma_database/client";

// Function to generate a unique 8-digit transaction reference number
export async function generateUniqueTransactionRef(): Promise<string> {
    let reference: string;
    let isUnique: boolean;

    do {
        // Generate a random 8-digit number
        reference = Math.floor(10000000 + Math.random() * 90000000).toString();

        // Check if the reference already exists in the database
        const existingTransaction = await prisma.transaction.findFirst({
            where: {
                transactionReferenceNo: parseInt(reference),
            },
        });

        // If no existing transaction is found, the number is unique
        isUnique = !existingTransaction;
    } while (!isUnique); // Repeat if the number is not unique

    // Return the unique reference
    return reference;
}

