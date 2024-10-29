import { generateCardNumber } from "./cvs_exp";

export function generateDebitCardNumber() {
  let cardNumber = '2' + Math.floor(1e15 + Math.random() * 9e15).toString().slice(0, 15); 
  const debitCard = generateCardNumber(cardNumber,80) 
  return debitCard
}
 