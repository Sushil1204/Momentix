"use client";
import Image from "next/image";
import Sidebar from "./components/Sidebar";
import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";
import momentix_transparent_logo from "./assets/momentix_transparent_logo.svg";
import Link from "next/link";
import { MobileNavlinks, Navlinks } from "./constants";
import { IoIosNotifications } from "react-icons/io";

export default function Home() {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <div className="flex bg-grey-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out">
      <div className="hidden md:flex h-screen flex-initial">
        <Sidebar />
      </div>
      {/* Header for small and medium devices */}
      <div className="md:hidden flex flex-row w-full shadow-md bg-white fixed top-0 left-0 right-0 z-10 p-2 justify-between items-center">
        <Link href="/" className="flex px-5 gap-2 w-190 items-center">
          <Image
            src={momentix_transparent_logo}
            alt="logo"
            width={160}
            height={100}
            className="object-contain"
          />
        </Link>
        <Link href="/profile">
          <IoIosNotifications size={30} />
        </Link>
      </div>
      {/* Main content, with margin for the header */}
      <div className="flex-1 mt-16 md:mt-0">feed</div>
      {/* Bottom Navigation Bar for small and medium devices */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white shadow-lg py-4 flex justify-around items-center border-t">
        {MobileNavlinks?.map((nav, index) => (
          <Link href="/" className="flex flex-col items-center">
            {nav?.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}
