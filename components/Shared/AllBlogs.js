import React from 'react'
import HomeBlogCard from '../Cards/HomeBlogCard'
import { fetchPosts } from '@/lib/actions/post.actions';

async function AllBlogs() {
        // const [searchQuery, setSearchQuery] = useState('');
        const selectedCategory = 'All';
        const loadMore = false
        // const [filteredPosts, setFilteredPosts] = useState([]);
        
        // TODO: Implement page pagination , search and filtering based on category
        const result = await fetchPosts(1, 9)

        // useEffect(() => {
        //     async function loadPosts() {
        //     const result = await fetchPosts(1, 9);
        //     setFilteredPosts(result.posts);
        //     }
        //     loadPosts();
        // }, []);

        // const filterPosts = () => {
        //     const filtered = filteredPosts.filter((post) => {
        //         const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
        //         const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
        //         return matchesSearch && matchesCategory;
        //     });
        //     return filtered;
        // };


    return (
        <div className='bg-black'>
            <div className="mx-auto max-w-6xl px-4 md:px-8">
                <div className="flex items-center py-6 md:py-16 space-y-4 md:space-y-1 space-x-3 md:space-x-4 flex-wrap">
                    <div className="flex bg-gray-900 p-4 w-72 space-x-4 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="#FFF44F">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input 
                            className="bg-gray-900 text-gray-200 outline-none" 
                            type="text" 
                            placeholder="Article name or keyword..."
                            // value={searchQuery}
                            // onChange={(e) => setSearchQuery(e.target.value)} 
                        />
                    </div>

                    <div className={`py-1.5 px-2.5 md:py-3 md:px-5 ${selectedCategory === 'All' ? 'bg-[#FFF44F] text-black' : 'bg-black text-white'} text-sm md:text-base font-medium md:font-semibold rounded-full hover:shadow-lg transition duration-3000 cursor-pointer`}
                        // onClick={() => setSelectedCategory('All')}
                    >
                        <span>All</span>
                    </div>
                    <div className={`py-1.5 px-2.5 md:py-3 md:px-5 ${selectedCategory === 'Technology' ? 'bg-[#FFF44F] text-black' : 'bg-black text-white'} text-sm md:text-base font-medium md:font-semibold rounded-full hover:shadow-lg transition duration-3000 cursor-pointer`}
                        // onClick={() => setSelectedCategory('Technology')}    
                    >
                        <span>Technology</span>
                    </div>
                    <div className={`py-1.5 px-2.5 md:py-3 md:px-5 ${selectedCategory === 'Food' ? 'bg-[#FFF44F] text-black' : 'bg-black text-white'} text-sm md:text-base font-medium md:font-semibold rounded-full hover:shadow-lg transition duration-3000 cursor-pointer`}
                        // onClick={() => setSelectedCategory('Food')}    
                    >
                        <span>Food</span>
                    </div>
                    <div className={`py-1.5 px-2.5 md:py-3 md:px-5 ${selectedCategory === 'People' ? 'bg-[#FFF44F] text-black' : 'bg-black text-white'} text-sm md:text-base font-medium md:font-semibold rounded-full hover:shadow-lg transition duration-3000 cursor-pointer`}
                        // onClick={() => setSelectedCategory('People')}    
                    >
                        <span>People</span>
                    </div>
                    <div className={`py-1.5 px-2.5 md:py-3 md:px-5 ${selectedCategory === 'Lifestyle' ? 'bg-[#FFF44F] text-black' : 'bg-black text-white'} text-sm md:text-base font-medium md:font-semibold rounded-full hover:shadow-lg transition duration-3000 cursor-pointer`}
                        // onClick={() => setSelectedCategory('Lifestyle')}    
                    >
                        <span>Lifestyle</span>
                    </div>
                    <div className={`py-1.5 px-2.5 md:py-3 md:px-5 ${selectedCategory === 'Nature' ? 'bg-[#FFF44F] text-black' : 'bg-black text-white'} text-sm md:text-base font-medium md:font-semibold rounded-full hover:shadow-lg transition duration-3000 cursor-pointer`}
                        // onClick={() => setSelectedCategory('Nature')}    
                    >
                        <span>Nature</span>
                    </div>
                    <div className={`py-1.5 px-2.5 md:py-3 md:px-5 ${selectedCategory === 'Culture' ? 'bg-[#FFF44F] text-black' : 'bg-black text-white'} text-sm md:text-base font-medium md:font-semibold rounded-full hover:shadow-lg transition duration-3000 cursor-pointer`}
                        // onClick={() => setSelectedCategory('Culture')}    
                    >
                        <span>Culture</span>
                    </div>
                    
                </div>

                {result.posts.length === 0 ? 
                (
                    <p className="text-center md:text-lg text-base text-gray-300">No Post Available ...</p>
                )
                :
                (       
                    <div className="grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-3 xl:gap-12">
                        {result.posts.map((post)=> (
                            <HomeBlogCard
                                key={post?._id}
                                id={post._id}
                                title={post.title} 
                                author={post.author } 
                                category={post.category} 
                                image={post?.image} 
                                tags={post.tags} 
                                description={post.description} 
                                slug={post.slug} 
                                createdAt={post.createdAt} 
                            />
                        ))}
                    </div>
                )}


                <center className="">
                    <button disabled type="button" className="cursor-pointer my-8 py-3 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-black focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
                        {loadMore ? 
                            (
                                <>
                                    <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
                                    </svg>
                                    Loading More ...
                                </>
                            )
                            :
                            (
                                <>Fetch More</>
                            )
                        }
                        
                    </button>
                </center>
            </div>
        </div>
    )
}

export default AllBlogs