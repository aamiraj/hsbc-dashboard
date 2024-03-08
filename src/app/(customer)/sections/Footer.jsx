import Image from "next/image";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { iconSize } from "./HeaderNavBar";
import { FaPhoneAlt } from "react-icons/fa";
import { PiPrinterFill } from "react-icons/pi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

const links = ["ABOUT", "CONTACT US", "HELP", "PRIVACY POLICY", "DISCLAIMER"];

const Footer = () => {
  return (
    <div className="bg-[#0A142F] text-white w-full p-12 py-24 mx-auto">
      <div className="w-[90%] mx-auto py-32 border-y border-white grid grid-cols-2 gap-4">
        <img
          src="/assets/logo_hsbc_white.png"
          alt="HSBC logo"
          width={220}
          height={60}
          quality={1}
        />
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4 text-white">
            <FaLocationDot style={iconSize} />
            <p>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</p>
          </div>
          <div className="flex items-center justify-start gap-24">
            <div className="flex items-center gap-4 text-white">
              <FaPhoneAlt style={iconSize} />
              <p>{"(123) 456-7890"}</p>
            </div>
            <div className="flex items-center gap-4 text-white">
              <PiPrinterFill style={iconSize} />
              <p>{"(123) 456-7890"}</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4 text-white">
              <p>Social Media</p>
              <FaFacebookSquare style={iconSize} />
              <FaTwitter style={iconSize} />
              <FaLinkedinIn style={iconSize} />
              <FaYoutube style={iconSize} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto py-8">
        <div className="flex items-center justify-between">
          <ul className="flex items-center gap-8">
            {links.map((link, i) => (
              <li key={i}>
                <Link href="/#">{link}</Link>
              </li>
            ))}
          </ul>
          <div>
            <p>Copyright &copy; 2024 &#x2022; HSBC</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
