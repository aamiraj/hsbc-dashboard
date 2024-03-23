import { Poppins } from "next/font/google";
import Sidebar from "./_components/Sidebar.jsx";
import TopBar from "./_components/TopBar.jsx";
import SendMessage from "./_components/SendMessage.jsx";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Profile - HSBC",
  description: "HSBC",
};

export default function ProfileLayout({ children }) {
  return (
    <section className={poppins.className}>
      <TopBar />
      <div className="flex bg-white rounded-md w-[1131px] mx-auto p-8">
        <div className="w-[270px]">
          <Sidebar />
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
