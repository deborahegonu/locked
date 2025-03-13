import { Card } from "@/components/ui/card"

interface AuthLayoutProps {
    children: React.ReactNode
}

export default function AuthLayout({ children } : AuthLayoutProps) {
    return(
        <div className="min-h-[85vh] flex items-center justify-center">
            <Card className="min-w-sm border-0 shadow-none rounded-none">
                {children}
            </Card>
            
        </div>
    )
}