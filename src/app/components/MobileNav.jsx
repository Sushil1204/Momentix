import { MobileNavlinks } from "../constants";

import Link from "next/link";

const MobileNav = () => {
    return (
        <>
            {/* Header for small and medium devices */}

            <div className="fixed bottom-0  left-0 right-0 md:hidden bg-white shadow-lg py-1 flex justify-around items-center border-t">
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