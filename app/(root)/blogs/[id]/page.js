import HomeBlogCard from '@/components/Cards/HomeBlogCard'
import { fetchPostById, fetchPosts } from '@/lib/actions/post.actions';
import { currentUser } from '@clerk/nextjs';
import React from 'react'
import moment from 'moment';
import Image from 'next/image';

async function page({params}) {

    // const user = await currentUser();

    // if(!user) return null;
    // if (!params?.id) return null;

    // const userInfo = await fetchUser(user?.id);
    // if(!userInfo?.onboarded) redirect('/onboarding')
    const result= await fetchPosts(1, 3);
    const post = await fetchPostById(params?.id)
    // console.log(post)

    return (
        <main className='bg-black'>
            <div >
                <article>
                    <section className="mx-auto max-w-5xl px-1 pt-24 pb-16 text-center">
                    <span className="bg-[#FFF44F] mt-4 rounded-full px-3 py-1 mb-1 text-sm font-semibold text-black">{post?.category}</span>
                        <p className="text-gray-200 pt-1">Published {moment(post?.createdAt).format('LL')} </p>
                        <h1 className="mt-2 text-3xl font-bold text-white sm:text-5xl pb-2">{post?.title}</h1>
                        {/* <p className="mt-6 text-lg text-gray-200">{post?.category}</p> */}
                        
                        <div className="mt-6 flex flex-wrap justify-center gap-2 md:gap-4" aria-label="Tags">
                           
                           {post?.tags.map((tag)=> (
                                <div key={tag} className="bg-black py-1 px-2.5 md:py-2.5 md:px-4 text-white border border-white text-sm md:text-base font-medium md:font-semibold rounded-full hover:shadow-lg transition duration-3000 cursor-pointer">
                                    <span> # {tag} </span>
                                </div>
                           ))}
                           
                           {/* <div className="bg-black py-1.5 px-2.5 md:py-3 md:px-5 text-white border border-white text-sm md:text-base font-medium md:font-semibold rounded-full hover:shadow-lg transition duration-3000 cursor-pointer">
                                <span> # Category</span>
                            </div>
                           <div className="bg-black py-1.5 px-2.5 md:py-3 md:px-5 text-white border border-white text-sm md:text-base font-medium md:font-semibold rounded-full hover:shadow-lg transition duration-3000 cursor-pointer">
                                <span> # Category</span>
                            </div>
                           <div className="bg-black py-1.5 px-2.5 md:py-3 md:px-5 text-white border border-white text-sm md:text-base font-medium md:font-semibold rounded-full hover:shadow-lg transition duration-3000 cursor-pointer">
                                <span> # Category</span>
                            </div> */}
                            
                        </div>
                    </section>

                    <div className="mx-auto p-2 lg:max-w-3xl">
                        <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
                            <Image
                                className="object-cover w-full h-56 rounded-lg shadow-lg sm:h-64 md:h-80 lg:h-96"
                                src={post?.image}
                                alt="iman of post"
                                width={50}
                                height={50}
                            />
                            <div
                                aria-label="Read Post"
                                className="absolute bottom-10 inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
                            >
                                <div className="flex top-3 items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
                                    <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
                                </svg>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto mt-10 px-2 md:px-4 max-w-screen-lg space-y-12 py-10 font-serif text-lg tracking-wide text-gray-100">
                        {/* <strong className="text-2xl font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime impedit ex consequatur nostrum cupiditate at sequi? Ipsam commodi modi officia mollitia doloribus tenetur consectetur quae?</strong>
                        <p className='leading-8 tracking-wider'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto enim maxime sit laudantium! Dolore atque, maxime iusto ut quas distinctio reiciendis animi voluptatibus soluta molestias, mollitia officiis laboriosam illum earum.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus nisi deleniti iure aut, corporis necessitatibus dolorem, tenetur vel asperiores vitae eius sapiente dolorum aperiam. Consequatur sequi atque id vel natus enim tenetur unde placeat accusamus, numquam voluptatem, aut totam voluptas harum? Non iure asperiores modi culpa rerum nesciunt, sit cumque qui aliquam autem dolorem, vero dolores iusto debitis doloremque dolor? Itaque, deleniti a, qui ad totam dolores soluta, quo provident voluptatum ea laborum molestias id hic impedit? Soluta laudantium asperiores vitae aperiam, quod quia obcaecati, et tempore sunt sequi voluptas magnam nihil non! Quod sit deleniti repellat ut aliquam animi.
                        </p> */}
                        <p className='leading-8 tracking-wider'>
                            {post?.description}
                        </p>
                    </div>
                </article>
            </div >

            <div className="w-fit mx-auto my-10 flex space-x-2">
                <div className="h-0.5 w-2 bg-[#FFF44F]"></div>
                <div className="h-0.5 w-32 bg-[#FFF44F]"></div>
                <div className="h-0.5 w-2 bg-[#FFF44F]"></div>
            </div>

            {result.length === 0 ? 
                (
                    <p className="text-center md:text-lg text-base text-gray-300">No Related Posts Found</p>
                )
                :
                (
                    <section className="mx-auto max-w-screen-lg px-3 pt-14 pb-16">
                        <div className="mb-2 md:mb-4">
                            <h2 className="mb-8 text-xl font-semibold text-gray-200 md:mb-6 lg:text-2xl">Related Blog Post</h2>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-3 xl:gap-12">
                        {result?.posts?.map((post)=> (
                            <HomeBlogCard
                                key={post?._id}
                                id={post._id}
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
                    </section>
                )
            }
        </main>
    )
}

export default page