import { auth } from "@/auth"
import LogOut from "@/blocks/auth/Logout";
import { EmailOTP } from "@/templates/mail/EmailOTP";

const DashboardPage = async () => {
    const session = await auth()
    console.log(session)
  return (
    <div>
        <div className="p-5 border-b flex items-center justify-between">
            <div>
                <h1 className="text-xl font-semibold mb-1">Dashboard</h1>
                <p>Welcome {session?.user?.name}</p>
            </div>
            <LogOut />
        </div>
        <EmailOTP pin="000000" />
    </div>
  )
}

export default DashboardPage