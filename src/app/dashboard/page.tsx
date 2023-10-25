import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { cn } from "@/lib/utils";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const page = ()=>{
    const {getUser} = getKindeServerSession()
    const user = getUser()

    if(!user || !user.id) redirect('/auth-callback?origin=dashboard')

    return (
        <MaxWidthWrapper className={cn('bg-white')}>
            <div> {user.email} </div>
        </MaxWidthWrapper>
    )
}
export default page;