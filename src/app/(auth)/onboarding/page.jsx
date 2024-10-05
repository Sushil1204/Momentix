"use client"
import ProfilePictureUploader from '@/app/components/ProfilePictureUploader';
import Link from 'next/link';
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';




const Onboarding = () => {
    const { handleSubmit, control, watch, formState: { errors } } = useForm();
    const [passwordVisible, setPasswordVisible] = useState(false);

    const onSubmit = async (data) => {
        console.log('Form Data:', data);

    };
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleImageUpload = (croppedImage) => {
        console.log('Cropped Image URL:', croppedImage);
        // Here you can handle the image upload to your server or state management
    };


    return (
        <>
            <div className="flex justify-center w-2/3 items-center min-h-screen">
                <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-white">
                    <p className="text-sm text-gray-800 ">LET'S GET YOU STARTED</p>
                    <h1 className="text-2xl font-semibold mb-6 text-gray-800">Setup your Account</h1>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Profile Picture Uploader */}
                        <div className="mb-6 gap-y-3">
                            <ProfilePictureUploader onImageUpload={handleImageUpload} />
                        </div>

                        {/* Name Field */}
                        <div className="mb-4">
                            <Controller
                                name="username"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Username is required' }}
                                render={({ field }) => (
                                    <div className="relative">
                                        <label htmlFor="username" className="absolute -top-2 left-4 bg-white px-1 text-gray-700 text-sm">
                                            Username
                                        </label>
                                        <input
                                            id="username"
                                            type="text"
                                            placeholder="Johnson Doe"
                                            className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-800 placeholder-gray-400 text-lg ${errors.username ? 'border-red-500' : ''}`}
                                            {...field}
                                        />
                                    </div>
                                )}
                            />
                            {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>}
                        </div>

                        {/* Email Field */}
                        <div className="mb-4">
                            <Controller
                                name="dateOfBirth"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: 'Date of Birth is required',

                                }}
                                render={({ field }) => (
                                    <div className="relative">
                                        <label htmlFor="dateofbirth" className="absolute -top-2 left-4 bg-white px-1 text-gray-700 text-sm">
                                            Date of Birth
                                        </label>
                                        <input
                                            id="dob"
                                            type="date"

                                            className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-800 placeholder-gray-400 text-lg ${errors.dateOfBirth ? 'border-red-500' : ''}`}
                                            {...field}
                                        />
                                    </div>
                                )}
                            />
                            {errors.dateOfBirth && <p className="text-red-500 text-xs">{errors.dateOfBirth.message}</p>}
                        </div>

                        {/* Password Field */}
                        <div className="mb-4">
                            <div className="relative">
                                <Controller
                                    name="phone"
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: 'Phone is required',
                                        pattern: {
                                            value: /^[0-9]+$/,
                                            message: 'Only numbers are allowed',
                                        },
                                    }}
                                    render={({ field }) => (

                                        <>
                                            <div className="relative">
                                                <label htmlFor="phone" className="absolute -top-2 left-4 bg-white px-1 text-gray-700 text-sm">
                                                    Phone
                                                </label>
                                                <input
                                                    id="phone"
                                                    type="text"
                                                    placeholder="Phone number"
                                                    className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-800 placeholder-gray-400 text-lg ${errors.phone ? 'border-red-500' : ''}`}
                                                    {...field}
                                                />
                                            </div>
                                        </>
                                    )}
                                />
                            </div>
                            {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 focus:outline-none"
                        >
                            Continue
                        </button>
                    </form>
                </div>


            </div>
        </>
    )
}

export default Onboarding