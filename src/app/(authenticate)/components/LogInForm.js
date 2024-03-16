"use client";

import Link from "next/link";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { PiEye } from "react-icons/pi";
import { PiEyeSlash } from "react-icons/pi";
import Feedback from "../../../components/Feedback/Feedback";

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
          setError(
            "Invalid email/password or inactive user. Put correct email/password and try again later."
          );
          return;
        }

        router.replace("/authorize");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const visiblePassword = () => {
    const x = document.getElementById("password");
    const eye = document.getElementById("eye");
    const eyeslash = document.getElementById("eyeslash");

    if (x.type === "password") {
      x.type = "text";
      eye.style.display = "block";
      eyeslash.style.display = "none";
      console.log("visible");
    } else {
      x.type = "password";
      eye.style.display = "none";
      eyeslash.style.display = "block";
      console.log("invisible");
    }
  };

  const handleFeedBackClose = () => {
    setError("");
  };
  return (
    <div className="bg-[#F0F2F5] rounded-l-lg p-4">
      <p className="py-4 text-end">
        Don't have an account?{" "}
        <Link href={"/signup"} className="text-[#20DC49]">
          Sign up!
        </Link>
      </p>
      <div>
        <h1 className="text-4xl text-center font-bold py-2">Welcome Back</h1>
        <p className="text-sm text-center py-2">Login into your account.</p>
        {/* <div className="flex items-center justify-center gap-4 my-4">
          <button
            type="button"
            className="bg-white px-4 py-2 border rounded border-[#20DC49] flex items-center gap-2"
          >
            <FcGoogle />
            Google
          </button>
          <button
            type="button"
            className="bg-white px-4 py-2 border rounded flex items-center gap-2"
          >
            <FaFacebook style={{ color: "#3B5998" }} />
            Facebook
          </button>
        </div>
        <div className="divider">Or continue with</div> */}
        <form onSubmit={handleSubmit} className="w-[70%] mx-auto">
          <div className={"container"}>
            {error ? (
              <Feedback
                id="log-in-feedback"
                title={"Invalid Credentials"}
                messages={[
                  "Put correct email and password.",
                  "In case you are signing in for the first time, please check your email inbox and click the provided link to activate your account.",
                ]}
                handleClose={handleFeedBackClose}
              />
            ) : (
              <p></p>
            )}

            <input
              onChange={handleChange}
              className={"input_type_text"}
              type="email"
              placeholder="Email"
              name="email"
              required
            />

            <div className="bg-white flex items-center justify-center gap-0 rounded-lg">
              <input
                onChange={handleChange}
                className={"input_type_password"}
                type="password"
                placeholder="Password"
                name="psw"
                id="password"
                required
              />
              <button type="button" onClick={visiblePassword} className="p-4">
                <PiEye
                  id="eye"
                  style={{ display: "none", width: "16px", height: "16px" }}
                />
                <PiEyeSlash
                  id="eyeslash"
                  style={{ display: "block", width: "16px", height: "16px" }}
                />
              </button>
            </div>
            {/* furthur implement forget password link  */}
            <div className="flex items-center gap-4 justify-between my-4">
              <div className="flex items-center gap-3">
                <label className="switch">
                  <input type="checkbox" defaultChecked={false} />
                  <span className="slider round"></span>
                </label>
                <span>Remember Me</span>
              </div>
              <Link href={"/"} className="text-red-500">
                Recover Password
              </Link>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 my-4 text-black border-2 border-black rounded-lg bg-transparent hover:text-white hover:bg-[#20dc49] hover:border-[#20dc49]"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogInForm;
