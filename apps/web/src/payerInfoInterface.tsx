'use client'
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'; // Import the useRouter hook
import { Button } from "../app/components/Button";
import { Input } from "../app/components/input";
import { Label } from "../app/components/input";
import { encrypt } from "@repo/encrypt/client";

export const Payer_details = () => {
  const router = useRouter(); // Initialize the useRouter hook
  const [accountNo, setAccountNo] = useState("");
  const [ifscNo, setIfscNo] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [status, setStatus] = useState<boolean | null>(null);
  const [userId, setUserId] = useState<string | null>(null); // State to store the userId
  const [mode, setMode] = useState<string | null>(null); // State to store the userId

  useEffect(() => {
    if (status && userId) {
      const encryptUserId = async () => {
      try {
        const response = await fetch("/api/encrypt_data", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({userId ,mode}), // Send userId to the encryption API
        });

        const result = await response.json();
        console.log("response api result"+ result)
        if (result && result.success && result.userId) {     
          // Redirect to AmountEnter with the encrypted userId
          router.push(`/AmountEnter?id=${result.data.userId}&m=${result.data.mode}`);
        } else {
          console.error('Encryption failed:', result.message);
        }
      } catch (error) {
        console.error("Error encrypting userId:", error);
      }
    };
    encryptUserId(); // Call the encryption function
  }
  }, [status, userId, router]);

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Construct the payload
    const payload = {
      account: accountNo,
      phoneValue: phoneNo,
      ifscValue: ifscNo,
    };

    // Send the data to the API
    try {
      const response = await fetch("/api/payer_details", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      console.log(result);
      if (result && result.success) {
        setUserId(result.data.user_id); // Store the userId from the API response
        setMode(result.data.mode)
        setStatus(true);
      } else {
        setStatus(false);
      }
    } catch (error) {
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="border flex justify-center items-center">
      <div className="w-1/2 border-r">
        <img
          className="object-cover object-center w-full h-full"
          src="/images/moneyExchange.jpg"
          alt=""
        />
      </div>
      <div className="w-1/2 flex items-center flex-col gap-3 ">
        <div className="font-bold">Payer Account Information</div>
        <div className="w-1/2">
          <Label name="accountNo" htmlFor="account" label="Account NO" />
          <Input
            type="text"
            className="mt-2"
            id="account"
            placeholder="321652987"
            name="accountNo"
            value={accountNo}
            onChange={(e) => setAccountNo(e.target.value)}
          />
        </div>
        <div className="w-1/2">
          <Label name="ifscNo" htmlFor="ifsc" label="IFSC NO" />
          <Input
            type="text"
            className="mt-2"
            id="ifsc"
            placeholder="123456"
            name="ifscNo"
            value={ifscNo}
            onChange={(e) => setIfscNo(e.target.value)}
          />
        </div>
        <div className="w-1/2">
          <Label name="phoneNo" htmlFor="phone" label="Phone No" />
          <Input
            type="text"
            className="mt-2"
            id="phone"
            placeholder="1234567891"
            name="phoneNo"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
          />
        </div>
        <div>
          <Button className="mt-2" title="Proceed" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};
