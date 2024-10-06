'use client'
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaHeart, FaRegHeart, FaRegComment, FaRegShareSquare, FaEllipsisV } from "react-icons/fa";
import { fetchPosts } from '../constants/apiFuntions';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import { MdGroupAdd, MdOutlineBlock } from "react-icons/md";

const PostCard = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showComments, setShowComments] = useState({});
    const [likedPost, setLikedPost] = useState({});
    const [comments, setComments] = useState({}); // State for comments
    const [showDropdown, setShowDropdown] = useState({}); // State for dropdown menu

    const { data: posts, error: postsError, isLoading: postsLoading } = useQuery({ queryKey: ['posts'], queryFn: fetchPosts });

    if (postsLoading) return <div>Loading...</div>;
    if (postsError) return <div>Error: {postsError.message}</div>;

    // State to handle video play/pause
    const handleVideoClick = () => {
        setIsPlaying(!isPlaying);
    };

    // Show/hide comment section
    const handleCommentsToggle = (index) => {
        setShowComments((prev) => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    // Toggle like/dislike post
    const handleLikeToggle = (index) => {
        setLikedPost((prev) => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    // Add comment
    const handleAddComment = (index, commentText) => {
        if (!commentText.trim()) return;

        const newComment = {
            id: Date.now(),
            text: commentText,
            replies: [],
            liked: false,
        };

        setComments((prev) => ({
            ...prev,
            [index]: [...(prev[index] || []), newComment]
        }));
    };

    // Add reply to a comment
    const handleAddReply = (postIndex, commentId, replyText) => {
        if (!replyText.trim()) return;

        const newReply = {
            id: Date.now(),
            text: replyText,
        };

        setComments((prev) => ({
            ...prev,
            [postIndex]: prev[postIndex].map((comment) =>
                comment.id === commentId
                    ? { ...comment, replies: [...(comment.replies || []), newReply] }
                    : comment
            )
        }));
    };

    const handleDropdownToggle = (index) => {
        setShowDropdown((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <>
            {posts?.map((post, index) => (
                <div className="md:max-w-md bg-white shadow-lg rounded-lg overflow-hidden mb-6 transition-all duration-300 hover:shadow-xl" key={post?.username}>

                    {/* User Info */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-200">
                        <div className="flex items-center">
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
                        <div className="relative">
                            <FaEllipsisV className="cursor-pointer" onClick={() => handleDropdownToggle(index)} />
                            {showDropdown[index] && (
                                <div className="absolute right-0 mt-2 w-36 bg-white shadow-lg rounded-lg z-10">
                                    <div className="flex items-center gap-4 py-2 px-4 rounded-lg cursor-pointer hover:bg-gray-100" onClick={() => { /* Handle follow action */ }}>
                                        <MdGroupAdd size={20} />
                                        Follow
                                    </div>
                                    <div className="flex items-center gap-4  py-2 px-4 rounded-lg cursor-pointer hover:bg-gray-100" onClick={() => { /* Handle block action */ }}>
                                        <MdOutlineBlock size={20} />
                                        Block
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Post Image */}
                    <div className="relative">
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
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
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    {/* Post Caption */}
                    <div className="px-4 py-2">
                        <p className="text-gray-800 text-sm">
                            {post?.caption?.length > 100 ? (
                                <span>
                                    {post?.caption.slice(0, 100)}...
                                    <span className="text-blue-500 cursor-pointer hover:underline">more</span>
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
                            <span className="text-sm font-medium text-gray-800">{comments[index]?.length || 0}</span>
                        </div>

                        {/* Share Button */}
                        <FaRegShareSquare size={25} cursor="pointer" className="hover:scale-110 transition-transform" />
                    </div>

                    {/* Comments Section */}
                    {showComments[index] && (
                        <div className="p-4 bg-gray-50 rounded-lg space-y-4">
                            {/* Existing Comments */}
                            {comments[index]?.map((comment) => (
                                <div key={comment.id} className="border-b pb-2">
                                    <div className=" w-full flex items-center space-x-3">
                                        <img
                                            src={post?.avatar}
                                            alt={`${post?.username}'s avatar`}
                                            className="w-8 h-8 rounded-full"
                                        />
                                        <Link href={`/profile/${post?.id}`} className="text-gray-800 text-sm font-semibold hover:underline">
                                            {post?.username}
                                        </Link>
                                        <p className="text-sm text-gray-800">{comment.text}</p>
                                        <FaRegHeart className={`cursor-pointer ${comment.liked ? 'text-red-500' : ''} `} onClick={() => {
                                            comment.liked = !comment.liked;
                                            setComments({ ...comments }); // Update comments state
                                        }} />
                                    </div>
                                    <div className="flex items-center mx-10">
                                        <span className="text-sm text-gray-500 ml-2 cursor-pointer" onClick={() => handleAddReply(index, comment.id, "Your reply text here!")}>Reply</span>
                                        <span className="text-sm text-gray-500 ml-2 cursor-pointer" onClick={() => handleAddReply(index, comment.id, "Your reply text here!")}>Delete</span>
                                    </div>

                                    {/* Replies */}
                                    {comment.replies?.map((reply) => (
                                        <div key={reply.id} className="ml-10">
                                            <p className="text-gray-600">{reply.text}</p>
                                        </div>
                                    ))}
                                </div>
                            ))}

                            {/* Add New Comment */}
                            <div className="flex items-center space-x-3">
                                <img
                                    src={post?.avatar}
                                    alt={`${post?.username}'s avatar`}
                                    className="w-8 h-8 rounded-full"
                                />
                                <input
                                    type="text"
                                    className="border rounded-lg p-2 w-full"
                                    placeholder="Add a comment..."
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            handleAddComment(index, e.target.value);
                                            e.target.value = '';
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </>
    );
};

export default PostCard;
