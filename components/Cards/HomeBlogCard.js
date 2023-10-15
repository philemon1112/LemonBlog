import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function HomeBlogCard({id,author,title,tags,image,category,description}) {

    function calculateReadingTime(text) {
        // Assuming an average reading speed of 225 words per minute
        const wordsPerMinute = 225;
      
        // Count the number of words in the text
        const wordCount = text.split(/\s+/).length;
      
        // Calculate the reading time in minutes
        const readingTime = Math.ceil(wordCount / wordsPerMinute);
      
        return readingTime;
      }

    const readingTime = calculateReadingTime(description);

    return (
        <div>
            <Link href={`/blogs/${id}`}>
                <div className="group relative cursor-pointer mb-2 block h-68 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
                    {/* <img src={image} loading="lazy" alt="Photo by Rachit Tank" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" /> */}

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

                    <span className="absolute right-0 top-0 rounded-bl-lg bg-[#FFF44F] px-3 py-1.5 text-sm tracking-wider text-black">{readingTime}m Read</span>
                    <div className="absolute bottom-2 left-4 ">
                        <Link 
                            href={`/account/${author?.id}`} 
                            className="flex  bg-white w-fit items-center p-1 border rounded-full">
                            <Image
                                alt="profile"
                                src={author?.image}
                                width={36}
                                height={36}
                                className="w-8 mx-auto h-8 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
                            />
                            {/* <img src={author?.image} alt="avatar" className="object-cover w-10 h-10 rounded-full bg-black" /> */}
                            <span className="hover:underline font-medium text-black mx-1.5">{author?.username}</span>
                        </Link>
                    </div>
                </div>
            </Link>

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