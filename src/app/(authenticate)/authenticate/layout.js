import { Poppins } from "next/font/google";
import "../../globals.css";
import "./authenticate.css";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "HSBC Authenticate",
  description: "HSBC",
};

export default function AuthenticationLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
