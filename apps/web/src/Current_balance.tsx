'use client';
import React, { useState,useEffect} from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { balanceState, fetchAndUpdateBalanceState, formattedBalanceState } from '../app/components/BalanceAtom';
import Pin from '../app/components/loginPin';

export function BalanceComponent() {
  const [balance, setBalance] = useRecoilState(balanceState);
  const formattedBalance = useRecoilValue(formattedBalanceState);
  const fetchedBalance = useRecoilValue(fetchAndUpdateBalanceState);
  const [showBalance, setShowBalance] = useState(false);
  const [showPinInput, setShowPinInput] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

      
  useEffect(() => {
    if (fetchedBalance !== undefined) {
      setBalance(fetchedBalance);
    } else {
      setBalance(0); // Set a default value when fetchedBalance is undefined
    }
  }, [fetchedBalance, setBalance]);
  const handleCheckBalance = () => {
    setShowPinInput(true);
  };

  const handlePinSuccess = async () => {
    try {
      setIsLoading(true);
      
      setShowBalance(true);
    } catch (error) {
      console.error('Error fetching balance:', error);
      alert('Failed to fetch balance. Please try again.');
    } finally {
      setIsLoading(false);
      setShowPinInput(false);
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      {showPinInput ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Enter PIN to View Balance</h2>
            <Pin
              type="paymentPin"
              onSuccess={handlePinSuccess}
              onCancel={() => setShowPinInput(false)}
            />
          </div>
        </div>
      ) : (
        <div className="w-1/2 p-6 flex flex-col items-center gap-4">
          {isLoading ? (
            <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-gray-600">Fetching your balance...</p>
            </div>
          ) : !showBalance ? (
            <div
              onClick={handleCheckBalance}
              className="border rounded-lg  px-6 py-2 cursor-pointer  transition-colors"
            >
              Check Balance
            </div>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-2">Your Balance</h2>
              <div className="text-3xl text-blue-600">{formattedBalance}</div>
              <div
                onClick={() => setShowBalance(false)}
                className=" border mt-6 rounded-xl px-6 py-2 cursor-pointer text-gray-600 hover:text-gray-800"
              >
                Hide Balance
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}