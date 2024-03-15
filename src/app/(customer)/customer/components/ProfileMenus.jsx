"use client";

import React from "react";
import { PiUserCircle } from "react-icons/pi";
import { iconSize } from "../sections/HeaderNavBar";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const ProfileMenus = () => {
  const { data: session } = useSession();
  // console.log(session)
  const handleOpenMenus = () => {
    const profileMenus = document.getElementById("profile-menus");
    // console.log(profileMenus.style.display)
    profileMenus.style.display === "none"
      ? (profileMenus.style.display = "block")
      : (profileMenus.style.display = "none");
  };

  // const handleAccordion = () => {
  //   const panel = document.getElementById("panel");
  //   if (panel.style.maxHeight) {
  //     panel.style.maxHeight = null;
  //   } else {
  //     panel.style.maxHeight = panel.scrollHeight + "px";
  //   }
  // };

  return (
    <div className="relative flex items-center justify-center">
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
        className="bg-white w-48 p-2 text-sm absolute top-12 right-0"
        style={{ display: "none" }}
      >
        <p className="p-2 my-2 bg-red-500 text-white rounded-lg font-bold text-center">
          <Link href="/customer/profile/personal-data">
            {session?.user?.name}
          </Link>
        </p>
        <p className="p-2 my-2 rounded-lg font-bold text-center hover:bg-slate-200 ">
          Personal Information
        </p>
        {/* <button
          type="button"
          onClick={handleAccordion}
          className="w-full p-2 my-2 rounded-lg font-bold text-center hover:bg-slate-200"
        >
          Messaging
        </button>
        <div id="panel" className="text-xs panel">
          <div className="p-1 border border-black">
            <p className="py-2">Write message</p>
            <p className="py-2">Current conversation</p>
            <p className="py-2">Conversation history</p>
          </div>
        </div> */}
        <p className="p-2 my-2 rounded-lg font-bold text-center hover:bg-slate-200">
          My Favourites
        </p>
        <button
          onClick={() => signOut()}
          type="button"
          className="block w-full p-2 my-2 text-center font-bold rounded-lg hover:bg-slate-200"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default ProfileMenus;
