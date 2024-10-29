"use client";
import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';

interface UPI_Info {
  pa: string;  // Payment Address (UPI ID)
  pn: string;  // Payee Name
  cu: string;  // Currency Code (INR)
  mc?: string; // Optional Merchant Code
  mode?: string; // Optional Mode of Payment
  purpose?: string; // Optional Purpose of Payment
  orgid?: string; // Optional Organization ID
  cust?: string; // Optional Customer ID
}

interface QRCodeGeneratorProps {
  upidata: UPI_Info | null;  // Allow upidata to be null
}

export const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ upidata }) => {
  const [qrCode, setQrCode] = useState<string>('');  // Maintain the state for QR code
  const [isLoading, setIsLoading] = useState<boolean>(true);  // Loading state
  const logoUrl = 'images/bog1.jpg';  

  useEffect(() => {
    if (!upidata) return console.log('Database Problem here!');  // Handle the case where upidata is null

    const generateQRCode = async () => {
      try {
        // Construct the UPI data string in the correct format and ensure proper encoding
        const dataToEncode = `upi://pay?pa=${encodeURIComponent(upidata.pa)}&pn=${encodeURIComponent(upidata.pn)}&cu=${encodeURIComponent(upidata.cu)}` +
          `${upidata.mc ? `&mc=${encodeURIComponent(upidata.mc)}` : ''}` +  
          `${upidata.mode ? `&mode=${encodeURIComponent(upidata.mode)}` : ''}` +  
          `${upidata.purpose ? `&purpose=${encodeURIComponent(upidata.purpose)}` : ''}` +  
          `${upidata.orgid ? `&orgid=${encodeURIComponent(upidata.orgid)}` : ''}` +  
          `${upidata.cust ? `&cust=${encodeURIComponent(upidata.cust)}` : ''}`;

        
        // Generate the QR code using qrcode library
        const qrCodeDataUrl = await QRCode.toDataURL(dataToEncode, { 
          errorCorrectionLevel: 'H',  // High error correction level for better scanning and logo support
          width: 500,  // Increased size for better readability
          margin: 2,   // Adjust margins to ensure QR readability
          color: {
            dark: "#000",  // QR code color
            light: "#fff"  // Background color
          }
        });
        
        setQrCode(qrCodeDataUrl);  // Set generated QR code as base64 string
      } catch (err) {
        console.error('Error generating QR Code:', err);
      } finally {
        setIsLoading(false);  // Set loading state to false after QR code is generated
      }
    };

    generateQRCode();
  }, [upidata]);  // Trigger QR code generation only when upidata changes

  if (!upidata) {
    return <p className='text-white'>No UPI data available.</p>;  // Render message if upidata is null
  }

  return (
    <div className='relative w-full h-screen flex justify-center items-center'>
      {isLoading ? (
        <p className='text-white'>Generating UPI QR Code...</p>  // Show loading text while QR code is generating
      ) : (
        <>
        <div className='relative w-[300px] h-[300px'>
          <img
            src={qrCode}
            alt="UPI QR Code"
            style={{ width: '100%', height: '100%' }} // Customize the size of the QR code
          />
          {qrCode && (
            <img
              src={logoUrl}  // Path to your logo
              alt="Logo"
              style={{
                position: 'absolute',
                top: '50%',  // Center the logo vertically
                left: '50%', // Center the logo horizontally
                transform: 'translate(-50%, -50%)',  // Correct centering transformation
                width: '80px',  // Logo size (adjustable)
                height: '80px', // Logo size (adjustable)
                borderRadius: '50%',  // Optionally make it circular
                backgroundColor: 'white',  // Ensures a white background behind the logo to improve scan-ability
                padding: '5px'  // Add padding around the logo
              }}
            />
          )}
        </div>
        </>
      )}
    </div>
  );
};
