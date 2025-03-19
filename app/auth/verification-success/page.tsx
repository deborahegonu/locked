import { MdOutlineMarkEmailRead } from "react-icons/md";
import { CardHeader, CardTitle } from "@/components/ui/card"
import { BsArrowRight } from "react-icons/bs";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function VerificationSuccess() {
    return(
        <>
            <CardHeader className="flex flex-col items-center">
                <MdOutlineMarkEmailRead size={44} className="text-green-600" />
                <CardTitle className="py-3">Email Verification Successful</CardTitle>
                <Button asChild>
                    <Link href={'/auth/login'}>Log In <BsArrowRight size={28} className="text-2xl" />
                    </Link>
                </Button>
            </CardHeader>
        </>
    )
}