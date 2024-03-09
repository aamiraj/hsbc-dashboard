import LogInForm from "./components/LogInForm";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

const Login = async () => {
  const session = await getServerSession(authOptions);

  if (session?.user?.role === "customer") {
    redirect("/customer");
  } else if (session?.user?.role === "admin") {
    redirect("/dashboard");
  }

  return <LogInForm />;
};

export default Login;
