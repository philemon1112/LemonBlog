import UploadPost from '@/components/Forms/Create'
import { fetchUser } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs';
import { redirect } from "next/navigation";
import React from 'react'

async function page() {

    // const data = {
    //     _id: {}, // assuming this is a MongoDB ObjectId or similar
    //     id: "...",
    //     userId: {}, // assuming this is a MongoDB ObjectId or similar
    //     onboarded: null,
    //     username: "..."

    //   };

      

    const user = await currentUser();

    if(!user) return null;

    const userInfo = await fetchUser(user.id) ;

    const simpleData = {
        _id: userInfo._id.toString(), // convert ObjectId to string
      };

    if (!userInfo?.onboarded) redirect('/onboarding')

  return (
    <div>
        Create blogs page
        <UploadPost userId={simpleData._id} />
    </div>
  )
}

export default page