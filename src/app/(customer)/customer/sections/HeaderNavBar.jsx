import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiNewspaperLight } from "react-icons/pi";
import { PiNewspaperClippingLight } from "react-icons/pi";
import { PiLineSegmentsLight } from "react-icons/pi";
import { PiMonitorLight } from "react-icons/pi";
import { PiBell } from "react-icons/pi";
import { PiEnvelopeSimpleLight } from "react-icons/pi";
import { PiMoney } from "react-icons/pi";
import { PiListBullets } from "react-icons/pi";
import { PiCurrencyGbpLight } from "react-icons/pi";
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
    link: "/customer/#",
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
        <div>
          <Link
            href="/customer"
            className="font-bold flex items-center justify-center gap-2"
          >
            <PiNewspaperLight style={iconSize} />
            News
          </Link>
        </div>
        <div>
          <Link
            href="/customer/accounts"
            className="font-bold flex items-center justify-center gap-2"
          >
            <PiNewspaperClippingLight style={iconSize} />
            Accounts
          </Link>
        </div>
        <div className="dropdown">
          <Link
            href="/customer/investments"
            className="font-bold flex items-center justify-center gap-2"
          >
            <PiLineSegmentsLight style={iconSize} />
            Investments
          </Link>
          <div className="dropdown-content">
            <Link
              href="/customer/investments"
              className="font-bold flex items-center justify-around gap-1 pe-2 py-4"
            >
              <PiMoney style={iconSize} />
              List Of Invest
            </Link>
            <Link
              href="/customer/investments/invest-history"
              className="font-bold flex items-center justify-around gap-1 pe-2 py-4"
            >
              <PiListBullets style={iconSize} />
              Invest History
            </Link>
            <Link
              href="/customer/investments/current-requests"
              className="font-bold flex items-center justify-around gap-1 pe-2 py-4"
            >
              <PiCurrencyGbpLight style={iconSize} />
              Current Requests
            </Link>
          </div>
        </div>
        <div className="dropdown">
          <Link
            href="/customer/stock-exchange"
            className="font-bold flex items-center justify-center gap-2"
          >
            <PiMonitorLight style={iconSize} />
            Stock Exchange
          </Link>
          <div className="dropdown-content">
            <Link
              href="/customer/stock-exchange/historical"
              className="font-bold block ps-2 py-4"
            >
              Historical
            </Link>
            <div className="dropdown-right">
              <Link
                href="/customer/stock-exchange/action"
                className="font-bold block ps-2 py-4"
              >
                Action
              </Link>
              <div className="dropdown-content-right">
                <Link
                  href="/customer/stock-exchange/market"
                  className="font-bold block ps-2 py-4"
                >
                  Market
                </Link>

                <Link
                  href="/customer/stock-exchange/cryptocurrency"
                  className="font-bold block ps-2 py-4"
                >
                  Cryptocurrency
                </Link>
              </div>
            </div>
            <Link
              href="/customer/stock-exchange/cryptocurrency"
              className="font-bold block ps-2 py-4"
            >
              Cryptocurrency
            </Link>
            <Link
              href="/customer/stock-exchange/precious-metal"
              className="font-bold block ps-2 py-4"
            >
              Precious Metal
            </Link>
            <Link
              href="/customer/stock-exchange/indexes"
              className="font-bold block ps-2 py-4"
            >
              Indexes
            </Link>
          </div>
        </div>
        {/* {headerMenus.map((menu, i) => (
          <div key={i}>
            <Link
              href={menu.link}
              className="font-bold flex items-center justify-center gap-2"
            >
              {menu.icon}
              {menu.name}
            </Link>
          </div>
        ))} */}
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
