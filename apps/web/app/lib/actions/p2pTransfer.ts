"use server";
import { prisma } from "@repo/prisma_database/client";
import { generateUniqueTransactionRef } from "../../backend/service/transactionReferenceNo";

interface Transaction {
  fromUserId: string;
  toUserId: string;
  amount: number;
  transactionNote: string;
}

export async function Transaction({
  fromUserId,
  toUserId,
  amount,
  transactionNote,
}: Transaction) {
  try {
    const transactionData = await prisma.$transaction(async (tx) => {
      // Locking the row for update to avoid race conditions
      await tx.$queryRaw`SELECT * FROM "Balance" WHERE "balanceId" = ${fromUserId} FOR UPDATE`;

      // Fetching the balance details for the sender
      const Balance = await tx.balance.findFirst({
        where: {
          balanceId: fromUserId,
        },
        select: {
          id: true,
          amount: true,
        },
      });

      // Fetching the balance details for the receiver
      const toUserIdBalance = await tx.balance.findFirst({
        where: {
          balanceId: toUserId,
        },
        select: {
          id: true,
        },
      });

      // Check if the sender's balance is sufficient
      if (!Balance || Balance.amount < amount) {
        throw new Error("Insufficient Balance");
      }

      // Check if the recipient user exists
      if (!toUserIdBalance) {
        throw new Error("No User of that ID");
      }

      // Deduct the amount from the sender's balance
      await tx.balance.update({
        where: {
          id: Balance.id,
        },
        data: {
          amount: { decrement: amount },
        },
      });

      // Add the amount to the recipient's balance
      await tx.balance.update({
        where: {
          id: toUserIdBalance.id,
        },
        data: {
          amount: { increment: amount },
        },
      });

      // Create the transaction record
      const data = await tx.transaction.create({
        data: {
          toUserId,
          fromUserId,
          transactionNote: transactionNote ? transactionNote: "",
          transactionReferenceNo: parseInt(await generateUniqueTransactionRef()),
          amount,
        },
      });

      // Returning the created transaction data from the transaction callback
      return data;
    });

    // Return the transaction data from the outer function
    return transactionData;
  } catch (error) {
    console.error(error);
    return false;
  }
}
