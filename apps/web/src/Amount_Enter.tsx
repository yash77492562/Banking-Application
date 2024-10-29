'use client'
import { useState, useEffect } from 'react'
import { Button } from "../app/components/Button"
import { DesignInput, Label } from "../app/components/input"
import { useRouter } from 'next/navigation';
import Pin from '../app/components/loginPin';

export const Amount_Enter = ({ userId, mode }: { userId: string, mode: string }) => {
    const router = useRouter()
    const [amount, setAmount] = useState<number>(0)
    const [username, setUsername] = useState<string>('')
    const [mode_value, setMode_value] = useState<string>('')
    const [firstLetter, setFirstLetter] = useState<string>('')
    const [transactionNote, setTransactionNote] = useState<string>('')
    const [fromUserId, setFromUserId] = useState<string>('')
    const [showPinInput, setShowPinInput] = useState<boolean>(false)

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
                router.push(`/PaymentStatus?id=${result.data.userId}&m=${result.data.mode}`);

            } else {
                console.error('Encryption failed:', result.message);
            }
        } catch (error) {
            console.error('Error encrypting userId:', error);
        }
    };
    
    useEffect(() => {
        const getAmountDetails = async () => {
            try {
                const response = await fetch('/api/amount_data', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ userId, mode })
                })

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const result = await response.json();
                console.log(result);

                if (result && result.success) {
                    setUsername((result.data.username || '').toUpperCase());
                    setFirstLetter(result.data.firstLetter || '');
                    setMode_value(result.data.mode_value || '');
                    setFromUserId(result.data.fromUserId)
                } else {
                    console.log('Eror while feching data from server')
                }
            } catch (error) {
                console.error("An error occurred while submitting the form:", error);
                alert("An error occurred while submitting the form.");
            }
        }

        getAmountDetails();
    }, [userId])

    const Transaction = {
        fromUserId,
        toUserId: userId,
        amount: amount * 100,
        transactionNote
    }

    const handlePay = async () => {
        // Show PIN input instead of immediately processing transaction
        setShowPinInput(true);
    }

    const handlePinSuccess = async () => {
        // This function will be called after successful PIN verification
        try {
            const response = await fetch('/api/transaction', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(Transaction)
            });
            if (response.ok) {
                const result = await response.json()
                console.log(result.data.id , 'result.data.id')
                // If the transaction is successful, set the transaction ID
                if (result.success && result.data && result.data.id) {
                    const transaction_id = result.data.id
                    encryptUserId({userId:transaction_id,mode})
                } else {
                    // Handle cases where the response doesn't contain the expected data
                    console.error('Transaction was not successful or data is missing:', result);
                }
            } else {
                throw new Error('Transaction failed');
            }
        } catch (error) {
            console.error(error);
            alert('Transaction failed. Please try again.');
        } finally {
            setShowPinInput(false); // Hide PIN input regardless of outcome
        }
    }

    return (
        <div className="w-full h-full border flex items-center justify-center">
            {showPinInput ? (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Enter Payment PIN</h2>
                        <Pin
                            type="paymentPin"
                            onSuccess={handlePinSuccess}
                            onCancel={() => setShowPinInput(false)}
                        />
                    </div>
                </div>
            ) : (
                <div className="w-1/2 h-4/6 flex flex-col border p-6 justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full text-white bg-blue-500">
                            {firstLetter}
                        </div>
                        <div>
                            <div className="font-semibold">{username}</div>
                            <div className="text-gray-500">{mode_value}</div>
                        </div>
                    </div>
                    <div className="flex flex-col self-center gap-9">
                        <div>
                            <Label name="Amount" label="Amount" className="text-gray-500 font-medium m-0" />
                            <DesignInput
                                placeholder="100"
                                name="Amount"
                                type="number"
                                className="mt-2 appearance-none no-spinner"
                                onChange={(e) => {
                                    const amountValue = parseFloat(e.target.value);
                                    setAmount(isNaN(amountValue) ? 0 : amountValue);
                                }}
                            />
                        </div>
                        <div>
                            <DesignInput
                                placeholder="Transaction Note"
                                name="transactionNote"
                                type="text"
                                onChange={(e) => {
                                    setTransactionNote(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="self-center">
                        <Button title="Pay" onClick={handlePay} className="w-[150px]" />
                    </div>
                </div>
            )}
        </div>
    )
}