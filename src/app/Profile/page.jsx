import Image from "next/image";
import React from "react";
import { AiOutlineTag } from "react-icons/ai";
import { BsBookmarkCheckFill, BsGrid3X3 } from "react-icons/bs";
import { HiOutlineCog } from "react-icons/hi";
import ProfileCard from "../components/ProfileCard";

const ProfilePage = () => {
    return (
        <div className="w-full mt-10 flex flex-col items-center p-4 overflow-hidden">
            {/* Profile Header */}
            <ProfileCard />

            {/* Tab Navigation */}
            <div className="flex justify-evenly border-t border-b border-gray-300 mt-4 w-full max-w-4xl">
                <div className="py-2 px-6 text-center cursor-pointer hover:bg-gray-200 transition duration-200">
                    <BsGrid3X3 className="mx-auto" size={28} />
                    <span className="text-sm font-medium">Posts</span>
                </div>
                <div className="py-2 px-6 text-center cursor-pointer hover:bg-gray-200 transition duration-200">
                    <BsBookmarkCheckFill className="mx-auto" size={28} />
                    <span className="text-sm font-medium">Saved</span>
                </div>
                <div className="py-2 px-6 text-center cursor-pointer hover:bg-gray-200 transition duration-200">
                    <AiOutlineTag className="mx-auto" size={28} />
                    <span className="text-sm font-medium">Tagged</span>
                </div>
            </div>

            {/* Posts Grid */}
            <div className="w-full max-w-4xl py-6 h-[560px] overflow-y-scroll no-scrollbar">
                <div className="grid grid-cols-3 gap-1">
                    {/* Post */}
                    <div className="aspect-square bg-gradient-to-r from-purple-300 to-blue-300 rounded-lg shadow-md hover:shadow-lg transition duration-200"></div>
                    <div className="aspect-square bg-gradient-to-r from-green-300 to-blue-300 rounded-lg shadow-md hover:shadow-lg transition duration-200"></div>
                    <div className="aspect-square bg-gradient-to-r from-yellow-300 to-orange-300 rounded-lg shadow-md hover:shadow-lg transition duration-200"></div>
                    <div className="aspect-square bg-gradient-to-r from-red-300 to-pink-300 rounded-lg shadow-md hover:shadow-lg transition duration-200"></div>
                    <div className="aspect-square bg-gradient-to-r from-pink-300 to-purple-300 rounded-lg shadow-md hover:shadow-lg transition duration-200"></div>
                    <div className="aspect-square bg-gradient-to-r from-blue-300 to-teal-300 rounded-lg shadow-md hover:shadow-lg transition duration-200"></div>
                    <div className="aspect-square bg-gradient-to-r from-blue-300 to-teal-300 rounded-lg shadow-md hover:shadow-lg transition duration-200"></div>
                    <div className="aspect-square bg-gradient-to-r from-blue-300 to-teal-300 rounded-lg shadow-md hover:shadow-lg transition duration-200"></div>
                    <div className="aspect-square bg-gradient-to-r from-blue-300 to-teal-300 rounded-lg shadow-md hover:shadow-lg transition duration-200"></div>
                    <div className="aspect-square bg-gradient-to-r from-blue-300 to-teal-300 rounded-lg shadow-md hover:shadow-lg transition duration-200"></div>
                    {/* Add more post placeholders */}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
