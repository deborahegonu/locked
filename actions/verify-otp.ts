"use server"

import * as z from "zod"
import { prisma } from "@/prisma"
import { OTPSchema } from "@/schemas"


export const verifyOTP = async (data: z.infer<typeof OTPSchema>) => {
    try{
        const validatedData = OTPSchema.parse(data);

        if (!validatedData) {
            return { error: 'Invalid input data'}
        }

        const { pin } = validatedData;


        const correctOTP = await prisma.user.findFirst({
            where: {
                otp: pin
            }
        })

        if(!correctOTP) {
            return { error: 'Incorrect OTP'}
        }

        const verifyEmail = await prisma.user.update({
            where: {
                email: correctOTP.email,
            },
            data: {
                emailVerified: new Date()
            },
        })
        
        console.log(verifyEmail)
        
        return { success: 'Email verified!', data: correctOTP}

    } catch (error) {
        console.error('Error', error)
        return { error: 'An error occurred. Try again later!'}
    }
}