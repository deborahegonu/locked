"use server"

import { signIn } from "@/auth"
import { AuthError } from "next-auth"

export const handleGoogleLogin = async () => {
    try {
        await signIn("google", { callbackUrl: 'http://localhost:3000/dashboard'})
    } catch(error){
        console.log('GOOGLE SIGN IN ERROR:', error)
        if(error instanceof AuthError) {
            return 'Google signin failed'
        }
        throw error
    }
}