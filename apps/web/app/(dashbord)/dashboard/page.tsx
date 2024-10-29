import React from 'react';
import { DebitCard } from "../../../src/debitcard";
import { BalanceComponent } from "../../../src/Current_balance";
import Decrypted_AccountNumber from "../../../src/Decrypted_AccountNumber";
import { DecryptedUpi } from "../../../src/upiId";
import { DecryptedPhone } from "../../../src/phoneNo";
import { DecryptedEmail } from "../../../src/email";

const ExpiryInput = () => {
  return (
    <div className="h-full overflow-y-auto hide-scrollbar bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto space-y-6">

        {/* Balance Section */}
        <div className="bg-white rounded-lg font-semibold p-6 shadow-md">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Current Balance</h2>
          <BalanceComponent />
        </div>

        {/* Account Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Account Number */}
          <div className="bg-white rounded-lg p-6 font-semibold shadow-md">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Account Number</h2>
            <Decrypted_AccountNumber />
          </div>

          {/* UPI ID */}
          <div className="bg-white rounded-lg p-6 font-semibold shadow-md">
            <h2 className="text-lg font-bold text-gray-800 mb-4">UPI ID</h2>
            <DecryptedUpi />
          </div>

          {/* Phone Number */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Phone Number</h2>
            <DecryptedPhone />
          </div>

          {/* Email */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Email Address</h2>
            <DecryptedEmail />
          </div>
        {/* Debit Card Section */}
        <div className="bg-white w-[60%] rounded-lg col-span-2 font-semibold p-6 shadow-md">
          <DebitCard />
        </div>
        </div>
      </div>
    </div>
  );
};

export default ExpiryInput;