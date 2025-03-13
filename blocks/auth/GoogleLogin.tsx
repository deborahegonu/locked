"use client"

import { useActionState } from "react"

import { handleGoogleLogin } from "@/actions/google-login"
import { Button } from "@/components/ui/button"
 
export default function GoogleLogin() {
    const [errorMsg, dispatchGoogleLogin] = useActionState(handleGoogleLogin, undefined)
  return (
    <form action={dispatchGoogleLogin}>
      <Button variant={'outline'} type="submit">Signin with Google</Button>
      <p>{errorMsg || null}</p>
    </form>
  )
} 