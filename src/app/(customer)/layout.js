import { Poppins } from "next/font/google";
import "../globals.css";
import HeaderNavBar from "./sections/HeaderNavBar";
import Footer from "./sections/Footer";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "HSBC",
  description: "HSBC",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-customer-screen`}
        style={{ maxWidth: "1440px", margin: "auto" }}
      >
        <HeaderNavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
