"use client"

import { useActionState } from "react"

import { handleGoogleLogin } from "@/actions/google-login"
import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc";

 
export default function GoogleLogin() {
    const [errorMsg, dispatchGoogleLogin] = useActionState(handleGoogleLogin, undefined)
  return (
    <form action={dispatchGoogleLogin}>
      <Button variant={'outline'} type="submit"  className="w-full my-3">
      <FcGoogle />
        Continue with Google</Button>
      <p>{errorMsg || null}</p>
    </form>
  )
} 