import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiNewspaperLight } from "react-icons/pi";
import { PiNewspaperClippingLight } from "react-icons/pi";
import { PiLineSegmentsLight } from "react-icons/pi";
import { PiMonitorLight } from "react-icons/pi";
import { PiBell } from "react-icons/pi";
import { PiEnvelopeSimpleLight } from "react-icons/pi";
import { PiUserCircle } from "react-icons/pi";

export const iconSize = {
  width: "24px",
  height: "24px",
};

const headerMenus = [
  {
    name: "News",
    link: "/",
    icon: <PiNewspaperLight style={iconSize} />,
  },
  {
    name: "Accounts",
    link: "/accounts",
    icon: <PiNewspaperClippingLight style={iconSize} />,
  },
  {
    name: "Investments",
    link: "/investments",
    icon: <PiLineSegmentsLight style={iconSize} />,
  },
  {
    name: "Stock Exchange",
    link: "/stock-exchange",
    icon: <PiMonitorLight style={iconSize} />,
  },
];

const HeaderNavBar = () => {
  const user = {
    displayName: "",
    email: "",
    profilePic: "/assets/dummyPic.png",
  };
  return (
    <div className="bg-white px-24 py-8 flex items-center justify-between gap-4">
      <div>
        <Image
          src={"/assets/logo-hsbc.png"}
          width={100}
          height={28}
          alt="hsbc logo"
        />
      </div>
      <div className="flex items-center justify-evenly gap-10">
        {headerMenus.map((menu, i) => (
          <div key={i}>
            <Link
              href={menu.link}
              className="font-bold flex items-center justify-center gap-2"
            >
              {menu.icon}
              {menu.name}
            </Link>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-4">
        <PiBell style={iconSize} />
        <PiEnvelopeSimpleLight style={iconSize} />
        {user.profilePic ? (
          <Image
            src={user.profilePic}
            width={32}
            height={32}
            alt={user.displayName}
          />
        ) : (
          <PiUserCircle style={iconSize} />
        )}
      </div>
    </div>
  );
};

export default HeaderNavBar;
