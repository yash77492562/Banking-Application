"use client";

import { useRouter } from 'next/navigation'; // Updated import
import { useState, useEffect } from 'react';
import { Input } from '../app/components/input';
import TransactionHistory from './RecentTransaction';

export function Find_user() {
    const router = useRouter();
    const [userId, setUserId] = useState<string | null>(null);
    const [mode, setMode] = useState<string | null>(null);
    const [status, setStatus] = useState<boolean>(false);
    const [input, setInput] = useState<string>('');

    useEffect(() => {
        if (status && userId) {
            const encryptUserId = async () => {
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
            encryptUserId(); // Call the encryption function
        }
    }, [status, userId, router]);

    const sendInput = async () => {
        try {
            const response = await fetch('/api/search_input', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ input }),
            });
            console.log(response)
            if (!response.ok) {
                return null;
            }
            const result = await response.json();
            if (typeof(result) == 'object' && result.success) {
                console.log('result true if condition is running')
                console.log(result.data.user_id)
                setUserId(result.data.user_id);
                setMode(result.data.mode)
                setStatus(true);
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="w-full h-screen flex gap-6 flex-col justify-center items-center">
            <div className="flex w-full justify-center items-center">
                <Input
                    name="search"
                    parentClassName="w-1/2"
                    placeholder="Phone / AccountNo / Upi"
                    type="text"
                    className="w-full h-11 border-r-0 rounded-none rounded-l-lg border-l"
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                />
                <div
                    className="bg-gray-50 flex justify-center items-center p-1 border-l-0 border-gray-300 cursor-pointer border pr-3 rounded-none rounded-r-lg h-full"
                    onClick={sendInput}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                    </svg>
                </div>
            </div>
            <div className='w-full h-3/4 border rounded-lg p-6  flex flex-col'>
                <div className='font-bold pb-3 text-2xl'>Recent</div>
                <TransactionHistory />
            </div>
        </div>
    );
}
