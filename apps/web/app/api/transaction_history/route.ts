import { NextRequest, NextResponse } from 'next/server'
import { prisma } from "@repo/prisma_database/client"
import { getUserId } from '../../userId/userId'

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const userId = await getUserId()

        // Fetch received transactions sorted by transactionTime
        const receivedHistory = await prisma.transaction.findMany({
            where: {
                toUserId: userId
            },
            orderBy: {
                transactionTime: 'desc' // Sorting by date in descending order
            },
            select: {
                amount: true,
                fromUserId: true,
                transactionTime: true,
                fromUser: {
                    select: {
                        username: true,
                    }
                }
            }
        })

        // Fetch paid transactions sorted by transactionTime
        const paidHistory = await prisma.transaction.findMany({
            where: {
                fromUserId: userId
            },
            orderBy: {
                transactionTime: 'desc' // Sorting by date in descending order
            },
            select: {
                amount: true,
                toUserId: true,
                transactionTime: true,
                toUser: {
                    select: {
                        username: true
                    }
                }
            }
        })

        // Transform data and combine transactions
        const allTransactions = [
            ...receivedHistory.map(t => ({
                type: 'received',
                amount: t.amount / 100,
                userId: t.fromUserId,
                username: t.fromUser.username,
                firstLetter: t.fromUser.username.charAt(0).toUpperCase(),
                transactionTime: t.transactionTime.toISOString()
            })),
            ...paidHistory.map(t => ({
                type: 'paid',
                amount: t.amount / 100,
                userId: t.toUserId,
                username: t.toUser.username,
                firstLetter: t.toUser.username.charAt(0).toUpperCase(),
                transactionTime: t.transactionTime.toISOString()
            }))
        ].sort((a, b) =>
            new Date(b.transactionTime).getTime() - new Date(a.transactionTime).getTime()
        )

        return NextResponse.json({ transactions: allTransactions })
    } catch (error) {
        console.error('Error fetching transactions:', error)
        return NextResponse.json(
            { error: 'Error fetching transaction history' },
            { status: 500 }
        )
    }
}
