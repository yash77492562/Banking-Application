import { tokenVaultPrisma } from "@repo/prisma_database/client"
import { generateSecureTokenWithSalt } from "./generating_token"

export const getUserIdWithToken = async (value: string, type: 'account' | 'debit' | 'credit')=>{
    const token = generateSecureTokenWithSalt(value)
    let userId;
    try{
        if (type === 'account') {
        userId = await tokenVaultPrisma.accountTokenVault.findUnique({
            where: { token },
            select: { userId: true },
        });
        } else if (type === 'debit') {
            userId = await tokenVaultPrisma.debitTokenVault.findUnique({
                where: { token },
                select: { userId: true },
            });
        } else if (type === 'credit') {
            userId = await tokenVaultPrisma.creditTokenVault.findUnique({
                where: { token },
                select: { userId: true },
            });
        }else if(type === 'upi'){
            userId = await tokenVaultPrisma.upiTokenVault.findUnique({
                where:{token},
                select:{userId:true}
            })
        }
        if(!userId){
            return 'NO user found!'
        }
        return userId.userId
    }catch(error){
        return error
    }
}