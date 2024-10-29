'use client';
import React, { useState, useRef, useEffect } from "react";

type PinType = 'loginPin' | 'paymentPin';

interface PinInputProps {
  type: PinType;
  onSuccess?: () => void;
  onCancel?: () => void;
}

export default function Pin({ type, onSuccess, onCancel }: PinInputProps) {
  const [pin, setPin] = useState<string[]>(["", "", "", "", "", ""]);
  const [confirmPin, setConfirmPin] = useState<string[]>(["", "", "", "", "", ""]);
  const [match, setMatch] = useState<boolean | null>(null);
  const [complete, setComplete] = useState<boolean | null>(null);
  const [hasPin, setHasPin] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [store_pin, setStore_pin] = useState<string>("");

  const pinRefs = useRef<(HTMLInputElement | null)[]>([]);
  const confirmPinRefs = useRef<(HTMLInputElement | null)[]>([]);

  const apiEndpoints = {
    loginPin: {
      check: '/api/checkLoginPin',
      set: '/api/setLoginPin',
      verify: '/api/verifyLoginPin'
    },
    paymentPin: {
      check: '/api/checkPaymentPin',
      set: '/api/setPaymentPin',
      verify: '/api/verifyPaymentPin'
    }
  };

  useEffect(() => {
    checkForExistingPin();
  }, [type]);

  useEffect(() => {
    if (pin.every(digit => digit !== "") && confirmPin.every(digit => digit !== "")) {
      setMatch(pin.join("") === confirmPin.join(""));
    } else {
      setMatch(null);
    }
  }, [pin, confirmPin]);

  useEffect(() => {
    if (match === true) {
      sendPinToBackend();
    } else if (hasPin && pin.every(digit => digit !== "")) {
      verifyPin();
    }
  }, [match, complete]);

  const checkForExistingPin = async () => {
    try {
      const response = await fetch(apiEndpoints[type].check, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      console.log(data , 'we are showning data here')
      setHasPin(data.hasPin);
      setStore_pin(data.store_pin);
    } catch (error) {
      console.error(`Error checking for existing ${type}:`, error);
      setError("Failed to check existing PIN");
    } finally {
      setIsLoading(false);
    }
  };

  const verifyPin = async () => {
    try {
      const pinNumber = Number(pin.join(''));
      
      const response = await fetch(apiEndpoints[type].verify, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pin: pinNumber ,store_pin}),
      });

      const result = await response.json();
      
      if (result.success) {
        setError("");
        // Call onSuccess callback if provided
        onSuccess?.();
      } else {
        setError("Incorrect PIN. Please try again.");
        // Clear the PIN inputs
        setPin(["", "", "", "", "", ""]);
        // Focus on first input
        pinRefs.current[0]?.focus();
      }
    } catch (error) {
      console.error(`Error verifying ${type}:`, error);
      setError("Failed to verify PIN");
    }
  };

  const handlePinChange = (index: number, value: string, inputType: "pin" | "confirm") => {
    const updatedPin = inputType === "pin" ? [...pin] : [...confirmPin];

    if (/^[0-9]?$/.test(value)) {
      updatedPin[index] = value;

      if (inputType === "pin") {
        setPin(updatedPin);
        // If all digits are filled and we have an existing PIN, verify immediately
        if (hasPin && updatedPin.every(digit => digit !== "")) {
          setComplete(true);
        }
      } else {
        setConfirmPin(updatedPin);
      }

      if (value && index < updatedPin.length - 1) {
        const nextRef = inputType === "pin" ? pinRefs.current[index + 1] : confirmPinRefs.current[index + 1];
        nextRef?.focus();
      }
    }
  };

  const handleBackspace = (index: number, inputType: "pin" | "confirm", e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && index > 0 && !pin[index]) {
      const prevRef = inputType === "pin" ? pinRefs.current[index - 1] : confirmPinRefs.current[index - 1];
      prevRef?.focus();
    }
  };

  const sendPinToBackend = async () => {
    try {
      const pinNumber = Number(pin.join(''));

      const response = await fetch(apiEndpoints[type].set, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pin: pinNumber }),
      });

      const result = await response.json();
      
      if (result.success) {
        setHasPin(true);
        // Call onSuccess callback if provided
        onSuccess?.();
      }
    } catch (error) {
      console.error(`Error sending ${type} to backend:`, error);
      setError("Failed to set PIN");
    }
  };

  const getTitle = () => {
    return type === 'loginPin' ? 'Login PIN' : 'Payment PIN';
  };

  return (
    <div className="p-6 bg-white rounded-lg">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">{getTitle()}</h2>
            {onCancel && (
              <button 
                onClick={onCancel}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            )}
          </div>
          
          <div>
            <label>Enter {getTitle()}:</label>
            <div className="flex gap-2">
              {pin.map((digit, index) => (
                <input
                  key={index}
                  type="password"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handlePinChange(index, e.target.value, "pin")}
                  onKeyDown={(e) => handleBackspace(index, "pin", e)}
                  ref={(el) => {
                    pinRefs.current[index] = el;
                  }}
                  className="w-12 h-12 text-center text-2xl border-2 border-black rounded"
                />
              ))}
            </div>
          </div>

          {!hasPin && (
            <div className="mt-5">
              <label>Confirm {getTitle()}:</label>
              <div className="flex gap-2">
                {confirmPin.map((digit, index) => (
                  <input
                    key={index}
                    type="password"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handlePinChange(index, e.target.value, "confirm")}
                    onKeyDown={(e) => handleBackspace(index, "confirm", e)}
                    ref={(el) => {
                      confirmPinRefs.current[index] = el;
                    }}
                    className="w-12 h-12 text-center text-2xl border-2 border-black rounded"
                  />
                ))}
              </div>
            </div>
          )}

          {error && <p className="text-red-500 mt-2">{error}</p>}
          {match === true && <p className="text-green-500 mt-2">PINs match! Setting up your PIN...</p>}
          {match === false && <p className="text-red-500 mt-2">PINs do not match!</p>}
        </>
      )}
    </div>
  );
}