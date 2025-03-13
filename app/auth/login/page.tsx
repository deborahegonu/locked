import { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import RegisterForm from "@/blocks/auth/RegisterForm"
import Link from "next/link"

const LoginPage = () => {
  return (
    <>
        <CardHeader>
            <CardTitle>
                <h1 className="text-3xl font-semibold">Login</h1>
            </CardTitle>
            <CardDescription>Log in to view your dashboard.</CardDescription>
        </CardHeader>
        <CardContent>
            <RegisterForm />
        </CardContent>
        <CardFooter className="flex flex-col items-start text-xs tracking-wide">
            <p>Don&apos;t have an account? <Link href={'/auth/register'}className="underline">Create Account</Link> </p>
        </CardFooter>
    </>
  )
}

export default LoginPage