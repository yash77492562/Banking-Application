'use client'

import { useEffect, useState } from "react"

type Transaction = {
    type: string
    amount: number
    userId: string
    username: string
    firstLetter: string
    transactionTime: string
}

export default function TransactionHistory() {
    const [transactions, setTransactions] = useState<Transaction[]>([])
    const [error, setError] = useState<string>('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchTransactionHistory = async () => {
            try {
                const response = await fetch('/api/transaction_history')
                if (!response.ok) {
                    throw new Error('Failed to fetch transactions')
                }
                const data = await response.json()
                setTransactions(data.transactions)
            } catch (error) {
                setError('Error while fetching transaction history')
            } finally {
                setIsLoading(false)
            }
        }

        fetchTransactionHistory()
    }, [])

    const formatDate = (transactionDate: string) => {
        const transactionTime = new Date(transactionDate)
        const now = new Date()

        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
        const yesterday = new Date(today)
        yesterday.setDate(today.getDate() - 1)

        const options: Intl.DateTimeFormatOptions = {
            hour: '2-digit',
            minute: '2-digit'
        }
        const timeString = transactionTime.toLocaleTimeString(undefined, options)

        if (transactionTime >= today) {
            return `Today at ${timeString}`
        } else if (transactionTime >= yesterday) {
            return `Yesterday at ${timeString}`
        } else {
            return `${transactionTime.toLocaleDateString()} at ${timeString}`
        }
    }

    if (isLoading) {
        return <div>Loading transaction history...</div>
    }

    return (
        // Main container with fixed height and padding
        <div className="h-screen p-4">
            <h2 className="text-2xl font-bold mb-4">Transaction History</h2>

            {error && <p className="text-red-500 mb-4">{error}</p>}

            {/* Container for transactions list with flex to take remaining height */}
            <div className="flex-1 h-[calc(100vh-120px)]">
                {transactions.length > 0 ? (
                    // Transaction list with hidden scrollbar but scrollable
                    <ul className="space-y-4  pt-8 pl-8 h-full overflow-y-auto hide-scrollbar">
                        {transactions.map((transaction, index) => (
                            <li key={index} className="p-4 border rounded-3xl shadow-sm hover:shadow-lg transition-shadow w-5/6 ">
                                <div className={`font-semibold pb-2 pl-1 ${
                                    transaction.type === 'received' ? 'text-green-600' : 'text-red-600'
                                }`}>
                                    {transaction.type === 'received' ? 'Received' : 'Paid'}
                                </div>
                                <div className="flex items-center space-x-4 border-t pt-3">
                                    {/* Avatar circle */}
                                    <div className="w-[50px] h-[50px] bg-blue-500 text-white rounded-full flex justify-center items-center text-lg font-semibold">
                                        {transaction.firstLetter}
                                    </div>
                                    {/* User details */}
                                    <div className="flex-grow">
                                        <div className="font-semibold text-black">
                                            {transaction.username.toUpperCase()}
                                        </div>
                                        <div className="text-sm text-gray-400">
                                            {formatDate(transaction.transactionTime)}
                                        </div>
                                    </div>
                                    {/* Amount and type */}
                                    <div className="font-semibold flex flex-col">
                                        <div className="w-full text-right">
                                            ${transaction.amount.toFixed(2)}
                                        </div>
                                        <div className="w-full text-gray-400 text-right">
                                            {transaction.type === 'received' ? 'in' : 'from'} Gringotts
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">No transactions found</p>
                )}
            </div>
        </div>
    )
}