'use client'
import { fetchPosts } from '@/app/constants/apiFuntions';
import { useQuery } from '@tanstack/react-query';
import { FaSearch } from 'react-icons/fa'

const page = () => {
    const { data: posts, error: postsError, isLoading: postsLoading } = useQuery({ queryKey: ['posts'], queryFn: fetchPosts });

    if (postsLoading) return <div>Loading...</div>;
    if (postsError) return <div>Error: {postsError.message}</div>;
    return (
        <div className="flex flex-1 flex-col md:py-3 w-full h-full md:h-screen space-y-5">
            {/* Fixed Search Bar */}
            <div className="flex items-center bg-gray-100 rounded-full p-2 w-full max-w-xl mx-auto shadow-md">
                <FaSearch className="text-gray-500 ml-3" />
                <input
                    type="text"
                    placeholder="Search posts..."
                    className="flex-1 bg-transparent border-none outline-none p-2 text-sm md:text-base"
                />
            </div>

            {/* Scrollable Posts Grid */}
            <div className="flex-1 overflow-y-auto mt-8 px-4 md:mt-0 no-scrollbar" style={{ maxHeight: 'calc(100vh - 64px)' }}> {/* Adjust this value based on the height of the search bar */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {posts?.map((post) => (
                        <div key={post.id} className="relative bg-white shadow-md overflow-hidden group">
                            <img
                                src={post.image}
                                alt={post?.caption || 'Image related to the post'}
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-90">
                                <h3 className="text-lg font-semibold line-clamp-2">{post.caption}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>


    )
}

export default page