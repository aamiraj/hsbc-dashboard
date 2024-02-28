import styles from "./IconMenus.module.css";
import RightAngle from "../Icons/RightAngle";
import Link from "next/link";

const IconMenus = ({ text, icon, link }) => {
  return (
    <Link href={link} className={styles.menu_container}>
      <div className={`${styles.icon_menus}`}>
        <span>{icon}</span>
        <span className="text-sm font-bold" style={{color: "#595959"}}>{text}</span>
      </div>
      <div>
        <RightAngle w={24} h={24} c={'#595959'}/>
      </div>
    </Link>
  );
};

export default IconMenus;
