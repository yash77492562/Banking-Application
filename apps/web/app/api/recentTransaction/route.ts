import { NextResponse } from "next/server";
import { prisma } from "@repo/prisma_database/client";
import { getUserId } from "../../userId/userId";

export async function POST(req: Request) {
  try {
    console.log("Function is called");
    const body = await req.json();
    const { transactions } = body;
    console.log(body);

    if (!transactions || !Array.isArray(transactions)) {
      return NextResponse.json(
        { message: "Please provide a valid array of transactions" },
        { status: 400 }
      );
    }

    const fromUserId = await getUserId();
    if (fromUserId === undefined) {
      return NextResponse.json(
        { message: "User not found. Please login again" },
        { status: 400 }
      );
    }

    console.log(fromUserId, "fromUserId");
    let response;
    
    // Process each transaction
    for (const { userId, transactionTime, firstLetter, username } of transactions) {
      try {
        // Check if a transaction with the composite key exists
        const existingTransaction = await prisma.recentTransaction.findFirst({
          where: {
            fromUserId,
            toUserId: userId,
          },
        });

        if (existingTransaction) {
          console.log('existingTransaction is true so we running update recentTransaction');
          
          // Check if the new transaction time is later than the existing one
          if (new Date(transactionTime) > new Date(existingTransaction.transactionTime)) {
            response = await prisma.recentTransaction.update({
              where: {
                id: existingTransaction.id,
              },
              data: {
                transactionTime
              },
            });
          } else {
            console.log('No update needed as existing transaction time is more recent or same.');
          }
        } else {
          // Create a new transaction
          response = await prisma.recentTransaction.create({
            data: {
              fromUserId,
              toUserId: userId,
              transactionTime,
              firstLetter,
              username,
            },
          });
        }

      } catch (error) {
        console.error("Error during transaction processing: ", error);
        throw new Error("Error processing recent transaction.");
      }
    }
    
    console.log("Transaction response: ", response);
    return NextResponse.json({ success: true, data: response }, { status: 200 });
  } catch (error) {
    console.error("Server error: ", error);
    return NextResponse.json({ message: "Server Problem" }, { status: 500 });
  }
}
