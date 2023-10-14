import React from 'react'
import MarqueeLogos from '../Hero/Marquee'

function TrendingSection() {
  return (
    <div className='bg-black py-4'>
        <div className="mx-auto py-4 max-w-6xl px-4 md:px-8 mb-4">
            <h2 className="text-xl font-semibold text-gray-200 flex gap-x-2 items-center  lg:text-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M15.22 6.268a.75.75 0 01.968-.432l5.942 2.28a.75.75 0 01.431.97l-2.28 5.941a.75.75 0 11-1.4-.537l1.63-4.251-1.086.483a11.2 11.2 0 00-5.45 5.174.75.75 0 01-1.199.19L9 12.31l-6.22 6.22a.75.75 0 11-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l3.606 3.605a12.694 12.694 0 015.68-4.973l1.086-.484-4.251-1.631a.75.75 0 01-.432-.97z" clipRule="evenodd" />
            </svg>
                Trending Topics 
            </h2>
        </div>
        <MarqueeLogos />
    </div>
  )
}

export default TrendingSection