"use server"

import * as z from "zod"
import { prisma } from "@/prisma"
import bcrypt from "bcryptjs"
import { RegisterAPISchema } from "@/schemas"
import { sendOTP } from "./send-mail"
import crypto from "crypto"

export const updateEmail = async (data: z.infer<typeof RegisterAPISchema>) => {
    try{
        const validatedData = RegisterAPISchema.parse(data);

        if (!validatedData) {
            return { error: 'Invalid input data'}
        }

        const { email, password } = validatedData;

        const hashedPassword = await bcrypt.hash(password, 12);

        const userExists = await prisma.user.findFirst({
            where: {
                email: email
            }
        })

        if(userExists) {
            return { error: 'User already exists.'}
        }

        const lowerCaseEmail = email.toLowerCase();

        // Generate a 6-digit OTP
        const otp = crypto.randomInt(100000, 999999).toString();

        const newUser = await prisma.user.create({
            data: {
                email: lowerCaseEmail,
                password: hashedPassword,
                otp: otp,
            }
        })

        

        const otpSent = await sendOTP(lowerCaseEmail, otp);
        console.log(otpSent)

        console.log(newUser)
        return { success: 'User created successfully!'}

    } catch (error) {
        console.error('Error', error)
        return { error: 'An error occurred. Try again later!'}
    }
}