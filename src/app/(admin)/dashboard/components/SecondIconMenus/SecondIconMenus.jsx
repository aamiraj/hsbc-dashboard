import RightAngle from "@/components/Icons/RightAngle";
import styles from "./SecondIconMenus.module.css";
import Link from "next/link";

const IconMenus = ({ text, icon, link }) => {
  return (
    <Link href={link} className={styles.menu_container}>
      <div className={`${styles.icon_menus}`}>
        <span>{icon}</span>
        <span className="text-sm font-bold">{text}</span>
      </div>
      <div>
        <RightAngle w={24} h={24} c={"#9197B3"} />
      </div>
    </Link>
  );
};

export default IconMenus;