"use client"

import { useActionState } from "react"


import { handleLogOut } from "@/actions/logout"
import { Button } from "@/components/ui/button"
 
export default function LogOut() {
    const [errorMsg, dispatchLogOut] = useActionState(handleLogOut, undefined)
  return (
    <form action={dispatchLogOut}>
      <Button variant={'destructive'} type="submit">Log out</Button>
      <p>{errorMsg || null}</p>
    </form>
  )
} 