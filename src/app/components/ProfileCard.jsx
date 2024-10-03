import React from 'react'

const ProfileCard = () => {
    return (
        <div className="shadow-lg rounded-lg py-10 px-8 flex flex-col md:flex-row items-center gap-6 w-full max-w-4xl ">
            {/* Profile Picture */}
            <img
                loading="lazy"
                src='https://ui-avatars.com/api/?name=Sushil+Pundkar&size=512'
                alt='user'
                className='rounded-full w-28 h-28 object-cover border-4 border-white shadow-lg transition-transform transform hover:scale-105'
            />

            {/* User Info */}
            <div className="flex-grow text-gray-800">
                <div className="flex  justify-between flex-col md:flex-row gap-4">
                    <h2 className="text-2xl md:text-3xl font-semibold">User Full Name</h2>
                </div>
                <div className="text-sm md:hidden visible">
                    <strong className="text-gray-800">@username</strong>
                    <p className="text-gray-600">This is the bio section with a short description.</p>
                </div>
                <div className="flex flex-wrap gap-6 md:py-2 mt-6 md:mt-0  items-center justify-center md:justify-start">
                    <div className="text-sm md:text-base text-center flex flex-col md:flex-row gap-2">
                        <strong className="text-yellow-300">120</strong>
                        <strong>posts</strong>
                    </div>
                    <div className="text-sm md:text-base text-center flex flex-col md:flex-row gap-2">
                        <strong className="text-green-300">15k</strong>
                        <strong>followers</strong>
                    </div>
                    <div className="text-sm md:text-base text-center flex flex-col md:flex-row gap-2">
                        <strong className="text-blue-300">200</strong>
                        <strong>following</strong>
                    </div>
                </div>

                <div className="text-sm hidden md:block">
                    <strong className="text-gray-800">@username</strong>
                    <p className="text-gray-600">This is the bio section with a short description.</p>
                </div>
            </div>
        </div>


    )
}

export default ProfileCard