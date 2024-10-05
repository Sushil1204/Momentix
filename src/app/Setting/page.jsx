'use client'
import { useRef, useState } from 'react';
import { BsPerson, BsLock, BsGear } from 'react-icons/bs';
import Picker from '@emoji-mart/react'; // New import for the emoji picker



const page = () => {
    const [activeTab, setActiveTab] = useState('editProfile');
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [caption, setCaption] = useState('');
    const captionRef = useRef(null); // Reference to the caption textarea


    // Handle adding emoji at caret position
    const addEmoji = (emoji) => {
        console.log('emoji', emoji)
        const emojiText = emoji.native;
        const captionInput = captionRef.current;
        const start = captionInput.selectionStart;
        const end = captionInput.selectionEnd;

        // Insert emoji at caret position
        const updatedCaption =
            caption.slice(0, start) + emojiText + caption.slice(end);
        setCaption(updatedCaption);

        // Set the caret back to the right position after emoji insertion
        setTimeout(() => {
            captionInput.setSelectionRange(start + emojiText.length, start + emojiText.length);
            captionInput.focus();
        }, 0);
    };

    return (
        <div className="flex flex-1 flex-col md:flex-row w-full px-4 md:mt-10 items-start justify-center">
            {/* Sidebar Navigation */}
            <div className="w-full md:w-1/4 h-fit md:mr-8 mb-6 md:mb-0 bg-white shadow-lg rounded-xl p-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Settings</h2>
                <div className="hidden md:block">
                    <div
                        className={`flex items-center cursor-pointer py-3 px-4 rounded-lg transition duration-200 ${activeTab === 'editProfile' ? 'bg-blue-100 border-l-4 border-blue-600 font-bold' : 'text-gray-600 hover:bg-gray-100'
                            }`}
                        onClick={() => setActiveTab('editProfile')}
                    >
                        <BsPerson className="mr-2" />
                        Edit Profile
                    </div>
                    <div
                        className={`flex items-center cursor-pointer py-3 px-4 rounded-lg transition duration-200 ${activeTab === 'updatePassword' ? 'bg-blue-100 border-l-4 border-blue-600 font-bold' : 'text-gray-600 hover:bg-gray-100'
                            }`}
                        onClick={() => setActiveTab('updatePassword')}
                    >
                        <BsLock className="mr-2" />
                        Update Password
                    </div>
                    <div
                        className={`flex items-center cursor-pointer py-3 px-4 rounded-lg transition duration-200 ${activeTab === 'otherSettings' ? 'bg-blue-100 border-l-4 border-blue-600 font-bold' : 'text-gray-600 hover:bg-gray-100'
                            }`}
                        onClick={() => setActiveTab('otherSettings')}
                    >
                        <BsGear className="mr-2" />
                        Other Settings
                    </div>
                </div>

                <div className="md:hidden flex items-center">
                    <div
                        className={`flex flex-col gap-y-2 items-center cursor-pointer py-3 px-4 rounded-lg transition duration-200 ${activeTab === 'editProfile' ? 'bg-blue-100 border-b-4 border-blue-600 font-bold' : 'text-gray-600 hover:bg-gray-100'
                            }`}
                        onClick={() => setActiveTab('editProfile')}
                    >
                        <BsPerson className="" size={20} />
                        <p className="text-sm text-center">Edit Profile</p>
                    </div>
                    <div
                        className={`flex flex-col gap-y-2 items-center cursor-pointer py-3 px-4 rounded-lg transition duration-200 ${activeTab === 'updatePassword' ? 'bg-blue-100 border-b-4 border-blue-600 font-bold' : 'text-gray-600 hover:bg-gray-100'
                            }`}
                        onClick={() => setActiveTab('updatePassword')}
                    >
                        <BsLock className="" size={20} />
                        <p className="text-sm text-center">Update Password</p>
                    </div>
                    <div
                        className={`flex flex-col gap-y-2 items-center cursor-pointer py-3 px-4 rounded-lg transition duration-200 ${activeTab === 'otherSettings' ? 'bg-blue-100 border-b-4 border-blue-600 font-bold' : 'text-gray-600 hover:bg-gray-100'
                            }`}
                        onClick={() => setActiveTab('otherSettings')}
                    >
                        <BsGear className="" size={20} />
                        <p className="text-sm text-center">Other Settings</p>
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="w-full md:w-3/4">
                <div className="grid grid-cols-1 gap-8">
                    {activeTab === 'editProfile' && (
                        <div className="bg-white shadow-lg rounded-xl p-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Edit Profile</h2>

                            <div className="flex flex-col mb-4">
                                <label className="text-gray-700 mb-2">Profile Picture</label>
                                <div className="flex items-center gap-4">
                                    <input
                                        type="file"
                                        id="profilePicture"
                                        accept="image/*"
                                        className="hidden"
                                    />
                                    <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                                        <img
                                            src="https://ui-avatars.com/api/?name=Sushil+Pundkar&size=512"
                                            alt="Profile Preview"
                                            className="w-full h-full object-cover"
                                            id="profilePicturePreview"
                                        />
                                    </div>
                                    <label
                                        htmlFor="profilePicture"
                                        className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md cursor-pointer hover:bg-blue-700 transition duration-200"
                                    >
                                        Upload Picture
                                    </label>
                                </div>
                            </div>

                            <div className="flex flex-col mb-4">
                                <label className="text-gray-700">Name</label>
                                <input
                                    type="text"
                                    className="w-full mt-2 p-3 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-purple-50 placeholder-gray-400"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div className="flex flex-col mb-4">
                                <label className="text-gray-700">Bio</label>
                                <div className="relative">
                                    <textarea
                                        className="w-full mt-2 p-3 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-purple-50 placeholder-gray-400" placeholder="Tell something about yourself..."
                                    />
                                    <button
                                        type="button"
                                        className="absolute right-4 bottom-4 text-gray-400 text-lg hover:text-gray-600 transition-all duration-300"
                                    >
                                        😊
                                    </button>
                                </div>
                            </div>
                            <button className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-200">
                                Save Changes
                            </button>
                        </div>
                    )}

                    {activeTab === 'updatePassword' && (
                        <div className="bg-white shadow-lg rounded-xl p-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Update Password</h2>
                            <div className="flex flex-col mb-4">
                                <label className="text-gray-700">Current Password</label>
                                <input
                                    type="password"
                                    className="w-full mt-2 p-3 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-purple-50 placeholder-gray-400"
                                />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label className="text-gray-700">New Password</label>
                                <input
                                    type="password"
                                    className="w-full mt-2 p-3 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-purple-50 placeholder-gray-400"
                                />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label className="text-gray-700">Confirm New Password</label>
                                <input
                                    type="password"
                                    className="w-full mt-2 p-3 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-purple-50 placeholder-gray-400"
                                />
                            </div>
                            <button className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-200">
                                Update Password
                            </button>
                        </div>
                    )}

                    {activeTab === 'otherSettings' && (
                        <div className="bg-white shadow-lg rounded-xl p-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Other Settings</h2>
                            <div className="flex flex-col mb-4">
                                <label className="text-gray-700">Notification Preferences</label>
                                <select className="w-full mt-2 p-3 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-purple-50 placeholder-gray-400">
                                    <option>Email Notifications</option>
                                    <option>SMS Notifications</option>
                                    <option>No Notifications</option>
                                </select>
                            </div>
                            <div className="flex flex-col mb-4">
                                <label className="text-gray-700">Privacy Settings</label>
                                <select className="w-full mt-2 p-3 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-purple-50 placeholder-gray-400">
                                    <option>Public</option>
                                    <option>Friends Only</option>
                                    <option>Private</option>
                                </select>
                            </div>
                            <div className="flex flex-col mb-4">
                                <label className="text-gray-700">Theme</label>
                                <select className="w-full mt-2 p-3 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-purple-50 placeholder-gray-400">
                                    <option>Dark</option>
                                    <option>Light</option>
                                </select>
                            </div>
                            <div className="flex flex-col mb-4">
                                <button className="bg-red-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-red-700 transition duration-200">
                                    Deactivate Account
                                </button>
                            </div>
                            <button className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-200">
                                Save Settings
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>


    );
};

export default page;
