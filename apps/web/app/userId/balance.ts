import { getUserId } from "./userId";
import { prisma } from "@repo/prisma_database/client";
export const balance = async ()=>{
    console.log('balance fucntion is called in order to get user data')
    try{
        const userId = await getUserId()
        if(!userId){
            return null
        }
        console.log('userId of balance function',userId)
        const balance = await prisma.balance.findFirst({
            where:{
                balanceId:userId
            },
            select:{
                amount:true
            }
        })
        console.log(balance)
        return balance?.amount
    }catch(error){
        console.log('error while fetching balance',error)
        return error
    }
}