"use client";

import React from "react";
import { PiUserCircle } from "react-icons/pi";
import { iconSize } from "../sections/HeaderNavBar";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

const ProfileMenus = () => {
  const { data: session } = useSession();
  
  const handleOpenMenus = () => {
    const profileMenus = document.getElementById("profile-menus");
    // console.log(profileMenus.style.display)
    profileMenus.style.display === "none"
      ? (profileMenus.style.display = "block")
      : (profileMenus.style.display = "none");
  };
  return (
    <div className="relative">
      {session?.user?.image ? (
        <button
          type="button"
          onClick={handleOpenMenus}
          className="cursor-pointer"
        >
          <Image
            src={session?.user?.image}
            width={32}
            height={32}
            alt={session?.user?.name}
          />
        </button>
      ) : (
        <button
          type="button"
          onClick={handleOpenMenus}
          className="cursor-pointer"
        >
          <PiUserCircle style={iconSize} />
        </button>
      )}
      <div
        id="profile-menus"
        className="bg-white w-48 p-2 text-sm absolute top-16 right-0"
        style={{ display: "none" }}
      >
        <p className="p-2 my-2 bg-red-500 text-white rounded-lg font-bold text-center">
          {session?.user?.name}
        </p>
        <button
          onClick={() => signOut()}
          type="button"
          className="block w-full p-2 my-2 text-center rounded-lg  hover:bg-slate-200"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default ProfileMenus;
