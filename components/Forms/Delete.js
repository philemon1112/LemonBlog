
"use client"
import { deletePost } from '@/lib/actions/post.actions';
import { usePathname, useRouter } from "next/navigation";
import React from 'react'
import { Toaster, toast } from 'sonner';

function DeletePost({title,postId}) {

    const router = useRouter();
    const pathname = usePathname();

    const handleDelete = async () => {

        await deletePost({
            postId:postId
          });

        toast.success("Post deleted successfully")

        setTimeout(() => {
              router.back();
          }, 2000); // 

    // if (pathname === "/account/delete") {
    //     router.back();
    // } else {
    //     router.push("/");
    // }
}

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
    <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-black"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        <div
            className="inline-block align-bottom bg-gray-100 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
            <div className="sm:flex sm:items-start">
                <div
                    className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-red-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                        </svg>
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Do you really want to delete this post
                    </h3>
                    <div className="mt-2">
                        <p className="text-sm leading-5 text-gray-600">
                            {title}
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                    <button onClick={handleDelete} type="button"
                        className="inline-flex justify-center w-full rounded-full border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                        Delete
                    </button>
                </span>
                <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                    <button type="button"
                        className="inline-flex justify-center w-full rounded-full border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                        Cancel
                    </button>
                </span>
            </div>
        </div>
    </div>
    <Toaster position="top-right" richColors/>
</div>
  )
}

export default DeletePost