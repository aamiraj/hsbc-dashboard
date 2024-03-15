import { NextResponse } from "next/server";
import ActivateToken from "../../../../../models/activateToken";
import User from "../../../../../models/user";
import { redirect } from "next/navigation";

export async function GET(req, { params }) {
  const token = params.token;

  try {
    const foundtoken = await ActivateToken.findOne({ token });

    // check if the token exists
    if (!foundtoken?.token) {
      return NextResponse.json({ message: "Invalid token." });
    }

    // check if the token has already beeen activated
    if (foundtoken?.activateAt) {
      return NextResponse.json({ message: "Token has already been used." });
    }

    // check if the token has been expired
    if (isExpired(foundtoken?.createdAt)) {
      return NextResponse.json({ message: "Token expired" });
    }

    // set the user active true when all validation passes
    // do not use save, because we are using 'pre' middlware to hash password
    await User.updateOne({ _id: foundtoken.userId }, { active: true });

    // set the token activateAt at now date
    foundtoken.activateAt = new Date();
    await foundtoken.save();

    // return NextResponse.json({
    //   message: "User has been activated successfully.",
    // });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error", error: error },
      { status: 500 }
    );
  }
  redirect("/");
}

const isExpired = (date) => {
  const tokenCreatedAt = new Date(date).getTime();
  const now = new Date().getTime();
  const tewntyFourHours = 24 * 60 * 60 * 1000;

  return now - tewntyFourHours > tokenCreatedAt;
};
