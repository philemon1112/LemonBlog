// import AccountProfile from "@/components/forms/AccountProfile"
// import { fetchUser } from "@/lib/actions/user.actions";
import AccountProfile from "@/components/Forms/AccountProfile";
import { fetchUser } from "@/lib/actions/user.actions";
import { UserButton, UserProfile, currentUser } from "@clerk/nextjs"
import { redirect } from "next/navigation";


async function Page(){

    const user = await currentUser();
    if(!user) return null

    const userInfo = await fetchUser(user.id);
    if(userInfo?.onboarded) redirect('/')

    const userData = {
        id: user?.id, 
        objectId: userInfo?._id,
        username: userInfo ? userInfo?.username : user?.username,
        name: userInfo ? userInfo?.name : user?.firstName || "",
        bio: userInfo ? userInfo?.bio : "" ,
        image: userInfo ? userInfo?.image : user?.imageUrl,
    }

    return (
        <main className="mx-auto flex max-w-6xl flex-col justify-start px-4 py-10 ">
            <h1 className=" text-gray-100 font-bold md:text-4xl text-xl">Onboarding</h1>

            <p className="mt-3 text-gray-200">
                Complete your profile to use Lemon Blog
            </p>

            <section className="mt-9 bg-[#121417] p-4 md:p-8">
                <AccountProfile 
                    user={userData} btnTitle={"Continue"}
                 />
            </section>
        </main>
    )
}

export default Page