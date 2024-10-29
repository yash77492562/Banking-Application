import { prisma } from "@repo/prisma_database/client";
import { getUserId } from "./userId";
export const user_details =async ()=>{
    const userId = await getUserId()
    const user_details = await prisma.user.findUnique({
        where:{
            id:userId
        },
        select:{
            username:true,
            password:true
        }
    })
    return user_details
}