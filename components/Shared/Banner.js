import React from 'react'

function Banner() {
  return (
    <div className='max-w-6xl mx-auto bg-black pt-10 md:pt-20'>
        <div className="py-4 sm:py-8 lg:py-2">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <p className="mb-2 font-semibold text-gray-100 md:mb-3 lg:text-lg">All Blogs</p>

                <h2 className="mb-4 text-2xl font-bold text-white md:mb-6 lg:text-5xl">Discover Nice Articles Here</h2>

                <p className="max-w-screen-md text-gray-400 text-sm md:text-lg">
                    All the Articles And Contents Of The Site Have Been <span className='text-gray-100'>Updated Today </span>
                    And You Can Find Your <span className='text-gray-100'>Articles And Contents</span> Quickly And Without Any problems.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Banner