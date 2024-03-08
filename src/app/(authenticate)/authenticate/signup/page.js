"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Signup = () => {
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
            // router.push("/");
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        setError("Your password did not match.");
      }
    }
  };
  return (
    <div className="w-1/3 h-screen mx-auto flex items-center justify-center">
      <form onSubmit={handleSubmit} className="border rounded-lg p-4 shadow-lg">
        <div className={"container"}>
          <h1 className="text-xl text-center font-bold">Sign Up</h1>
          <p className="text-lg text-center font-semibold">
            Please fill in this form to create an account.
          </p>
          <hr className={"hr"} />
          {!!error ? (
            <p className=" text-red-500 text-center px-2 py-1 my-4 rounded-lg">
              {error}
            </p>
          ) : (
            <p></p>
          )}

          <label htmlFor="fullname">
            <b>Full Name</b>
          </label>
          <input
            onChange={handleChange}
            className={"input_type_text"}
            type="text"
            placeholder="Enter Your Name"
            name="fullname"
            required
          />

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

          <label htmlFor="psw_repeat">
            <b>Repeat Password</b>
          </label>
          <input
            onChange={handleChange}
            className={"input_type_password"}
            type="password"
            placeholder="Repeat Password"
            name="psw_repeat"
            required
          />

          <p>
            By creating an account you agree to our{" "}
            <a href="#" style={{ color: "dodgerblue" }}>
              Terms & Privacy
            </a>
            .
          </p>

          <div className={"clearfix"}>
            <button type="submit" className={`button`}>
              Sign Up
            </button>
          </div>
        </div>
        <Link href={"/authenticate/login"} className="px-8 underline">
          Already have an accunt? Please go to log in.
        </Link>
      </form>
    </div>
  );
};

export default Signup;
