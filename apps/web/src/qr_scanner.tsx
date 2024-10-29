"use client";
import { useRouter } from 'next/navigation'; // Import the useRouter hook
import React, { useEffect, useState, useCallback } from 'react';
import QrScanner from 'react-qr-scanner';
import jsQR from 'jsqr';
import { ButtonUpload } from '../app/components/Button';
import { Camera, Upload } from '../app/components/icon';

interface Upi {
  pa: string; // UPI ID
  pn: string; // Payee Name
  cu: string | null; // Currency (e.g., INR)
}

const App: React.FC = () => {
  const router = useRouter()
  const [isScanning, setIsScanning] = useState(true);
  const[status,setStatus] = useState<boolean>(false)
  const [userId,setUserId] = useState<string>('')
  const [Mode,setMode] = useState<string>('')
  
  useEffect(() => {
    if (status && userId) {const encryptUserId = async () => {
      try {
        const response = await fetch("/api/encrypt_data", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({userId}), // Send userId to the encryption API
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
  const parseUPIData = useCallback((upiString: string): Upi | null => {
    if (typeof upiString !== 'string') {
      console.error('Expected a string, but got:', upiString);
      return null;
    }
  
    const urlParams = new URLSearchParams(upiString.split('?')[1]);
  
    const pa = urlParams.get('pa');
    const pn = urlParams.get('pn');
    const cu = urlParams.get('cu');
  
    if (!pa || !pn) {
      console.error('Mandatory UPI data (pa, pn) is missing:', { pa, pn });
      return null;
    }
  
    const optionalFields: Record<string, string | null> = {};
    urlParams.forEach((value, key) => {
      if (key !== 'pa' && key !== 'pn') {
        optionalFields[key] = value;
      }
    });
  
    const parsedData: Upi = {
      pa,
      pn,
      cu,
    };
  
    console.log('Parsed UPI Data:', parsedData, 'Optional Fields:', optionalFields);
    return parsedData;
  }, []);

  const processQRCode = useCallback(async (data: string) => {
    const parsedData = parseUPIData(data);
    if (parsedData) {

      try {
        const response = await fetch('/api/upi-check', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(parsedData),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({
            message: `Unexpected response with status: ${response.status}`,
          }));
          throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.message}`);
        }

        const result = await response.json();
        console.log('API response:', result);
        if(result && result.success){
          setUserId(result.data.user_id)
          setMode(result.data.mode)
          setStatus(true)
        }

      } catch (error) {
        console.error('Error calling API:', error);
      }
    }
  }, [parseUPIData]);

  const handleScan = useCallback((data: any) => {
    if (!isScanning) return; // Don't process if scanning is paused
    console.log("Scanned QR code data:", data);
    if (data) {
      if (typeof data === 'string') {
        console.log("Raw QR string:", data);
        processQRCode(data);
      } else if (typeof data === 'object' && data.text) {
        console.log("Raw QR object text:", data.text);
        processQRCode(data.text);
      }
    }
  }, [processQRCode, isScanning]);

  const handleError = useCallback((error: any) => {
    console.error('QR code scan error:', error);
    let message = "There was an error accessing your camera.";
    if (error.name === 'NotAllowedError') {
      message = "Camera access was blocked. Please allow access to the camera.";
    } else if (error.name === 'NotFoundError') {
      message = "No camera found. Please ensure your device has a working camera.";
    } else if (error.name === 'NotReadableError') {
      message = "The camera is in use by another application.";
    } else if (error.name === 'OverconstrainedError') {
      message = "No camera available that matches the constraints.";
    }
    alert(message);
  }, []);

  const handleImageChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        const imgElement = new Image();
        imgElement.onload = () => {
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');

          if (context) {
            canvas.width = imgElement.width;
            canvas.height = imgElement.height;
            context.drawImage(imgElement, 0, 0, imgElement.width, imgElement.height);
            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            const code = jsQR(imageData.data, canvas.width, canvas.height);

            if (code) {
              console.log('QR code data:', code.data);
              processQRCode(code.data);
            } else {
              console.error('No QR code found');
            }
          }
        };

        imgElement.onerror = (error) => {
          console.error('Image loading error:', error);
        };

        imgElement.src = e.target?.result as string;
      };

      reader.readAsDataURL(file);
    }
  }, [processQRCode]);


  const toggleScanning = useCallback(() => {
    setIsScanning(prev => !prev);
  }, []);

  useEffect(() => {
    return () => {
      // Cleanup function to stop scanning when component unmounts
      setIsScanning(false);
    };
  }, []);

  return (
    <div>
      <h1 className='text-2xl font-bold mb-4 '>QR Code Scanner</h1>

      <div className="aspect-square max-w-sm mx-auto border-4 border-blue-500 rounded-xl overflow-hidden relative">
        <div className="absolute scan bg-blue-500 z-10  w-full h-1 top-20"></div>
        {isScanning && (
          <QrScanner
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: '100%', height: '100%', position: 'relative' }}
          />
        )}
      </div>

      <div className="flex justify-center mt-4 space-x-4">
        <ButtonUpload 
          className=''
          onClick={toggleScanning}
          title={isScanning ? 'Pause Camera' : 'Start Camera'}
        >
          <Camera className="mr-2 h-4 w-4" />
          {isScanning ? 'Pause Camera' : 'Start Camera'}
        </ButtonUpload>

        <ButtonUpload 
          className=''
          onClick={() => document.getElementById('file-upload')?.click()}
          title="Upload Image"
        >
          <Upload className="mr-2 h-4 w-4" />
          Upload Image
        </ButtonUpload>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default App;