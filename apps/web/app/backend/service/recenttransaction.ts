import { prisma } from "@repo/prisma_database/client";

interface Recent {
  fromUserId:string;
  toUserId: string;
  username: string;
  firstLetter: string;
  userExistId?:string;
  transactionTime: Date; // Include transactionTime in the Recent interface
}
interface UpdateRecent {
  userExistId?:string;
  transactionTime: Date; // Include transactionTime in the Recent interface
}

export const RecentTableCreation = async ({fromUserId, toUserId, username, firstLetter, transactionTime }: Recent) => {
      try {
        await prisma.recentTransaction.create({
          data: {
            fromUserId,
            toUserId,
            transactionTime, // Include transactionTime in the data object
            username,
            firstLetter
          },
        });
        // Fetch and return the updated list of recent transactions
        const allRecentTransactions = await prisma.recentTransaction.findMany();
        console.log('All recent transaction',allRecentTransactions)
        return allRecentTransactions; // Return the array of recent transactions
      } catch (error) {
        throw new Error("Error while creating recentTransaction");
      }
};

export const RecentTableUpdate = async ({ userExistId,transactionTime }: UpdateRecent) => {
      try {
        await prisma.recentTransaction.update({
          where: {
            id: userExistId
          },
          data: {
            transactionTime
          }
        });
        // Fetch and return the updated list of recent transactions
        const allRecentTransactions = await prisma.recentTransaction.findMany();
        return allRecentTransactions; // Return the array of recent transactions
      } catch (error) {
        throw new Error("Error while updating recentTransaction");
      }
};
