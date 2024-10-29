import { generateCardNumber } from "./cvs_exp";

export function generateCreditCardNumber() {
  let cardNumber = '4' + Math.floor(1e15 + Math.random() * 9e15).toString().slice(0, 15); // Random 15 digits after the '2'
 // Random 15 digits
  const creditCard = generateCardNumber(cardNumber,80) 
  return creditCard
}