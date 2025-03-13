"use server"

import { signOut } from "@/auth"
import { AuthError } from "next-auth"

export const handleLogOut = async () => {
    try {
        await signOut()
    } catch(error){
        console.log('LOG OUT ERROR:', error)
        if(error instanceof AuthError) {
            return 'Failed to log out'
        }
        throw error
    }
}