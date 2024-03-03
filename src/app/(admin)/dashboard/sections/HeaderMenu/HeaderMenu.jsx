"use client";

import AntiClock from "@/components/Icons/AntiClock";
import Bell from "@/components/Icons/Bell";
import Star from "@/components/Icons/Star";
import Sun from "@/components/Icons/Sun";
import Image from "next/image";
import React from "react";
import Searchbox from "@/components/Searchbox/Searchbox";
import SideBar from "@/components/Icons/SideBar";
import { usePathname } from "next/navigation";

const language = {
  country: "UK",
  lang: "EN",
  icon: "/assets/uk.svg",
};

const HeaderMenu = () => {
  const path = usePathname();

  const formatLocation = (path) => {
    const newPath = path.replace(/-/g, " ");
    const pathArray = newPath.split("/");

    let capitalized = [];
    for (let i = 0; i < pathArray.length; i++) {
      capitalized.push(
        pathArray[i].charAt(0).toUpperCase() + pathArray[i].slice(1)
      );
    }
    return capitalized;
  };

  const location = formatLocation(path);

  return (
    <div className="m-4 p-4 flex items-center justify-between border-b border-[#1C1C1C1A]">
      <div className="flex justify-evenly gap-4 items-center">
        <SideBar w={24} h={24} />
        <Star w={24} h={24} />
        <span className="text-[#1C1C1C66]">Dashboard</span>
        <span>/</span>
        {location[2] ? location[2] : "Default"}
      </div>
      <div className="flex items-center justify-evenly gap-4">
        <Searchbox withCommand={true} />
        <div className="flex justify-evenly gap-4 items-center">
          <Sun w={24} h={24} />
          <AntiClock w={24} h={24} />
          <Bell w={24} h={24} />
          <SideBar w={24} h={24} />
        </div>
        <div className="flex justify-evenly gap-4 items-center">
          <span className="font-semibold text-base">{language.lang}</span>
          <div className="bg-[#D3F8D8] rounded-full w-[50px] h-[50px] flex justify-center items-center">
            <Image
              src={language.icon}
              alt={language.country}
              width={36}
              height={36}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
