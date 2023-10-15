'use client' // Error components must be Client Components

import { useEffect } from 'react'

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div>
            <div className="bg-black px-2 text-center">
                <div className="h-screen flex flex-col justify-center items-center">
                    <h1 className="text-8xl font-extrabold text-red-500">500</h1>
                    <p className="text-4xl font-medium text-gray-100">Oops, Looks like something is broken</p>
                    <p className="text-xl text-gray-100 mt-4">We apologize for the inconvenience, please check your internet, or reload page to try again.</p>
                </div>

                <button
                    className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-[#FFF44F] rounded-full sm:mt-16 hover:brightness-75 focus:brightness-75"
                    onClick={
                        // Attempt to recover by trying to re-render the segment
                        () => reset()
                    }
                >
                    Try again
                </button>
            </div>
        </div>
    )
}