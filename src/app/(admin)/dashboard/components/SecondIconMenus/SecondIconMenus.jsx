import RightAngle from "@/components/Icons/RightAngle";
import "./iconMenus.css";
import Link from "next/link";

const IconMenus = ({ text, icon, link, currentPath }) => {
 
  return (
    <Link
      href={link}
      className={"second_menu_container"}
      
    >
      <div
        className={`second_icon_menus`}
        style={link === currentPath ? { color: "#0f993e" } : {}}
      >
        <span
          className="bar"
          style={link === currentPath ? { backgroundColor: "#0f993e" } : {}}
        ></span>
        <span className={link === currentPath ? "second_active_icon" : ""}>
          {icon}
        </span>
        <span className="text-sm font-bold">{text}</span>
      </div>
      <div>
        <RightAngle
          w={24}
          h={24}
          c={link === currentPath ? "#0f993e" : "#595959"}
        />
      </div>
    </Link>
  );
};

export default IconMenus;
