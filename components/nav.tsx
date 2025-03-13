import Link from "next/link"
import { Button } from "./ui/button"

export const Nav = () => {
    return(
        <nav className="flex items-center justify-between py-2 px-5 border-b">
            <Link href={'/'}>
                <span>locked</span>
            </Link>
            <div className="space-x-4">
                <Button variant={'ghost'} asChild>
                    <Link href={'/auth/login'}>Log In</Link>
                </Button>
                <Button variant={'ghost'} asChild>
                    <Link href={'/auth/register'}>Register</Link>
                </Button>
                <Button variant={'ghost'} asChild>
                    <Link href={'/dashboard'}>Dashboard</Link>
                </Button>
            </div>
        </nav>
    )
}