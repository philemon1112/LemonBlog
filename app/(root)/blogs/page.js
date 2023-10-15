import AllBlogs from '@/components/Shared/AllBlogs'
import Banner from '@/components/Shared/Banner'
import React from 'react'


function BlogsPage() {
  
  return (
    <div className='bg-black'>
        <Banner />
        <AllBlogs />
    </div>
  )
}

export default BlogsPage