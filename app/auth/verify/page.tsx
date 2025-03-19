import { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import OTPForm from "@/blocks/auth/OTPForm"



const VerifyEmailPage = () => {
  return (
    <>
        <CardHeader className="text-center">
            <CardTitle>
                <h1 className="text-3xl font-semibold">Verify Email</h1>
            </CardTitle>
            <CardDescription>We sent a one-time password your email address. </CardDescription>
        </CardHeader>
        <CardContent>
          <OTPForm />
        </CardContent>
        <CardFooter className="text-sm text-center">
          <i>Please check your spam box if you do not see it in your inbox.</i>
        </CardFooter>
    </>
  )
}

export default VerifyEmailPage