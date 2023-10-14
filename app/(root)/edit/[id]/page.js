import UploadPost from '@/components/Forms/Create'
import UpdatePost from '@/components/Forms/Edit';
import { fetchPostById } from '@/lib/actions/post.actions';
import { fetchUser } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs';
import { redirect } from "next/navigation";
import React from 'react'

async function page({params}) {


    const user = await currentUser();

    if(!user) return null;

    const post = await fetchPostById(params?.id)
    const userInfo = await fetchUser(user.id) ;

    const simpleData = {
        _id: userInfo._id.toString(), // convert ObjectId to string
      };

    if (!userInfo?.onboarded) redirect('/onboarding')

  return (
    <div>
        Edit blogs page
        <UpdatePost 
          userId={simpleData._id} 
          newTitle={post?.title} 
          newImage={post?.image}
          newCategory={post?.category}
          newDescription={post?.description} 
          newTags={post?.tags} 
          postId={post?.id} 
        />
    </div>
  )
}

export default page