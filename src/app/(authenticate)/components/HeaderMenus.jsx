import React from "react";
import { MdDashboard } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { HiDuplicate } from "react-icons/hi";
import { FaCalendar } from "react-icons/fa";
import Link from "next/link";

const iconSize = {
  width: "20px",
  height: "20px",
};

const menus = [
  {
    title: "Dashboard",
    icon: <MdDashboard style={iconSize} />,
    link: "/"
  },
  {
    title: "Profile",
    icon: <FaUserCircle style={iconSize} />,
    link: "/"
  },
  {
    title: "Sign Up",
    icon: <HiDuplicate style={iconSize} />,
    link: "/signup"
  },
  {
    title: "Sign In",
    icon: <FaCalendar style={iconSize} />,
    link: "/"
  },
];

const HeaderMenus = () => {
  return (
    <div className="flex items-center gap-4 justify-between px-12 py-8">
      <p className="text-white font-bold text-4xl">HSBC</p>
      <div>
        <ul className="flex items-center justify-evenly gap-4">
          {menus.slice(-2).map(({ title, icon, link }, i) => (
            <li key={i}>
              <Link href={link}>
                <p className="flex items-center gap-2 text-white">
                  {icon}
                  <span>{title}</span>
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* <div>
        <button
          type="button"
          className="bg-white text-black px-4 py-2 rounded-full"
        >
          Free Download
        </button>
      </div> */}
    </div>
  );
};

export default HeaderMenus;
