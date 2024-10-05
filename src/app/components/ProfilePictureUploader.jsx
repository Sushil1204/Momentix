'use client'
import React, { useState, useRef } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import { AiOutlineCamera } from 'react-icons/ai';

const ImageUpload = () => {
    const [image, setImage] = useState(null); // For storing the selected image
    const [croppedImage, setCroppedImage] = useState(''); // For storing the cropped image
    const [open, setOpen] = useState(false); // To handle modal state
    const cropperRef = useRef(null);
    const fileInputRef = useRef(null); // Ref for file input

    // Function to handle image selection
    const handleImageChange = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        if (file) {
            reader.onloadend = () => {
                setImage(reader.result);
                setOpen(true); // Open modal after image selection
            };
            reader.readAsDataURL(file);
        }
    };

    // Function to remove the cropped image
    const removeImage = () => {
        setCroppedImage(''); // Reset the cropped image
        setImage(null); // Clear the selected image
    };

    // Function to crop the image
    const cropImage = () => {
        const cropper = cropperRef.current?.cropper;
        if (cropper) {
            setCroppedImage(cropper.getCroppedCanvas().toDataURL());
            setOpen(false); // Close modal after cropping
        }
    };

    // Trigger file input on div click
    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="">
            {/* Display Cropped Image or Camera Icon */}
            <label htmlFor="username" className="bg-white px-1 text-gray-700 text-sm">
                Profile picture
            </label>
            {croppedImage ? (
                <div className="flex gap-x-3">
                    <div
                        className="w-20 h-20 rounded-full border-2 border-gray-300 flex items-center justify-center relative cursor-pointer overflow-hidden"
                        onClick={handleUploadClick} // Allow changing the image after cropping
                    >
                        <img
                            src={croppedImage}
                            alt="Cropped"
                            className="w-full h-full object-cover rounded-full"
                        />
                        <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageChange}
                            ref={fileInputRef} // Reference for the input
                        />
                    </div>
                    <button
                        className="mt-2 text-sm text-red-500 hover:underline"
                        onClick={removeImage} // Remove image on click
                    >
                        Remove Image
                    </button>
                </div>
            ) : (
                <div
                    className="w-20 h-20 rounded-full border-2 border-gray-300 flex items-center justify-center relative cursor-pointer overflow-hidden"
                    onClick={handleUploadClick} // Trigger file input on click
                >
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageChange}
                        ref={fileInputRef} // Reference for the input
                    />
                    <AiOutlineCamera className="absolute text-gray-500 opacity-70 hover:opacity-100 transition-opacity" size={24} />
                </div>
            )}

            {/* Custom Modal */}
            {open && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
                    <div className="bg-white rounded-lg p-6 w-11/12 max-w-md shadow-lg text-center">
                        <h2 className="text-lg font-bold mb-4">Crop Image</h2>
                        {image && (
                            <Cropper
                                src={image}
                                style={{ height: 300, width: '100%' }}
                                aspectRatio={1} // 1 for circular crop
                                guides={false}
                                ref={cropperRef}
                                viewMode={1}
                                dragMode="move"
                                autoCropArea={1}
                                scalable={true}
                                cropBoxMovable={true}
                                cropBoxResizable={true}
                            />
                        )}
                        <div className="mt-4 flex justify-between">
                            <button
                                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                                onClick={cropImage}
                            >
                                Crop Image
                            </button>
                            <button
                                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                                onClick={() => setOpen(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageUpload;
