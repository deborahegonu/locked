"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RegisterFormSchema } from "@/schemas"
import GoogleLogin from "./GoogleLogin"
import { toast } from "sonner"
import { register } from "@/actions/register"
import {LuLoaderCircle} from "react-icons/lu"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function RegisterForm() {
    const [loading, setLoading] = useState<boolean>(false)
    const router = useRouter();
  const form = useForm<z.infer<typeof RegisterFormSchema>>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  })
 
  function onSubmit(data: z.infer<typeof RegisterFormSchema>) {
    
    setLoading(true)
    register(data).then((response) => {
        if(response.error) {

          toast.error(response.error)
          setLoading(false)
        } 
  
        if(response.success) {
          toast.success(response.success)
          setLoading(false)
          setTimeout(() => {
            router.push('/auth/verify')
          }, 500)
          
        }
        setLoading(false)
      })
 
  }

  return (
    <>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="youremail@domain.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Re-enter your password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={loading} type="submit" className="w-full flex items-center space-x-3">
            {loading ? <><LuLoaderCircle /> <span>Processing</span></> : 'Create Account'}
        </Button>
      </form>
    </Form>
    <GoogleLogin />
    </>
    
  )
}
