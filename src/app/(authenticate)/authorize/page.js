"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Authorize = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "unauthenticated") {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="font-bolf text-xl text-red-900">
          You are not authorized to this site.
        </p>
      </div>
    );
  } else if (session?.user?.role === "customer" && status === "authenticated") {
    router.push("/customer");
  } else if (session?.user?.role === "admin" && status === "authenticated") {
    router.push("/dashboard");
  }

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <p className="font-bolf text-xl text-red-900">
        Please be patient, You are being authorized to this site.
      </p>
    </div>
  );
};

export default Authorize;
