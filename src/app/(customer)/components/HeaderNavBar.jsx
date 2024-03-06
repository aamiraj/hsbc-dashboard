import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiNewspaperLight } from "react-icons/pi";
import { PiNewspaperClippingLight } from "react-icons/pi";
import { PiLineSegmentsLight } from "react-icons/pi";
import { PiMonitorLight } from "react-icons/pi";

export const iconSize = {
    width: "24px",
    height: "24px"
}

const headerMenus = [
  {
    name: "News",
    link: "/news",
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
  return (
    <div className="bg-white px-8 py-4">
      <div>
        <Image src={"/assets/logo-hsbc.png"} width={100} height={28} />
      </div>
      <div>
        {headerMenus.map((menu, i) => (
          <div key={i} style={{color: "red"}}>
            {menu.icon}
            <Link href={menu.link}>{menu.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderNavBar;
