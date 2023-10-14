import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function HomeBlogCard({id,author,title,tags,image,category,description}) {

    return (
        <div>
            <div className="group relative mb-2 block h-68 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
                {/* <img src={image} loading="lazy" alt="Photo by Rachit Tank" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" /> */}

                <Image
                    src={image}
                    width={68}
                    height={68}
                    alt={"post image"}
                    className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <span className="absolute right-0 top-0 rounded-bl-lg bg-[#FFF44F] px-3 py-1.5 text-sm uppercase tracking-wider text-black">read</span>
                <div className="absolute bottom-2 left-4 ">
                    <Link 
                        href={`/account/${author?.id}`} 
                        className="flex  bg-white w-fit items-center p-1 border rounded-full">
                        <Image
                            alt="profile"
                            src={author?.image}
                            width={36}
                            height={36}
                            className="w-9 mx-auto h-9 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
                        />
                        {/* <img src={author?.image} alt="avatar" className="object-cover w-10 h-10 rounded-full bg-black" /> */}
                        <span className="hover:underline font-medium text-black mx-1.5">{author?.username}</span>
                    </Link>
                </div>
            </div>

            <div>
                <Link href={`/blogs/${id}`}>
                    <h3 className="text-xl line-clamp-2 font-medium text-gray-100">
                        {title}
                    </h3>
                </Link>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-200">
                    {description}
                </p>
            </div>
        </div>

    )
}

export default HomeBlogCard