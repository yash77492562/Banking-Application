import { encrypt } from "@repo/encrypt/client";
import { generateSecureTokenWithSalt } from "./generating_token";
// Function to generate a 3-digit CSV code
export function generateCsvCode() {
    const csv =  Math.floor(100 + Math.random() * 900).toString(); // Generates a random number between 100 and 999
    return encrypt(csv)
}
  
// Function to generate an expiry date (MM/YY format)
export function generateExpiryDate() {
  const currentYear = new Date().getFullYear(); // Get the current year
  const expiryYear = currentYear + Math.floor(7 + Math.random() * 4) ; // Expiry year between 1 and 5 years from now
  const expiryMonth = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0'); // Month between 01 and 12
  return `${expiryMonth}/${expiryYear.toString().slice(2)}`; 
}

export function luhnAlgorithm(cardNumber:any) {
    let sum = 0;
    for (let i = 0; i < cardNumber.length; i++) {
      let digit = parseInt(cardNumber[i], 10);
  
      if (i % 2 === cardNumber.length % 2) { // Double every second digit from the right
        digit *= 2;
        if (digit > 9) digit -= 9; // If result > 9, subtract 9
      }
  
      sum += digit; // Sum all digits
    }
    return sum;
}

export function generateCardNumber(cardNumber:string,targetSum:number){
  let sum = luhnAlgorithm(cardNumber + '0'); // Calculate sum without check digit

  // Calculate check digit
  let checkDigit = (targetSum - (sum % 10)) % 10;

  // If check digit is negative, adjust it to be positive
  if (checkDigit < 0) {
    checkDigit += 10;
  }

  cardNumber += checkDigit.toString(); // Add check digit

  const card_token = generateSecureTokenWithSalt(cardNumber)
  const encrypt_number =encrypt(cardNumber)

  return {encrypt_number, card_token};
}
  