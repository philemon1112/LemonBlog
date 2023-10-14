import React from 'react'

function HeroCard() {
  return (
    <div className="lg:py-16 bg-black">
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-2">
            <div className="flex flex-col items-center justify-center mx-auto rounded-lg min-h-96 lg:px-10 max-w-7xl">
                <img className="relative object-cover inset-0  bg-blend-lighten hover:bg-blend-darken absolute object-center w-full h-72 md:h-[34rem] rounded-xl" alt="hero" 
                        src="/Assets/Img/preview.jpg" 
                />
            <div className="absolute h-64 max-w-[67rem] md:h-[34rem] rounded-lg bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64"
        >
            <div className="p-6 sm:p-6">
            <time className="block text-sm text-white/90">
                10th Oct 2022
            </time>

            <a href=" ">
                <h3 className="mt-0.5 md:mt-1.5 font-medium text-lg md:text-6xl text-white">
                How to position your furniture <br /> for positivity
                </h3>
            </a>

            <p className="mt-2 md:mt-3 hidden md:flex line-clamp-3 text-base/relaxed text-white/95">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                Molestias explicabo corporis voluptatem?
            </p>
            </div>

            
        </div>
            </div>
        </div>
       
    </div>
  )
}

export default HeroCard