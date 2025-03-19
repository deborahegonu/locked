import { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import RegisterForm from "@/blocks/auth/RegisterForm"
import Link from "next/link"


const RegisterPage = () => {
    
  return (
    <>
        <CardHeader className="text-center">
            <CardTitle>
                <h1 className="text-3xl font-semibold">Register</h1>
            </CardTitle>
            <CardDescription>Create an account to get started</CardDescription>
        </CardHeader>
        <CardContent>
            <RegisterForm />
        </CardContent>
        <CardFooter className="flex flex-col items-center text-center text-xs tracking-wide">
            <p>By creating an account, you are agreeing to our <Link href={'#'} className="underline">Terms and Conditions</Link>.</p>
            <p>Already have an account? <Link href={'/auth/login'}className="underline">Login</Link> </p>
        </CardFooter>
    </>
  )
}

export default RegisterPage