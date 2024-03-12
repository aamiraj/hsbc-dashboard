import SignUpForm from "../components/SignUpForm";
import authOptions from "../../api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import BackFilter from "../components/BackFilter";
import HeaderMenus from "../components/HeaderMenus";
import FooterMenus from "../components/FooterMenus";
import RightSideForm from "../components/RightSideForm";

const Signup = async () => {
  const session = await getServerSession(authOptions);

  if (session?.user?.role === "customer") {
    redirect("/customer");
  } else if (session?.user?.role === "admin") {
    redirect("/dashboard");
  }

  return (
    <div className="relative max-w-[1400px] h-[500px] mx-auto my-4 rounded-lg">
      <BackFilter />
      <HeaderMenus />

      <div className="my-4 w-[60%] mx-auto flex items-center justify-center rounded-lg">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "70% auto",
            gap: 0,
          }}
        >
          <div>
            <SignUpForm />
          </div>
          <RightSideForm />
        </div>
      </div>

      <FooterMenus />
    </div>
  );
};

export default Signup;
