import DeletePost from '@/components/Forms/Delete';
import { deletePost, fetchPostById } from '@/lib/actions/post.actions';
import { fetchUser } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs/server';
import { redirect, usePathname, useRouter } from "next/navigation";
import React from 'react'

async function page({params}) {
    const { id } = await params;

    const user = await currentUser();

    if(!user) return null;

    const post = await fetchPostById(id)


  return (
    <div>
        Delete blogs page
        <DeletePost 
          postId={post?.id}
          title={post?.title} 
        />
    </div>
  )
}

export default page