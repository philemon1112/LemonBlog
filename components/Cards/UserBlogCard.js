"use client"
import React,{useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'

function UserBlogCard({id,author,title,tags,image,category,description}) {

    return (
        <div>
            <Link href={`/blogs/${id}`}>
                <div className="group relative mb-2 block h-68 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
                    {!image ? 
                        (
                            <Image
                                src={`/Assets/Img/preview.jpg`}
                                width={68}
                                height={68}
                                loading='lazy'
                                alt={"post image"}
                                className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                            />
                    
                        )
                        :
                        (
                            <Image
                                src={image}
                                width={68}
                                height={68}
                                loading='lazy'
                                alt={"post image"}
                                className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                            />
                        )
                    }

                    <span className="absolute right-0 top-0 rounded-bl-lg bg-[#FFF44F] px-3 py-1.5 text-sm uppercase tracking-wider text-black">read</span>
                </div>
            </Link>
            
            <div>
                <Link href={`/blogs/${id}`}>
                    <h3 className="text-xl font-medium text-gray-100">
                        {title}
                    </h3>
                </Link>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-200">
                    {description}
                </p>

            <div className="flex justify-between items-center my-4 gap-x-1.5 w-full">
                <Link href={`/edit/${id}`}>
                    <button type="button" className="text-white bg-blue-700 cursor-pointer hover:bg-blue-800 focus:ring-4 rounded-full focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 mr-2">
                            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                        </svg>
                        Edit Post
                    </button>
                </Link>

                <Link href={`/delete/${id}`}>
                    <button type="button" className="text-white bg-red-700 cursor-pointer hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300  rounded-full font-medium  text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  className="w-3.5 h-3.5 mr-2">
                            <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                        </svg>

                    Delete Post
                    </button>
                </Link>
                </div>
            </div>
        </div>

    )
}

export default UserBlogCard