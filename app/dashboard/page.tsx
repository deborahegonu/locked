import { auth } from "@/auth"
import LogOut from "@/blocks/auth/Logout";

const DashboardPage = async () => {
    const session = await auth()
    console.log(session);
  return (
    <div>
        <div className="p-5 border-b flex items-center justify-between">
            <div>
                <h1 className="text-2xl font-semibold mb-2">Dashboard</h1>
                <p>Welcome {session?.user?.name}</p>
            </div>
            <LogOut />
        </div>
    </div>
  )
}

export default DashboardPage