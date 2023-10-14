import React from 'react'

function SampleCard() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
        <div>
        <a href="#" className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
          <img src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700" loading="lazy" alt="Photo by Austin Wade" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

          <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
            <span className="text-gray-500">Men</span>
            <span className="text-lg font-bold text-gray-800 lg:text-xl">Business Causual</span>
          </div>
        </a>
      </div>
    </div>
  )
}

export default SampleCard