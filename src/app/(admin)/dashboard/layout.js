import { Poppins } from "next/font/google";
import "../../globals.css";
import SideMenu from "./sections/SideMenu/SideMenu";
import HeaderMenu from "./sections/HeaderMenu/HeaderMenu";
import AuthProvider from "../../../components/AuthProvider/AuthProvider";
import { Toaster } from "react-hot-toast";

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
          <main className="flex scroll-smooth max-w-screen-2xl">
            <SideMenu id={"sidemenu"} />
            <section id="main" className="bg-[#FAFBFF] w-full">
              <HeaderMenu />
              {children}
            </section>
          </main>
        </AuthProvider>
        <div>
          <Toaster position="bottom-center" reverseOrder={false} />
        </div>
      </body>
    </html>
  );
}
