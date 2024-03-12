import SignUpForm from "../components/SignUpForm";
import authOptions from "../../api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

const Signup = async () => {
  const session = await getServerSession(authOptions);

  if (session?.user?.role === "customer") {
    redirect("/customer");
  } else if (session?.user?.role === "admin") {
    redirect("/dashboard");
  }

  return <SignUpForm />;
};

export default Signup;
