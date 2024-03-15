import Link from "next/link";
import React from "react";
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const iconSize = {
  width: "20px",
  height: "20px",
};
const footerMenus = [
  {
    title: "Company",
    link: "/#",
  },
  {
    title: "About Us",
    link: "/#",
  },
  {
    title: "Team",
    link: "/#",
  },
  {
    title: "Blog",
    link: "/#",
  },
  {
    title: "Products",
    link: "/#",
  },
  {
    title: "Pricing",
    link: "/#",
  },
];

const socialIcons = [
  {
    icon: <FaDribbble style={iconSize} />,
    link: "www.dribble.com",
  },
  {
    icon: <FaTwitter style={iconSize} />,
    link: "www.twitter.com",
  },
  {
    icon: <FaInstagram style={iconSize} />,
    link: "www.instagram.com",
  },
  {
    icon: <FaPinterest style={iconSize} />,
    link: "www.pinterest.com",
  },
  {
    icon: <FaGithub style={iconSize} />,
    link: "www.github.com",
  },
];
const FooterMenus = () => {
  return (
    <div className="w-1/3 mx-auto pt-24 pb-8 my-4 text-[#8392AB]">
      {/* <ul className="py-4 flex items-center gap-4 justify-evenly">
        {footerMenus.map(({title, link}, i) => (
          <li key={i}>
            <Link href={link} className="text-sm">{title}</Link>
          </li>
        ))}
      </ul> */}
      <ul className="py-4 flex items-center gap-1 justify-evenly">
        {socialIcons.map(({icon, link}, i) => (
          <li key={i}>
            <Link href={link}>{icon}</Link>
          </li>
        ))}
      </ul>
      <p className="py-4 text-center">Copyright &copy; 2024 by HSBC</p>
    </div>
  );
};

export default FooterMenus;
