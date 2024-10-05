"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';




const Registration = () => {
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
            <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-white">
                <p className="text-sm text-gray-800 ">LET'S GET YOU STARTED</p>
                <h1 className="text-2xl font-semibold mb-6 text-gray-800">Create an Account</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Name Field */}
                    <div className="mb-4">
                        <Controller
                            name="name"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: 'Name is required',
                            }}
                            render={({ field }) => (
                                <div className="relative">
                                    <label htmlFor="name" className="absolute -top-2 left-4 bg-white px-1 text-gray-700 text-sm">
                                        Your Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Johnson Doe"
                                        className={`w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-800 placeholder-gray-400 text-lg ${errors.name ? 'border-red-500' : ''}`}
                                        {...field}
                                    />
                                </div>
                            )}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>


                    {/* Email Field */}
                    <div className="mb-4">
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: 'Email is required',
                                pattern: {
                                    value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                                    message: 'Invalid email format',
                                },
                            }}
                            render={({ field }) => (
                                <div className="relative">
                                    <label htmlFor="email" className="absolute -top-2 left-4 bg-white px-1 text-gray-700 text-sm">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="text"
                                        placeholder="sushilpundkar@gmail.com"
                                        className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-800 placeholder-gray-400 text-lg ${errors.name ? 'border-red-500' : ''}`}
                                        {...field}
                                    />
                                </div>
                            )}
                        />
                        {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                    </div>

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
                                            className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-800 placeholder-gray-400 text-lg ${errors.name ? 'border-red-500' : ''}`}
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

                    <div className=" relative mb-4 mx-4 flex items-center gap-3">
                        <Controller
                            name="term_condition"
                            defaultValue={false}
                            control={control}
                            rules={{
                                required: "Please agree to the terms to proceed.",
                            }}
                            render={({ field }) => (
                                <input type='checkbox'
                                    className='appearance-none rounded-xl w-6 h-6 border border-gray-800  active:outline-none focus:outline-none checked:bg-white checked:border-4  checked:border-gray-800' {...field} style={{}} />
                            )}
                        />
                        <span className='text-sm  text-slate-600'>I agree to the Terms and Privacy Policy.</span>
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
            {/* Signup Prompt Container */}
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <div className="text-center">
                    <p className="text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link href="/login" className="text-gray-800 font-semibold hover:underline">
                            LOGIN HERE
                        </Link>
                    </p>
                </div>
            </div>

        </>
    )
}

export default Registration