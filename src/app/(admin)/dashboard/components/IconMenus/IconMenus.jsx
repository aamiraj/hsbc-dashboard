import RightAngle from "../../../../../components/Icons/RightAngle";
import "./iconMenus.css";
import Link from "next/link";

const IconMenus = ({ text, icon, link, currentPath }) => {
  return (
    <Link
      href={link}
      className={"menu_container"}
      style={link === currentPath ? { backgroundColor: "#39de5d" } : {}}
    >
      <div
        className={"icon_menus"}
        style={link === currentPath ? { color: "#FFFFFF" } : {}}
      >
        <span
          className="bar"
          style={link === currentPath ? { backgroundColor: "#FFFFFF" } : {}}
        ></span>
        <span className={link === currentPath ? "active_icon" : ""}>
          {icon}
        </span>
        <span className="text-sm font-bold">{text}</span>
      </div>
      <div>
        <RightAngle
          w={24}
          h={24}
          c={link === currentPath ? "#FFFFFF" : "#595959"}
        />
      </div>
    </Link>
  );
};

export default IconMenus;
