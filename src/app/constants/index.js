import { GoHomeFill, GoSearch } from "react-icons/go";
import { IoIosNotifications } from "react-icons/io";
import {
  FaBell,
  FaHome,
  FaPlusCircle,
  FaPlusSquare,
  FaSearch,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import Link from "next/link";

const userAvatar = "https://ui-avatars.com/api/?name=Sushil+Pundkar";

export const Navlinks = [
  {
    title: "Home",
    icon: <FaHome className="h-7 w-7" />,
    href: "/",
  },
  {
    title: "Search",
    icon: <FaSearch className="h-7 w-7" />,
    href: "/search",
  },
  {
    title: "Notification",
    icon: <FaBell className="h-7 w-7" />,
    href: "/notifications",
  },
  {
    title: "Friends",
    icon: <FaUsers className="h-7 w-7" />,
    href: "/friends",
  },
  {
    title: "Create",
    href: "/create",
    icon: <FaPlusCircle className="h-7 w-7" />,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: <FaUser className="h-7 w-7" />,
  },
];

export const MobileNavlinks = [
  {
    icon: <GoHomeFill className="h-7 w-7" />,
    href: "/",
  },
  {
    icon: <GoSearch className="h-7 w-7" />,
    href: "/search",
  },
  {
    icon: <FaPlusSquare className="h-7 w-7" />,
    href: "/create",
  },
  {
    icon: <FaUsers className="h-7 w-7" />,
    href: "/friends",
  },
  {
    icon: (
      <Link href="/profile">
        <img src={userAvatar} alt="logo" className="w-10 h-10 rounded-full" />
      </Link>
    ),
  },
];
