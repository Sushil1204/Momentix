'use client'
import React, { useState, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import Picker from '@emoji-mart/react'; // New import for the emoji picker


const CreatePostPage = () => {
    const [image, setImage] = useState(null);
    const [isAllowedToComment, setIsAllowedToComment] = useState(true);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [caption, setCaption] = useState('');
    const captionRef = useRef(null); // Reference to the caption textarea

    // File drop handler
    const onDrop = acceptedFiles => {
        const file = acceptedFiles[0];
        setImage(Object.assign(file, {
            preview: URL.createObjectURL(file)
        }));
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: 'image/*',
        multiple: false
    });

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

    const onSubmit = data => {
        const postData = {
            ...data,
            caption, // Use the caption with emoji
            image,
            isAllowedToComment
        };
        console.log(postData);
        // Save to backend logic here
    };
    return (
        <div className="flex w-full flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-purple-50 p-4">
            <div className="w-full max-w-md p-6 bg-white shadow-2xl rounded-3xl border border-gray-200">
                <h2 className="text-xl md:text-2xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-6">
                    Create a Post 🎉
                </h2>

                <form className="space-y-6">
                    {/* Image Upload */}
                    <div>
                        <label className="block text-base font-semibold text-gray-700 mb-2">Upload Image</label>
                        <div
                            {...getRootProps()}
                            className="mt-2 p-6 border-4 border-dashed border-purple-300 rounded-2xl bg-purple-50 cursor-pointer text-center hover:bg-purple-100 transition-all duration-300 ease-in-out"
                        >
                            <input {...getInputProps()} />
                            {!image ? (
                                <p className="text-purple-500 font-bold text-sm md:text-base">
                                    Drag & drop an image or click to upload
                                </p>
                            ) : (
                                <img
                                    src={image.preview}
                                    alt="preview"
                                    className="mx-auto rounded-xl max-h-40 w-auto shadow-md"
                                />
                            )}
                        </div>
                    </div>

                    {/* Caption */}
                    <div>
                        <label className="block text-base font-semibold text-gray-700 mb-2">Caption</label>
                        <div className="relative">
                            <textarea
                                value={caption}
                                ref={captionRef}
                                onChange={(e) => setCaption(e.target.value)}
                                className="w-full mt-2 p-3 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-none bg-purple-50 placeholder-gray-400"
                                rows="6"
                                placeholder="Write something here..."
                            />
                            {/* Emoji Picker Toggle Button */}
                            <button
                                type="button"
                                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                                className="absolute left-4 bottom-3 text-purple-500 text-lg hover:text-pink-500 transition-all duration-300"
                            >
                                😊
                            </button>

                            {/* Emoji Picker */}
                            {showEmojiPicker && (
                                <div className="absolute top-full right-0 z-10 mt-2 shadow-lg">
                                    <Picker
                                        onEmojiSelect={addEmoji}
                                        theme="light"
                                        emojiSize={22}
                                        className="rounded-lg border border-gray-200"
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Tags */}
                    <div>
                        <label className="block text-base font-semibold text-gray-700 mb-2">Tags</label>
                        <input
                            type="text"
                            className="w-full mt-2 p-3 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-purple-50 placeholder-gray-400"
                            placeholder="e.g., party, vibes"
                        />
                    </div>

                    {/* Options */}
                    <div className="flex justify-between items-center">
                        <label className="inline-flex items-center text-sm font-semibold text-gray-700">
                            <input
                                type="checkbox"
                                checked={isAllowedToComment}
                                onChange={() => setIsAllowedToComment(!isAllowedToComment)}
                                className="h-4 w-4 text-pink-600 border-purple-300 rounded-md focus:ring-pink-500 transition-all duration-300"
                            />
                            <span className="ml-2">Allow Comments</span>
                        </label>

                        <label className="inline-flex items-center text-sm font-semibold text-gray-700">
                            <input
                                type="checkbox"
                                // checked={isAllowedToSave}
                                // onChange={() => setIsAllowedToSave(!isAllowedToSave)}
                                className="h-4 w-4 text-pink-600 border-purple-300 rounded-md focus:ring-pink-500 transition-all duration-300"
                            />
                            <span className="ml-2">Allow Saving</span>
                        </label>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-5 rounded-xl shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-opacity-50"
                        >
                            Upload My Post 🚀
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default CreatePostPage;
