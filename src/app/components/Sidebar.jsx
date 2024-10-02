import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import momentix_transparent_logo from '../assets/momentix_transparent_logo.svg'
import { Navlinks } from '../constants';



const Sidebar = () => {
    const isNotActiveStyle =
        "flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize";
    const isActiveStyle =
        "flex items-center px-5 gap-3 font-bold text-xl transition-all duration-200 ease-in-out capitalize";

    const userAvatar = 'https://ui-avatars.com/api/?name=Sushil+Pundkar'
    return (
        <div className="flex flex-col justify-between h-full min-w-210">
            <div className="flex flex-col space-y-10">
                <Link href='/' className='flex px-5 gap-2 my-6 pt-1 w-190 items-center'>
                    <Image src={momentix_transparent_logo} alt="logo" width={210} height={150} />
                </Link>
                <div className="flex flex-col  m-5 space-y-8">
                    {Navlinks?.map((nav, index) =>
                        <Link href={nav?.href} className={
                            isActiveStyle
                        } key={index}>
                            {nav?.icon}
                            {nav?.title}
                        </Link>
                    )}
                </div>

            </div>
            <div className='m-5 flex items-center gap-x-4'>
                <Image src={userAvatar} width={50} height={50} className='rounded-full' />
                <div>
                    <p className='font-bold text-lg text-gray-900'>Sushil Pundkar</p>
                    <p className='text-sm text-gray-500'>@Sushil_2001</p>
                </div>
            </div>

        </div>
    )
}

export default Sidebar