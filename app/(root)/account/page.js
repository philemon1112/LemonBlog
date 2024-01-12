import { fetchPostById, fetchPosts } from '@/lib/actions/post.actions';
import { currentUser } from '@clerk/nextjs';
import React from 'react'
import { fetchUser, fetchUserPosts } from '@/lib/actions/user.actions';
import UserBlogCard from '@/components/Cards/UserBlogCard';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import Link from 'next/link';

async function page() {

    const user = await currentUser();

    if(!user) redirect('/sign-in');

    const userInfo = await fetchUser(user?.id);
    const userPost = await fetchUserPosts(user?.id)
    if(!userInfo?.onboarded) redirect('/onboarding')

    return (
        <div className="mx-auto max-w-screen-lg md:px-4 px-2">
            <section className="py-4 sm:py-10 lg:pt-14">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="text-center">
                        <Image
                            src={userInfo?.image}
                            alt="profile "
                            width={112}
                            height={112}
                           className="w-32 mx-auto group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
                        />
                        <p className="mt-6 text-lg font-semibold text-white">{user?.firstName} {user?.lastName} <span className="font-normal text-gray-500">{userInfo?.username}</span></p>
                    </div>
                </div>
            </section>

            <div className="mt-6 mb-8 flex flex-col items-start justify-center space-y-4 py-8 px-4 sm:flex-row sm:space-y-0 md:justify-between lg:px-0">
                <div className="max-w-lg">
                    <h1 className="text-2xl font-bold text-gray-100">Welcome to your Dashboard</h1>
                    <p className="mt-2 text-gray-200">{userInfo?.bio}</p>
                </div>
                <div className="">
                    <button className="flex whitespace-nowrap rounded-full bg-[#FFF44F] px-6 py-3 font-bold text-black transition hover:translate-y-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 inline h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Chat with us
                    </button>
                    <p className="mt-4 flex items-center whitespace-nowrap text-gray-200 sm:justify-end">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 inline h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        +233 557 666 957
                    </p>
                </div>
            </div>

            <div className="mb-2 mt-20 md:mb-10">
                <h2 className="mb-8 text-xl font-semibold text-gray-200 md:mb-6 lg:text-2xl">{userPost.post?.length === 0 ? "You have no Post":"Your Posts" }</h2>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-3 xl:gap-12 mb-16">
                {userPost?.post?.length === 0 ? 
                    (
                        <div className='text-center'>
                            <Link href="/new">
                                <button type="button" className="px-8 py-3 font-semibold inline-flex items-center gap-2 rounded-full bg-gray-100 text-black">
                                    <span>
                                        Create your first post
                                    </span> 
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </button>
                            </Link>
                        </div>
                    )
                    :
                    (
                        <>
                        {userPost.posts.map((post)=> (
                            <UserBlogCard
                                key={post?._id}
                                id={post._id}
                                title={post.title} 
                                // author={{name:post?.author?.name, image:post?.author?.image, id:post?.author?.id}} 
                                author={userInfo}
                                category={post.category}  
                                image={post?.image} 
                                tags={post.tags} 
                                description={post.description} 
                                slug={post.slug} 
                                createdAt={post.createdAt} 
                            />
                        ))}
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default page