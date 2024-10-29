'use client'

import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react"


type RecentTransaction = {
    toUserId: string
    username: string
    firstLetter: string
    transactionTime: string
    mode:string
}

export default function TransactionHistory() {
    const router = useRouter();
    const [userRecentTransactions, setUserRecentTransactions] = useState<RecentTransaction[]>([]);
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState(true);

    
    const encryptUserId = async ({userId , mode}:{userId:string,mode:string}) => {
        try {
            const response = await fetch('/api/encrypt_data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId ,mode }), // Send userId to the encryption API
            });

            const result = await response.json();
            console.log('response api result', result);
            if (result && result.success) {
                // Redirect to AmountEnter with the encrypted userId
                router.push(`/AmountEnter?id=${result.data.userId}&m=${result.data.mode}`);

            } else {
                console.error('Encryption failed:', result.message);
            }
        } catch (error) {
            console.error('Error encrypting userId:', error);
        }
    };

    useEffect(() => {

        const fetchUserRecentTransactions = async () => {
            try {
                const response = await fetch('/api/user_recent_transaction');
                if (!response.ok) {
                    throw new Error('Failed to fetch user recent transactions');
                }
                const data = await response.json();
                console.log(data,'Data from user_recent_transaction api')
                setUserRecentTransactions(data.transactions);
            } catch (error) {
                setError('Error while fetching user recent transaction history');
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserRecentTransactions();
    }, []);

    if (isLoading) {
        return <div>Loading Recent Transaction...</div>;
    }

    return (
        
        <div className="flex-1 h-[calc(100vh-120px)]">
            {error && <p className="text-red-500 mb-4">{error}</p>}

            <div>
                {userRecentTransactions.length > 0 ? (
                    <ul className="space-y-4  pt-8 pl-8 h-full overflow-y-auto hide-scrollbar">
                        {userRecentTransactions.map((transaction, index) => (
                            <li key={index} className="p-4  border rounded-3xl shadow-sm hover:shadow-lg transition-shadow w-5/6">
                                <div onClick={() => encryptUserId({userId: transaction.toUserId, mode: transaction.mode})} className="flex cursor-pointer select-none items-center space-x-4">
                                    <div className="w-[40px] h-[40px] bg-blue-500 text-white rounded-full flex justify-center items-center text-lg font-semibold">
                                        {transaction.firstLetter}
                                    </div>
                                    <div className="flex-grow">
                                        <div className="font-semibold text-black">
                                            {(transaction.username).toUpperCase()}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">No recent transaction found</p>
                )}
            </div>
        </div>
    );
}