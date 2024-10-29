import { getUserId } from "../../userId/userId";
import { getFirstLetter } from "./firstLetterOfText";
import { prisma_database_user } from "./prisma_data_fetch";

interface TransactionDetails {
    userId: string;
    amount: number;
    transactionNote: string;
}

export const Status_interface = async ({ userId, amount, transactionNote }: TransactionDetails) => {
    // Resolve the userId for the payer
    const payer_userId = await getUserId();
    if (!payer_userId) {
        return 'Payer ID not found';
    }

    // Fetch payer user details from the database
    const payer_user = await prisma_database_user({ userId: payer_userId });
    if (!payer_user) {
        return 'Error while fetching payer user details';
    }

    // Fetch recipient user details using the original userId passed
    const user = await prisma_database_user({ userId });
    if (!user) {
        return 'Error while fetching recipient user details';
    }

    // Extract relevant details
    const payer_username = payer_user.username;
    const payer_firstLetter = getFirstLetter(payer_userId);
    const username = user.username;
    const firstLetter = getFirstLetter(userId);

    // Return the collected information
    return {
        payer_username,
        payer_firstLetter,
        username,
        firstLetter,
        amount,
        transactionNote
    };
};
