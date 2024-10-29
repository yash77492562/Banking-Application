'use client'
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation'; // Import the useRouter hook
import { Button } from '../app/components/Button';
import { Input } from '../app/components/input';
import { Label } from '../app/components/input';

const ExpiryInput = () => {
  const router = useRouter(); // Initialize the useRouter hook
  const [debit, setDebit] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [cvv, setCvv] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [expiry, setExpiry] = useState<string>('');
  const [status, setStatus] = useState<boolean | null>(null);

  const monthRef = useRef<HTMLInputElement | null>(null);
  const yearRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (status) {
      router.push('/payer_details'); // Redirect to the Payer Details page on success
    }
  }, [status, router]);

  const handleMonthChange = (value: string) => {
    if (/^\d{0,2}$/.test(value)) {
      setMonth(value);
      if (value.length === 2) {
        setTimeout(() => {
          yearRef.current?.focus();
        }, 0);
      }
    }
  };

  const handleYearChange = (value: string) => {
    if (/^\d{0,2}$/.test(value)) {
      setYear(value);
    }
  };

  const handleUsernameChange = (value: string) => {
    setUsername(value);
  };

  const handleDebitChange = (value: string) => {
    setDebit(value);
  };

  const handleCvvChange = (value: string) => {
    setCvv(value);
  };

  const sendRequestToBackend = async () => {
    try {
      const response = await fetch('/api/debit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cardNumber:debit, vaildThur:expiry, cvv })
      });
      console.log(debit,username,expiry,cvv)
      const result = await response.json();
      console.log(result)
      console.log(result.success)
      if (result && result.success) {
        setStatus(true);
      } else {
        setStatus(false);
      }
    } catch (error) {
      console.error('Error in Server:', error);
      setStatus(false);
    }
  };

  const handleYearKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && year.length === 0) {
      monthRef.current?.focus();
    }
  };

  const processExpiryDate = () => {
    if (month.length === 2 && year.length === 2) {
      const expiryDate = `${month}/${year}`;
      setExpiry(expiryDate);
      sendRequestToBackend(); // Call the backend request function here
    } else {
      alert('Please enter a valid expiry date');
    }
  };

  return (
    <div className=" w-full flex flex-col justify-center items-center h-screen">
      <div className="w-1/2">
        <Label label='Name' name='Name' className='mb-1 font-bold text-lg mt-5' />
        <Input type="text" className='mb-2' onChange={(e) => handleUsernameChange(e.target.value)} placeholder="Yash Yadav" name="Name" />
        <Label label='Debit No' name='debitNo' className='mb-1 mt-2 text-lg font-bold' />
        <Input type="text" placeholder="Debit Card Number" onChange={(e) => handleDebitChange(e.target.value)} name="debitNo" />
        <div className='flex w-full mt-2'>
          <Label name='month' className='w-full font-bold text-lg' label='Expiry' parentClassName='w-1/2' />
          <Label name='cvv' className='w-full font-bold text-lg' label='CVV' parentClassName='w-1/2' />
        </div>
        <div className="flex w-full gap-6">
          <div className='w-1/2 flex'>
            <Input
              type="text"
              placeholder="MM"
              maxLength={2}
              value={month}
              onChange={(e) => handleMonthChange(e.target.value)}
              ref={monthRef}
              name="month"
            />
            <p className='text-[25px] h-full font-bold'>/</p>
            <Input
              type="text"
              placeholder="YY"
              maxLength={2}
              value={year}
              onChange={(e) => handleYearChange(e.target.value)}
              onKeyDown={handleYearKeyDown}
              ref={yearRef}
              name="year"
            />
          </div>
          <div className='w-1/2'>
            <Input type="text" placeholder="CVV" onChange={(e) => handleCvvChange(e.target.value)} name="cvv" />
          </div>
        </div>
        <Button title="Proceed" className='mt-4' onClick={processExpiryDate} />
      </div>
    </div>
  );
};

export default ExpiryInput;
