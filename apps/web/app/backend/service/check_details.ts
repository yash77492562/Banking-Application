"use server"
import {prisma, tokenVaultPrisma} from "@repo/prisma_database/client";
import { generateSecureTokenWithSalt } from "./generating_token";
import { isCardExpired } from "./expiryCheck";
import { decrypt } from "@repo/encrypt/client";
import { getUserId } from "../../userId/userId";


interface Upi {
    pa:string,
    pn?:string,
    cu?:string
}
interface CardNumber{
    cardNumber:string,
    cvv:string,
    vaildThur:string
}


export async function check_upi_details({upi_detail}:{upi_detail:Upi}){
    const {pa}  = upi_detail
    const token = generateSecureTokenWithSalt(pa)
    const fromUserId = await getUserId()
    if(fromUserId === undefined){
        return 'User not found '
    }
    const user = await tokenVaultPrisma.upiTokenVault.findFirst({
        where:{
            token
        },
        select:{
            userId :true
        }
    })
    if(!user){
        console.log('Invaild upi id || may be that bank not link to our application')
        return {
            message:'Invaild upi id '
        } 
    }
    const user_id = user.userId
    const mode = 'upi'
    return {user_id,mode}
}

// Assuming acc_detail is of type string
export async function check_acc_details({ account }: { account: string }) {
    if (account === undefined) {
        return {
            message: 'Invalid User account',
        };
    }
    const token = generateSecureTokenWithSalt(account)
    const user = await tokenVaultPrisma.accountTokenVault.findFirst({
        where: {
            token, // Now this is a string
        },
        select: {
            userId: true,
        },
    });
    if (!user) {
        console.log('no user found b')
        return {
            message: 'Invalid Account Number',
        };
    } 
    const user_id = user?.userId
    const mode = 'accountNo'
    return {user_id,mode} 
}


export async function check_dec_details({ debit_detail }: { debit_detail: CardNumber }) {
    console.log('check_dec_details funciton start' + debit_detail)
    if (debit_detail === undefined) {
        return {
            message: 'Please Enter Card Number',
        };
    }
    const {cardNumber,cvv,vaildThur} = debit_detail
    console.log('debit card details'+cardNumber + 'Cvv ' + cvv +'Exp' + vaildThur)
    const token = generateSecureTokenWithSalt(cardNumber)
    console.log('token value'+token)
    const user = await tokenVaultPrisma.debitTokenVault.findFirst({
        where: {
            token, // Now this is a string
        },
        select: {
            userId: true,
        },
    });
    if (!user) {
        return {
            message: 'Invalid Account Number',
        };
    }
    console.log(user.userId)
    const get_cvv = await prisma.debitCard.findFirst({
        where:{
            user_id:user?.userId
        },
        select:{
            cvv:true,
            valid_Thur:true
        }
    })
    if(!get_cvv){
        return{
            message:'Please Check Provided Info'
        }
    }
    const cvv_debit = get_cvv?.cvv
    console.log('ccv_details' + cvv_debit)
    const valid_Thur_debit = get_cvv?.valid_Thur
    console.log('valild_thur' + valid_Thur_debit)
    if(!(cvv_debit && valid_Thur_debit)){
        return {
            message:'Check cvv and exp date'
        }
    }
    const decrypt_cvv_debit = decrypt(cvv_debit)
    console.log('decrypt_cvv_debit' + decrypt_cvv_debit)
    const checkExp = isCardExpired(valid_Thur_debit)
    console.log('checkExp' + checkExp)
    if(!checkExp){
        if(cvv == decrypt_cvv_debit && vaildThur == valid_Thur_debit){
            console.log('EveryThing is good we check everything')     
            const user_id = user.userId
            const mode = 'debitCard'
            return {user_id,mode}
        }
    }
}



export async function check_cre_details({ credit_detail }: { credit_detail: CardNumber }) {
    if (credit_detail === undefined) {
        return {
            message: 'Please Enter CardNumber',
        };
    }
    const {cardNumber,cvv,vaildThur} = credit_detail
    const token = generateSecureTokenWithSalt(cardNumber)
    const user = await tokenVaultPrisma.creditTokenVault.findFirst({
        where: {
            token, // Now this is a string
        },
        select: {
            userId: true,
        },
    });
    if (!user) {
        return {
            message: 'Invalid Account Number',
        };
    }
    const get_cvv = await prisma.creditCard.findFirst({
        where:{
            user_id:user?.userId
        },
        select:{
            cvv:true,
            valid_Thur:true
        }
    })
    if(!get_cvv){
        return{
            message:'Please Check Provided Info'
        }
    }
    const cvv_debit = get_cvv?.cvv
    const valid_Thur_debit = get_cvv?.valid_Thur
    if(!(cvv_debit && valid_Thur_debit)){
        return {
            message:'Check cvv and exp date'
        }
    }
    const decrypt_cvv_debit = decrypt(cvv_debit)
    const checkExp = isCardExpired(valid_Thur_debit)
    if(!checkExp){
        if(cvv == decrypt_cvv_debit && vaildThur == valid_Thur_debit){
            const user_id = user.userId
            const mode = 'creditCard'
            return {user_id,mode}
        }
    }
}


export async function check_email_details({ email }: { email: string }) {
    if (email === undefined) {
        return {
            message: 'Please Enter CardNumber',
        };
    }
    const token = generateSecureTokenWithSalt(email)
    const user = await tokenVaultPrisma.emailTokenVault.findFirst({
        where: {
            token, // Now this is a string
        },
        select: {
            userId: true
        },
    });
    if (!user) {
        return false
    }
    return user.userId
}
export async function check_phone_details({ phone }: { phone: string }) {
    if (phone === undefined) {
        return {
            message: 'Please Enter CardNumber',
        };
    }
    const token = generateSecureTokenWithSalt(phone)
    const user = await tokenVaultPrisma.phoneTokenVault.findFirst({
        where: {
            token, // Now this is a string
        },
        select: {
            userId: true,
        },
    });
    if (!user) {
        return {
            message: 'Invalid Phone Number',
        };
    }
    const user_id = user.userId
    const mode = 'upi'
    return {user_id,mode}
}