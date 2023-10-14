import React from 'react'

function TrendingCards({text}) {
  return (
    <span className="text-lg text-gray-200 md:text-xl h-80 w-64 mx-4 px-4 cursor-pointer py-2.5 rounded-full border border-gray-100 hover:border-white hover:text-white">
        # {text}
    </span>
  )
}

export default TrendingCards