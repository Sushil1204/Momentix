'use client'
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { IoCloseOutline } from "react-icons/io5";

const ForgotPasswordModal = ({ isOpen, onClose }) => {
    const { control, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        // Handle the submit action, e.g., send email for password reset
        console.log('Email submitted:', data.email);
        onClose(); // Close modal after submission
    };

    return (
        <div
            className={`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
        >
            <div
                className={`fixed inset-0 flex items-center justify-center p-4 ${isOpen ? 'opacity-100' : 'opacity-0'
                    }`}
                style={{ transition: 'opacity 0.3s ease' }}
            >
                <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md transition-transform transform-gpu scale-100">
                    <div className="flex itmes-center justify-between">
                        <h2 className="text-xl font-semibold mb-6 text-center">Forgot Password</h2>
                        <IoCloseOutline size={25} onClick={onClose} cursor="pointer" />
                    </div>
                    <p className="mb-4 text-gray-800 text-sm text-center">
                        Enter your email address and we'll send you a link to reset your password.
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-6">
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
                                            type="email"
                                            placeholder="sushilpundkar@gmail.com"
                                            className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-800 placeholder-gray-400 text-lg ${errors.email ? 'border-red-500' : ''}`}
                                            {...field}
                                        />
                                    </div>
                                )}
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 focus:outline-none"
                        >
                            Send Reset Link
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordModal;
