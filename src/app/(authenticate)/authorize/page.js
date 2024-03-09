import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const Authorize = async () => {
  const session = await getServerSession(authOptions);

  if (session?.user?.role === "customer") {
    redirect("/customer");
  } else if (session?.user?.role === "admin") {
    redirect("/dashboard");
  }
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <p className="font-bolf text-xl text-red-900">You are not authorized to this site.</p>
    </div>
  );
};

export default Authorize;
