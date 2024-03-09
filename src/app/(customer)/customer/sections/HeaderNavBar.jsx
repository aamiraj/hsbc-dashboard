import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiNewspaperLight } from "react-icons/pi";
import { PiNewspaperClippingLight } from "react-icons/pi";
import { PiLineSegmentsLight } from "react-icons/pi";
import { PiMonitorLight } from "react-icons/pi";
import { PiBell } from "react-icons/pi";
import { PiEnvelopeSimpleLight } from "react-icons/pi";
import ProfileMenus from "../components/ProfileMenus";

export const iconSize = {
  width: "24px",
  height: "24px",
};

const headerMenus = [
  {
    name: "News",
    link: "/customer",
    icon: <PiNewspaperLight style={iconSize} />,
  },
  {
    name: "Accounts",
    link: "/customer/accounts/situation",
    icon: <PiNewspaperClippingLight style={iconSize} />,
  },
  {
    name: "Investments",
    link: "/customer/investments",
    icon: <PiLineSegmentsLight style={iconSize} />,
  },
  {
    name: "Stock Exchange",
    link: "/customer/stock-exchange",
    icon: <PiMonitorLight style={iconSize} />,
  },
];

const HeaderNavBar = () => {
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
        <ProfileMenus />
      </div>
    </div>
  );
};

export default HeaderNavBar;
