import { prisma } from "@repo/prisma_database/client";
import { NextResponse } from "next/server";
import { getUserId } from "../../userId/userId";

export async function GET() {
  try {
    const userId = await getUserId();
    // Fetch paid transactions sorted by transactionTime
    const paidRecentTransaction = await prisma.recentTransaction.findMany({
      where: {
        fromUserId: userId,
      },
      orderBy: {
        transactionTime: "desc", // Sorting by date in descending order
      },
      select: {
        toUserId: true,
        transactionTime: true,
        username: true,
        firstLetter: true,
        mode:true
      },
    });
    console.log(paidRecentTransaction,'PaidRecentTransaction')

    // Filter to get only the latest transaction for each user
    const latestTransactionsMap = new Map();
    for (const transaction of paidRecentTransaction) {
      const existingTransaction = latestTransactionsMap.get(transaction.toUserId);
      if (
        !existingTransaction ||
        new Date(transaction.transactionTime) > new Date(existingTransaction.transactionTime)
      ) {
        // If no transaction exists for this user, or this one is more recent, update the map
        latestTransactionsMap.set(transaction.toUserId, transaction);
      }
    }

    // Convert the map values to an array and sort by transaction time in descending order
    const latestTransactions = Array.from(latestTransactionsMap.values()).sort(
      (a, b) => new Date(b.transactionTime).getTime() - new Date(a.transactionTime).getTime()
    );

    return NextResponse.json({success:true, transactions: latestTransactions },{status:200});
  } catch (error) {
    console.error("Error fetching transactions:", error);
    return NextResponse.json(
      { error: "Error fetching transaction history" },
      { status: 500 }
    );
  }
}
