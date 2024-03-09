import { Poppins } from "next/font/google";
import "../../globals.css";
import SideMenu from "./sections/SideMenu/SideMenu";
import HeaderMenu from "./sections/HeaderMenu/HeaderMenu";
import AuthProvider from "../../../components/AuthProvider/AuthProvider";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Dashboard - HSBC - Admin",
  description: "HSBC",
};

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AuthProvider>
          <main className="flex">
            <SideMenu />
            <section className="bg-[#FAFBFF] w-full">
              <HeaderMenu />
              {children}
            </section>
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
