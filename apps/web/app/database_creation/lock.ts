import { prisma  } from "@repo/prisma_database/client";
import { getUserId } from "../userId/userId";
export async function lockedAmount(amount:number,last_data:string,purpose:string){
    const user_id = await getUserId()
    if(!user_id){
        return {
            message:'User not found'
        }
    }
    await prisma.$transaction(async (tx)=>{
        await tx.$queryRaw`SELECT * FROM "Balance" WHERE "userId" = ${user_id} FOR UPDATE`;
        const available_amount = await tx.balance.findFirst({
            where:{
                balanceId:user_id
            },
            select:{
                amount:true,
                id:true
            }
        })
        const current_balance = available_amount?.amount
        const balance_id = available_amount?.id
        if(current_balance == undefined || balance_id == undefined){
            return {
                message:'Can not  fetch balance'
            }
        }
        if (current_balance === undefined || current_balance < amount) {
            return {
                message: 'Insufficient Balance'
            };
        }
        
        await tx.balance.update({
            where:{
                id: balance_id
            },
            data:{
                amount:{decrement:amount}
            }
        })
        await tx.lock.create({
            data:{
                lockedId:user_id,
                amount,
                purpose,
                status:"active"
            }
        })
    })
    
}