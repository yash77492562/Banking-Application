'use client'
import { useState, useEffect } from 'react'

type Transaction = {
  amount: number
  userId: string
  username: string
  firstLetter: string
  transactionTime: string
}

export const PaymentStatus = ({ userId, mode }: { userId: string, mode: string }) => {
  const [amount, setAmount] = useState<number>(0)
  const [username, setUsername] = useState<string>('')
  const [user_name, setUser_name] = useState<string>('')
  const [transactionRefNo, setTransactionRefNo] = useState<string>('')
  const [firstLetter, setFirstLetter] = useState<string>('')
  const [upiId, setUpiId] = useState<string>('')
  const [transactionId, setTransactionId] = useState<string>('')
  const [status, setStatus] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')
  const [isTransactionDataReady, setIsTransactionDataReady] = useState<boolean>(false)

  useEffect(() => {
    const fetchTransactionHistory = async () => {
      setIsLoading(true)
      setError('')
      try {
        const response = await fetch('/api/transaction_history')
        if (!response.ok) {
          throw new Error('Failed to fetch transactions')
        }
        const data = await response.json()
        console.log(data)

        // Only proceed if we got a successful response
        await sendTransactionsToRecentTransactionAPI(data.transactions)
      } catch (error) {
        setError('Error while fetching transaction history')
        setIsLoading(false)
      }
    }

    const sendTransactionsToRecentTransactionAPI = async (transactions: Transaction[]) => {
      try {
        const recentTransactionData = transactions.map(transaction => ({
          userId: transaction.userId,
          username: transaction.username,
          firstLetter: transaction.firstLetter,
          transactionTime: transaction.transactionTime,
        }))
        
        let response = await fetch('/api/recentTransaction', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ transactions: recentTransactionData }),
        })

        if (!response.ok && response.status === 400) {
          console.log('Error while fetching data ')
          throw new Error('Failed to process recent transactions')
        }

        await response.json()
        setIsLoading(false)
      } catch (error) {
        setError('Error while sending/updating recent transactions: ' + error)
        setIsLoading(false)
      }
    }

    fetchTransactionHistory()
  }, [status])

  useEffect(() => {
    const getTransactionDetails = async () => {
      try {
        const response = await fetch('/api/transaction_data_database', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({ id: userId, mode })
        })

        if (!response.ok) {
          throw new Error('Failed to fetch transaction details')
        }

        const result = await response.json()
        console.log(result)

        if (result && result.success) {
          setUsername((result.data.transaction_data.toUser.username || '').toUpperCase())
          setFirstLetter(result.data.firstLetter || '')
          setTransactionId(result.data.transaction_data.transactionId)
          setTransactionRefNo(result.data.transactionReferenceNo)
          setAmount(result.data.transaction_data.amount)
          setUpiId(result.data.mode_value)
          setUser_name(result.data.user_name.username)
          setStatus(true)
          setIsTransactionDataReady(true)
        } else {
          throw new Error('Transaction data not found')
        }
      } catch (error) {
        setError("Failed to fetch transaction details. Please try again.")
        setStatus(false)
      } finally {
        setIsLoading(false)
      }
    }

    getTransactionDetails()
  }, [userId, mode])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        <p className="ml-3">Processing transaction...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-6 rounded-3xl border flex flex-col items-center justify-center min-h-[400px]">
        <div className="text-red-500 font-semibold text-center">
          <svg
            className="w-12 h-12 mx-auto mb-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <p>{error}</p>
        </div>
      </div>
    )
  }

  if (!isTransactionDataReady) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <p>No transaction data available.</p>
      </div>
    )
  }

  return (
    <div className="p-6 rounded-3xl border flex flex-col justify-center items-center">
      <div className="font-semibold pb-4">Status: Successful</div>
      <div className="border-t flex flex-col gap-8">
        <div>
          <div className="font-semibold">Amount</div>
          <div className="text-gray-500 font-semibold">{amount.toFixed(2)}</div>
        </div>
        <div className="border-t">
          <div className="font-semibold text-gray-300">To</div>
          <div className="font-semibold">{username}</div>
          <div className="text-gray-500 font-semibold">{upiId}</div>
        </div>
        <div className="border-t">
          <div className="font-semibold text-gray-300">From</div>
          <div className="font-semibold">{user_name.toUpperCase()}</div>
          <div className="font-semibold text-gray-500">Gringotts Wizarding Bank</div>
        </div>
      </div>
    </div>
  )
}