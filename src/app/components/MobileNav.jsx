import Image from "next/image";
import { MobileNavlinks } from "../constants";
import { IoIosNotifications } from "react-icons/io";
import momentix_transparent_logo from "../assets/momentix_transparent_logo.svg";
import Link from "next/link";

const MobileNav = () => {
    return (
        <>
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
            <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white shadow-lg py-1 flex justify-around items-center border-t">
                {MobileNavlinks?.map((nav, index) => (
                    <Link key={index} href="/" className="flex flex-col items-center">
                        {nav?.icon}
                    </Link>
                ))}
            </div>
        </>
    )
}

export default MobileNav