"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { PiEye } from "react-icons/pi";
import { PiEyeSlash } from "react-icons/pi";

const SignUpForm = () => {
  const router = useRouter();
  const [inputs, setInputs] = useState({
    fullname: "",
    email: "",
    psw: "",
    psw_repeat: "",
  });
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // handling the fetch request to create a user
    if (
      !inputs["fullname"] ||
      !inputs["email"] ||
      !inputs["psw"] ||
      !inputs["psw_repeat"]
    ) {
      setError("All fields must be filled up.");
    } else {
      setError("");
      if (inputs["psw"] === inputs["psw_repeat"]) {
        // console.log(inputs);
        try {
          // check if the user with this email exists or not
          const resUserExists = await fetch("/api/authenticate/user-exists", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: inputs.email }),
          });

          const { message, user } = await resUserExists.json();

          if (user) {
            setError(message);
            return;
          }

          //  if user with the given email is not found then create this user
          const res = await fetch("/api/authenticate/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(inputs),
          });

          if (!res.ok) {
            const { message } = await res.json();
            alert(message);
          } else {
            const { message } = await res.json();
            alert(message);
            event.target.reset();
            router.push("/customer");
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        setError("Your password did not match.");
      }
    }
  };

  const visiblePassword = () => {
    const x = document.getElementById("password");
    const x_repeat = document.getElementById("repeatpassword");
    const eye = document.getElementById("eye");
    const eyeslash = document.getElementById("eyeslash");

    if (x.type === "password") {
      x.type = "text";
      x_repeat.type = "text";
      eye.style.display = "block";
      eyeslash.style.display = "none";
      console.log("visible");
    } else {
      x.type = "password";
      x_repeat.type = "password";
      eye.style.display = "none";
      eyeslash.style.display = "block";
      console.log("invisible");
    }
  };
  return (
    <div className="bg-[#F0F2F5] rounded-l-lg p-4">
      <p className="py-4 text-end">
        Already have an account?{" "}
        <Link href={"/"} className="text-[#20DC49]">
          Log In!
        </Link>
      </p>
      <form onSubmit={handleSubmit} className="max-w-[70%] mx-auto p-4">
        <div>
          <h1 className="text-4xl text-center font-bold py-2">Sign Up</h1>
          <p className="text-sm text-center py-2">
            Please fill in this form to create an account.
          </p>
          {!!error ? (
            <p className=" text-red-500 text-center px-2 py-1 my-2 rounded-lg">
              {error}
            </p>
          ) : (
            <p></p>
          )}

          <input
            onChange={handleChange}
            className={"input_type_text"}
            type="text"
            placeholder="Your Name"
            name="fullname"
            required
          />

          <input
            onChange={handleChange}
            className={"input_type_text"}
            type="email"
            placeholder="Email"
            name="email"
            required
          />

          <div className="bg-white flex items-center justify-center gap-0 rounded-lg my-2">
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

          <input
            onChange={handleChange}
            className={"input_type_password my-2"}
            type="password"
            placeholder="Repeat Password"
            name="psw_repeat"
            id="repeatpassword"
            required
          />

          <button
            type="submit"
            className="bg-[#367AFF] text-white font-bold px-5 py-4 w-full rounded-lg my-2"
          >
            Sign Up
          </button>
          <div className="divider">Or</div>
        </div>
        <button
          type="button"
          className="bg-white w-full px-4 py-2 border rounded flex items-center justify-center font-bold gap-2 my-2"
        >
          Continue with Google
          <FcGoogle />
        </button>
        <Link href={"/"} className="px-8 my-2">
          Already have an accunt?{" "}
          <span className="underline text-[#367AFF]">Log In</span>
        </Link>
      </form>
    </div>
  );
};

export default SignUpForm;
