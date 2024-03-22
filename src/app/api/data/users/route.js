import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodbConnect";
import User from "../../../../models/user";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";

export async function POST(req) {
  const data = await req.json();

  const user = {
    surname: data?.surname,
    firstname: data?.firstname,
    ipAddress: data?.ipAddress,
    status: data?.status,
    email: data?.email,
    mainAddress: data?.mainAddress,
    phone: data?.phone,
    birthdate: data?.birthdate,
    password: data?.newPassword,
  };

  try {
    await connectMongoDB();

    const hashedPassword = await bcrypt.hash(user.password, 12);
    user["password"] = hashedPassword;
    //console.log(user);
    await User.create(user);
    // revalidatePath(`${process.env.PROD_URL}dashboard/get-over-yourself`);
    // redirect(`${process.env.PROD_URL}dashboard/get-over-yourself`);
    return NextResponse.json(
      { message: "Successfully added a user." },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to add the user due to server error." },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  try {
    await connectMongoDB();

    const allUsers = await User.find(
      {},
      "surname firstname ipAddress status email mainAddress phone birthdate workdays"
    );

    return NextResponse.json(
      { message: "Successfully fetched users.", data:allUsers },
      { status: 201 }
    );
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { message: "Failed to fetch users due to server error." },
      { status: 500 }
    );
  }
}
