import { prisma_database_user } from "./prisma_data_fetch"


export const Amount_interface = async ({userId}:{userId:string})=>{
    const user = await prisma_database_user({userId})
    if(!user){
        return 'Error while fetching'
    }
    const username = user?.username;
    const firstLetter = username.charAt(0).toUpperCase()
    return {username,firstLetter}
}