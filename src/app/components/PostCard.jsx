'use client'
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { fetchPosts } from '../constants/apiFuntions';

const PostCard = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const { data: posts, error: postsError, isLoading: postsLoading } = useQuery({ queryKey: ['posts'], queryFn: fetchPosts });

    if (postsLoading) return <div>Loading...</div>;
    if (postsError) return <div>Error: {postsError.message}</div>;

    // State to handle video play/pause

    const handleVideoClick = () => {
        setIsPlaying(!isPlaying);
    };

    console.log(posts)




    return (
        <>
            {posts?.map((post) =>
                <div className="md:max-w-md bg-white shadow-md rounded-lg overflow-hidden mb-4">

                    <div className="flex items-center p-4 border-b">
                        <img src={post?.avatar} alt={`${post?.username}'s avatar`} className="w-10 h-10 rounded-full mr-2" />
                        <div>
                            <Link href={`/profile/${post?.id}`} className="font-bold text-gray-800">{post?.username}</Link>
                            <p className="text-gray-500 text-sm">{new Date(post?.createdAt).toLocaleString()}</p>
                        </div>
                    </div>

                    <div className="relative">

                        <Image
                            src={post?.image}
                            alt="Post Image"
                            layout="responsive"
                            width={500}
                            height={500}
                            className="object-cover"
                            priority // Prioritize loading for better performance
                        />

                    </div>

                    {/* Optional: Post Actions */}
                    <div className="p-4 flex justify-between">
                        <button className="text-blue-500">Like</button>
                        <button className="text-blue-500">Comment</button>
                    </div>
                </div>

            )}

        </>
    );
};

export default PostCard;
