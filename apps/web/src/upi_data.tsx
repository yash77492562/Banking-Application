// pages/upi.tsx
'use client';
import { useEffect, useState } from 'react';

interface UpiData {
  pa: string;
  pn: string;
  cu: string;
}

export default function UpiDetails() {
  const [upiData, setUpiData] = useState<UpiData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Store error message as string

  useEffect(() => {
    const fetchUpiData = async () => {
      try {
        const response = await fetch("/api/user/upi");
        if (!response.ok) {
          const errorDetails = await response.text(); // Fetch detailed error response
          throw new Error(`Failed to fetch UPI data. Status: ${response.status}, Details: ${errorDetails}`);
        }
        const data = await response.json();
        setUpiData(data);
      } catch (err: any) {
        console.error('Fetch UPI data failed:', err); // Log full error for debugging
        setError(err.message || 'Unknown error occurred'); // Set readable error message
      } finally {
        setLoading(false);
      }
    };

    fetchUpiData();
  }, []);

  if (loading) return <p>Loading UPI data...</p>;

  if (error) return <p>Error: {error}</p>; // Display detailed error message

  return (
    <div>
      <h1>UPI Details</h1>
      {upiData ? (
        <div>
          <p>PA: {upiData.pa}</p>
          <p>PN: {upiData.pn}</p>
          <p>Currency: {upiData.cu}</p>
        </div>
      ) : (
        <p>No UPI data found for this user.</p>
      )}
    </div>
  );
}
