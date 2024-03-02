import Image from "next/image";
import styles from "./SideMenu.module.css";
import Link from "next/link";
import KeySquare from "@/components/Icons/KeySquare";
import ThreeDSquare from "@/components/Icons/ThreeDSquare";
import UserProfile from "@/components/Icons/UserProfile";
import WalletMoney from "@/components/Icons/WalletMoney";
import Discount from "@/components/Icons/Discount";
import ShoppingBag from "@/components/Icons/ShoppingBag";
import ChatDot from "@/components/Icons/ChatDot";
import CycleUser from "@/components/Icons/CycleUser";
import Briefcase from "@/components/Icons/Briefcase";
import UsersTwo from "@/components/Icons/UsersTwo";
import AddProduct from "@/components/Icons/AddProduct";
import Chat from "@/components/Icons/Chat";
import Eye from "@/components/Icons/Eye";
import ThreeUsers from "@/components/Icons/ThreeUsers";
import ArrowDown from "@/components/Icons/ArrowDown";
import IconMenus from "../../components/IconMenus/IconMenus";
import SecondIconMenus from "../../components/SecondIconMenus/SecondIconMenus";

const User = {
  displayName: "Veronica Sislia",
  profilePic: "/assets/dummyPic.png",
};

const iconMenus = [
  {
    text: "Dashboard",
    icon: <KeySquare w={24} h={24} />,
    link: "/dashboard",
  },
  {
    text: "Client/Prospect",
    icon: <ThreeDSquare w={24} h={24} />,
    link: "/dashboard/client_prospect",
  },
  {
    text: "Get Over Yourself",
    icon: <UserProfile w={24} h={24} />,
    link: "/dashboard",
  },
  {
    text: "Collection",
    icon: <WalletMoney w={24} h={24} />,
    link: "/dashboard",
  },
  {
    text: "Paiment",
    icon: <Discount w={24} h={24} />,
    link: "/dashboard",
  },
  {
    text: "Transaction",
    icon: <ShoppingBag w={24} h={24} />,
    link: "/dashboard",
  },
  {
    text: "Contract",
    icon: <CycleUser w={24} h={24} />,
    link: "/dashboard",
  },
  {
    text: "Current Conversation",
    icon: <ChatDot w={24} h={24} />,
    link: "/dashboard",
  },
];

const secondIconMenus = [
  {
    text: "Invitation Of Leads",
    icon: <Briefcase w={24} h={24} />,
    link: "/dashboard",
  },
  {
    text: "Collaboration",
    icon: <UsersTwo w={24} h={24} />,
    link: "/dashboard",
  },
  {
    text: "Product",
    icon: <AddProduct w={24} h={24} />,
    link: "/dashboard",
  },
  {
    text: "Negosiation",
    icon: <Chat w={24} h={24} />,
    link: "/dashboard",
  },
  {
    text: "Personalisation",
    icon: <Eye w={24} h={24} />,
    link: "/dashboard",
  },
  {
    text: "Company",
    icon: <ThreeUsers w={24} h={24} />,
    link: "/dashboard",
  },
];

const SideMenu = () => {
  return (
    <section className={`${styles.bg_sidemenu} ${styles.max_w_sidemenu}`}>
      <div className={styles.logo_hsbc}>
        <Link href={"/"}>
          <Image src={'/assets/logo-hsbc.png'} alt="HSBC Logo" width={103} height={28} />
        </Link>
      </div>
      <div className="w-full">
        <ul>
          {iconMenus.map(({ text, icon, link }) => (
            <li key={text} className="mb-2">
              <IconMenus text={text} icon={icon} link={link} />
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full py-4 my-8 bg-white rounded-lg">
        <ul>
          {secondIconMenus.map(({ text, icon, link }) => (
            <li key={text} className="mb-2">
              <SecondIconMenus text={text} icon={icon} link={link} />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center items-center gap-4 bg-white py-2 px-4 my-4 rounded-[32px]">
        <Image
          src={User.profilePic}
          alt={User.displayName}
          width={40}
          height={40}
        />
        <span>{User.displayName}</span>
        <ArrowDown w={24} h={24} />
      </div>
    </section>
  );
};

export default SideMenu;
