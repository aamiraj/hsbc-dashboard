import { Poppins } from "next/font/google";
import "../globals.css";
import HeaderNavBar from "./components/HeaderNavBar";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "HSBC",
  description: "HSBC",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className} style={{maxWidth: "1440px"}}>
        <HeaderNavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
