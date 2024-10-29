import { prisma } from "@repo/prisma_database/client";
import { generateSecureTokenWithSalt, storeEncryptedCreditNumber } from "../backend/service/generating_token";
import { encrypt } from "@repo/encrypt/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import { generateCsvCode, generateExpiryDate } from "../backend/service/cvs_exp";


export async function creditCardDetails(cardNumber:string) {
    const session = await getServerSession(authOptions)
    const user_id = session?.user?.id
     const token = generateSecureTokenWithSalt(cardNumber)
    const encrypt_card_number = encrypt(cardNumber)
    await prisma.$transaction(async (tx)=>{
        const cvv = generateCsvCode()
        const exp = generateExpiryDate()
        await storeEncryptedCreditNumber(encrypt_card_number,user_id,token)
        await tx.creditCard.create({
            data:{
                cvv,
                valid_Thur:exp,
                user_id:user_id
            }
        })
    })
    
}