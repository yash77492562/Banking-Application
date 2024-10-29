import { prisma,tokenVaultPrisma } from "@repo/prisma_database/client";

interface UserDetails {
    username: string;
    password: string;
}

interface AccountDetails{
    ifsc:string
}
interface Upi{
    pa:string
}
export const prisma_database_user = async ({ userId }: { userId: string }): Promise<UserDetails | null> => {
    if (!userId) {
        return null;
    }
    try {
        const user_details = await prisma.user.findUnique({
            where: {
                id: userId
            },
            select: {
                username: true,
                password: true
            }
        });

        return user_details || null; // Return null if user_details is not found
    } catch (error) {
        console.error("Error fetching user details:", error);
        return null; // Return null in case of error
    }
};

export const prisma_database_account = async ({ userId }: { userId: string }): Promise<AccountDetails | null> => {
    if(!userId){
        return null
    }
    try{
        const account_details = await prisma.accountDetails.findFirst({
            where:{
                accountId:userId
            },
            select:{
                ifsc:true,
            }
        })
        return account_details || null
    }catch(error){
        console.error('Error fetching user details:',error)
        return null
    }
}

export const tokenVault_database_upi = async ({ userId }: { userId: string }): Promise<Upi | null> => {
    if(!userId){
        return null
    }
    try{
        const upi = await tokenVaultPrisma.upiTokenVault.findFirst({
            where:{
                userId
            },
            select:{
                pa:true,
            }
        })
        return upi || null
    }catch(error){
        console.error('Error fetching user details:',error)
        return null
    }
}
