import { getUserId } from '../userId/userId';
import { prisma } from '@repo/prisma_database/client';
import { loginPin as loginPinSchema } from '@repo/zod/client';
import bcrypt from 'bcrypt';


const InputValidation = async ({ pin }: { pin: number }) =>{
    const validatePaymentPin = loginPinSchema.safeParse(pin);
    return validatePaymentPin
}



export const verifyLoginPin = async ({ pin , store_pin }: { pin: number ,store_pin:string }) =>{
    const valid_Input = await InputValidation({pin})
    if(valid_Input?.success){
        const valid_pin = valid_Input.data;
        const isPinValid = await bcrypt.compare(valid_pin.toString(),store_pin);
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



export const setLoginPin = async ({ pin }: { pin: number }) =>{
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
        await prisma.loginPin.create({
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
export const CheckLoginPin = async() =>{
    const userId = await getUserId()
    if (userId === undefined) {
        return {
            message: 'User not found or Login again',
        };
    }
    const existingLoginPin = await prisma.loginPin.findFirst({
        where:{
            userId
        },
        select:{
            pin:true
        }
    })
    return existingLoginPin?.pin
}