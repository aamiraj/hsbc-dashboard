"use client";

import Link from "next/link";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LogInForm = () => {
  const router = useRouter();
  const [inputs, setInputs] = useState({
    email: "",
    psw: "",
  });
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!inputs["psw"] || !inputs["email"]) {
      setError("Please fill up all the fields.");
    } else {
      setError("");
      try {
        const res = await signIn("credentials", {
          email: inputs.email,
          password: inputs.psw,
          redirect: false,
        });

        if (!res.ok) {
          console.log(res);
          setError(res.error);
          return;
        }
        
        router.replace("/authorize");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="w-1/3 h-screen mx-auto flex items-center justify-center">
      <form onSubmit={handleSubmit} className="border rounded-lg p-4 shadow-lg">
        <div className={"container"}>
          <h1 className="text-xl text-center font-bold">Log In</h1>
          <p className="text-lg text-center font-semibold">
            Please fill in this form to log in your account.
          </p>
          <hr className={"hr"} />
          {error ? <p className="text-red-500 p-2 my-2">{error}</p> : <p></p>}

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            onChange={handleChange}
            className={"input_type_text"}
            type="email"
            placeholder="Enter Email"
            name="email"
            required
          />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            onChange={handleChange}
            className={"input_type_password"}
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />

          {/* furthur implement forget password link  */}
          {/* <p>
            By creating an account you agree to our{" "}
            <a href="#" style={{ color: "dodgerblue" }}>
              Terms & Privacy
            </a>
            .
          </p> */}

          <div className={"clearfix"}>
            <button type="submit" className={`button bg-red-400`}>
              Log In
            </button>
          </div>
        </div>
        <Link href={"/signup"} className="px-8 underline">
          Didn't have an account? Please go to sign up.
        </Link>
      </form>
    </div>
  );
};

export default LogInForm;
