'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Amount_Enter } from "../../src/Amount_Enter";

export default function Payer_info() {
    const searchParams = useSearchParams();
    const userId = searchParams.get('id');
    const mode= searchParams.get('m')
    const [decryptedUserId, setDecryptedUserId] = useState(null); // State for storing decrypted userId
    const [decryptedMode, setDecryptedMode] = useState(null); // State for storing decrypted userId
    const [loading, setLoading] = useState(true); // State to show loading status

    useEffect(() => {
        if (userId) {
            const decryptUserId = async () => {
                try {
                    const response = await fetch("/api/decrypt_data", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ userId,mode }), // Send userId to the decryption API
                    });

                    const result = await response.json();
                    console.log("API response result:", result);

                    if (result.success && result) {
                        setDecryptedUserId(result.data.userId); // Update state with decrypted userId
                        setDecryptedMode(result.data.mode); // Update state with decrypted userId
                    } else {
                        console.error('Decryption failed:', result.message);
                    }
                } catch (error) {
                    console.error("Error decrypting userId:", error);
                } finally {
                    setLoading(false); // Set loading to false after the fetch completes
                }
            };
            decryptUserId(); // Call the decryption function
        } else {
            setLoading(false); // No userId, set loading to false
        }
    }, [userId]);

    if (loading) {
        return <div>Loading...</div>; // Show loading state
    }

    if (!decryptedUserId) {
        return <div>Error decrypting user ID.</div>; // Error state
    }
    if (!decryptedMode) {
        return <div>Error decrypting mode.</div>; // Error state
    }

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <Amount_Enter userId={decryptedUserId} mode={decryptedMode} />
        </div>
    );
}
