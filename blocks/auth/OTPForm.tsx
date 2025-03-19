"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
  } from "@/components/ui/input-otp"
import { REGEXP_ONLY_DIGITS } from "input-otp"
import { OTPSchema } from "@/schemas"
import { toast } from "sonner"
import {LuLoaderCircle} from "react-icons/lu"
import { useState } from "react"
import { verifyOTP } from "@/actions/verify-otp"
import { useRouter } from "next/navigation"

export default function OTPForm() {
    const [loading, setLoading] = useState<boolean>(false)
    const router = useRouter()
  const form = useForm<z.infer<typeof OTPSchema>>({
    resolver: zodResolver(OTPSchema),
    defaultValues: {
      pin: '',
    },
  })
 
  function onSubmit(data: z.infer<typeof OTPSchema>) {

    setLoading(true)
    verifyOTP(data).then((response) => {
        console.log(response)
        if(response.error) {

          toast.error(response.error)
          setLoading(false)
        } 
  
        if(response.success) {
          toast.success(response.success)
          setLoading(false)
          router.push('/auth/verification-success')
        }
        setLoading(false)
      })
 
  }

  return (
    <>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 flex flex-col items-center text-center">
        <FormField
          control={form.control}
          name="pin"
          render={({ field }) => (
            <FormItem>
              
              <FormControl>
                <InputOTP maxLength={6} {...field} pattern={REGEXP_ONLY_DIGITS}>
                    <InputOTPGroup className="mx-auto">
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                    </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormDescription>Please enter the OTP sent to your email/phone.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={loading} type="submit" className="flex items-center space-x-3">
            {loading ? <><LuLoaderCircle /> <span>Processing</span></> : 'Verify'}
        </Button>
      </form>
    </Form>
    </>
    
  )
}
