import { Poppins } from "next/font/google";
import Sidebar from "./_components/Sidebar.jsx";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Accounts - HSBC",
  description: "HSBC",
};

export default function AccountLayout({ children }) {
  return (
    <section className={poppins.className}>
      <div className="flex justify-center">
        <div>
          <Sidebar />
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}