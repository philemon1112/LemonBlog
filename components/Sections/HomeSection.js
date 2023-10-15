import React from 'react'
import HomeBlogCard from '../Cards/HomeBlogCard'
import { fetchPosts } from '@/lib/actions/post.actions';
import { currentUser } from '@clerk/nextjs';

async function HomeSection() {

  const result= await fetchPosts(1, 6);
  const user = await currentUser();

  // console.log(result)

  return (
    <div className="bg-black py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-6xl px-4 md:px-8">

        <div className="mb-2 md:mb-4">
          <h2 className="text-xl font-semibold text-gray-200 flex gap-x-2 items-center  lg:text-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
            </svg>
            Recent Blog Post
          </h2>

        </div>

        {result?.posts?.length === 0 ? 
          (
            <p className="text-center md:text-lg text-base text-gray-300">No Posts Found</p>
          )
          :
          (
            <div className="grid gap-6 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-10">
              {result?.posts?.map((post)=> (
                <HomeBlogCard
                  key={post?._id}
                  id={post._id}
                  currentUserId={user?.id} 
                  title={post.title} 
                  author={post.author } 
                  category={post.category} 
                  image={post?.image} 
                  tags={post.tags} 
                  description={post.description} 
                  slug={post.slug} 
                  createdAt={post.createdAt} 
                />
              ))}
            </div>
          )
        }
      </div>
    </div>
  )
}

export default HomeSection