'use client'
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaHeart, FaRegHeart, FaRegComment, FaRegShareSquare, FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { fetchPosts } from '../constants/apiFuntions';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

const PostCard = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showComments, setShowComments] = useState({});
    const [likedPost, setLikedPost] = useState({});
    const { data: posts, error: postsError, isLoading: postsLoading } = useQuery({ queryKey: ['posts'], queryFn: fetchPosts });

    if (postsLoading) return <div>Loading...</div>;
    if (postsError) return <div>Error: {postsError.message}</div>;

    // State to handle video play/pause

    const handleVideoClick = () => {
        setIsPlaying(!isPlaying);
    };

    // show/hide comment section
    const handleCommentsToggle = (index) => {
        setShowComments((prev) => ({
            ...prev,
            [index]: !prev[index]
        }));
    };


    // toggle like/dislike post
    const handleLikeToggle = (index) => {
        setLikedPost((prev) => ({
            ...prev,
            [index]: !prev[index]
        }));
    };




    return (
        <>
            {posts?.map((post, index) => (
                <div className="md:max-w-md bg-white shadow-lg rounded-lg overflow-hidden mb-6 transition-all duration-300 hover:shadow-xl" key={post?.username}>

                    {/* User Info */}
                    <div className="flex items-center p-4 border-b border-gray-200">
                        <img
                            src={post?.avatar}
                            alt={`${post?.username}'s avatar`}
                            className="w-10 h-10 rounded-full mr-3 hover:opacity-90 transition-opacity"
                        />
                        <div>
                            <Link href={`/profile/${post?.id}`} className="text-gray-800 font-semibold hover:underline">
                                {post?.username}
                            </Link>
                            <p className="text-gray-500 text-sm">{new Date(post?.createdAt).toLocaleString()}</p>
                        </div>
                    </div>

                    {/* Post Image */}
                    <div className="relative">
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                            // navigation
                            // pagination={{ clickable: true }}
                            // scrollbar={{ draggable: true }}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide>
                                <Image
                                    src={post?.image}
                                    alt="Post Image"
                                    layout="responsive"
                                    width={500}
                                    height={500}
                                    className="object-cover cursor-pointer hover:scale-105 transition-transform"
                                    priority
                                />
                                {/* Left and Right Arrows */}
                                <div className="absolute inset-0 flex items-center justify-between px-4">
                                    {/* Left Arrow */}
                                    <div className="rounded-full cursor-pointer hover:bg-opacity-75 transition"
                                    // onClick={() => handleLeftArrow(index)}
                                    >

                                        <IoIosArrowDropleft size={25} color="white" />

                                    </div>

                                    {/* Right Arrow */}
                                    <div className="rounded-full cursor-pointer hover:bg-opacity-75 transition"
                                    // onClick={() => handleRightArrow(index)}
                                    >
                                        <IoIosArrowDropright size={25} color="white" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    {/* Post Caption */}
                    <div className="px-4 py-2">
                        <p className="text-gray-800 text-sm">
                            {post?.caption?.length > 100 ? (
                                <span>
                                    {post?.caption.slice(0, 100)}...
                                    <span className="text-blue-500 cursor-pointer hover:underline" onClick={() => handleExpandCaption(index)}>more</span>
                                </span>
                            ) : (
                                post?.caption
                            )}
                        </p>
                        {/* Tags */}
                        {post?.tags && post?.tags.length > 0 && (
                            <div className="mt-2 flex flex-wrap gap-2">
                                {post?.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className="text-blue-500 text-xs font-medium cursor-pointer hover:underline">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Post Actions */}
                    <div className="p-4 flex items-center space-x-6">

                        {/* Like Button */}
                        <div className="flex items-center space-x-2">
                            <div className="w-9" onClick={() => handleLikeToggle(index)}>
                                {likedPost[index] ? (
                                    <div className="flex items-center space-x-2">
                                        <FaHeart size={25} cursor="pointer" color="red" className="hover:scale-110 transition-transform" />
                                        <span className="text-sm font-medium text-gray-800">1</span>
                                    </div>
                                ) : (
                                    <FaRegHeart size={25} cursor="pointer" className="hover:scale-110 transition-transform" />
                                )}
                            </div>
                        </div>

                        {/* Comment Button */}
                        <div className="w-9 flex items-center space-x-2" onClick={() => handleCommentsToggle(index)}>
                            <FaRegComment size={25} cursor="pointer" className="hover:scale-110 transition-transform" />
                            <span className="text-sm font-medium text-gray-800">1</span>
                        </div>

                        {/* Share Button */}
                        <FaRegShareSquare size={25} cursor="pointer" className="hover:scale-110 transition-transform" />

                    </div>

                    {/* Comments Section */}
                    {showComments[index] && (
                        <div className="p-4 bg-gray-50 rounded-lg space-y-4">
                            <div className="flex items-start space-x-3">
                                <img
                                    src={post?.avatar}
                                    alt={`${post?.username}'s avatar`}
                                    className="w-8 h-8 rounded-full mr-2"
                                />
                                <div>
                                    <Link href={`/profile/${post?.id}`} className="text-gray-800 text-sm font-semibold hover:underline">
                                        {post?.username}
                                    </Link>
                                    <p className="text-gray-500 text-xs">{new Date(post?.createdAt).toLocaleString()}</p>
                                    <p className="text-sm text-gray-800 mt-2">Family time</p>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            ))}



        </>
    );
};

export default PostCard;
