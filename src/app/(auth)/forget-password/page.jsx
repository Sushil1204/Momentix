"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaArrowLeft } from 'react-icons/fa';



const Login = () => {
    const { handleSubmit, control, formState: { errors } } = useForm();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const onSubmit = async (data) => {
        console.log('Form Data:', data);

    };
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <>
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <p className="text-sm text-gray-800">Welcome back</p>
                <h1 className="text-2xl text-gray-800 font-semibold mb-6">Reset your Password</h1>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                    {/* Password Field */}
                    <div className="mb-4">
                        <div className="relative">
                            <Controller
                                name="password"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: 'Password is required',
                                    minLength: { value: 6, message: 'Password must be at least 6 characters' },
                                }}
                                render={({ field }) => (
                                    <div className="relative">
                                        <label htmlFor="password" className="absolute -top-2 left-4 bg-white px-1 text-gray-700 text-sm">
                                            Password
                                        </label>
                                        <input
                                            id="password"
                                            placeholder="*****"
                                            type={passwordVisible ? 'text' : 'password'}
                                            className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-800 placeholder-gray-400 text-lg ${errors.password ? 'border-red-500' : ''}`}
                                            {...field}
                                        />
                                    </div>
                                )}
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                onClick={togglePasswordVisibility}
                            >
                                {passwordVisible ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
                            </button>
                        </div>
                        {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
                    </div>
                    {/* Password Field */}
                    <div className="mb-4">
                        <div className="relative">
                            <Controller
                                name="cnfpassword"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: 'Password is required',
                                    minLength: { value: 6, message: 'Password must be at least 6 characters' },
                                }}
                                render={({ field }) => (
                                    <div className="relative">
                                        <label htmlFor="cnfpassword" className="absolute -top-2 left-4 bg-white px-1 text-gray-700 text-sm">
                                            confirm Password
                                        </label>
                                        <input
                                            id="cnfpassword"
                                            placeholder="*****"
                                            type='text'
                                            className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-800 placeholder-gray-400 text-lg ${errors.password ? 'border-red-500' : ''}`}
                                            {...field}
                                        />
                                    </div>
                                )}
                            />

                        </div>
                        {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
                    </div>


                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 focus:outline-none"
                    >
                        Continue
                    </button>
                </form>
                <hr className="my-4" />
                <p className="text-sm text-center flex justify-center items-center text-gray-600">
                    <FaArrowLeft className="mr-4" /> Go back to{" "}
                    <Link href="/login" className="text-gray-800 font-semibold hover:underline ml-1">
                        LOG IN
                    </Link>
                </p>
            </div>


        </>
    )
}

export default Login