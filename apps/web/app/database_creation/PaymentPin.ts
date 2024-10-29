import { getUserId } from '../userId/userId';
import { prisma } from '@repo/prisma_database/client';
import { loginPin as loginPinSchema } from '@repo/zod/client';
import bcrypt from 'bcrypt';

const InputValidation = async ({ pin }: { pin: number }) =>{
    const validatePaymentPin = loginPinSchema.safeParse(pin);
    return validatePaymentPin
}

export const verifyPaymentPin = async ({ pin , store_pin }: { pin: number ,store_pin:string }) =>{
    console.log(store_pin , 'store_pin')
    const valid_Input = await InputValidation({pin})
    console.log(valid_Input , 'valid_Input')
    if(valid_Input?.success){
        const valid_pin = valid_Input.data;
        const isPinValid = await bcrypt.compare(valid_pin.toString(),store_pin);
        console.log(isPinValid,'isPinValid')
        if (isPinValid) {
            return {
                message: 'Pin is valid',
            };
        } else {
            return {
                message: 'Invalid Pin, please try again',
            };
        }
    }else{
        return {
            message: 'Please enter a 6-digit number only',
        };
    }
}
export const setPaymentPin = async ({ pin }: { pin: number }) =>{
    if (!process.env.SECRET_KEY_NUMBER) {
      console.error("SECRET_KEY_NUMBER is not set in the environment variables");
      return null;  // Or throw an error if needed
    }
    const secret_number = parseInt(process.env.SECRET_KEY_NUMBER, 10);
    console.log(secret_number)
    console.log(typeof(secret_number))
    if(secret_number === undefined){
      return null
    }
    const valid_Input = await InputValidation({pin})
    const userId = await getUserId();
    if (userId === undefined) {
        return {
            message: 'User not found or Login again',
        };
    }
    if(valid_Input?.success){
        const valid_pin = valid_Input.data;            //set User
        const bcrypt_pin = await bcrypt.hash(valid_pin.toString(),secret_number); 
        await prisma.paymentPin.create({
            data: {
                pin: bcrypt_pin,
                userId,
            },
        });
        return {
            message: 'Pin created successfully',
        };
    }else{
        return {
            message: 'Please enter a 6-digit number only',
        };
    }
}
export const CheckPaymentPin = async() =>{
    console.log('checkPaymentPin function call')
    const userId = await getUserId()
    console.log(userId , 'userId')
    const existingPaymentPin = await prisma.paymentPin.findFirst({
        where:{
            userId
        },
        select:{
            pin:true
        }
    })
    console.log(existingPaymentPin,'existingPaymentPin')
    return existingPaymentPin?.pin
}