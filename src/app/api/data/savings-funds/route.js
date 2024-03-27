import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { connectMongoDB } from "../../../../lib/mongodbConnect";
import SavingsFund from "../../../../models/savingsFund";

export async function POST(req) {
  const data = await req.json();
  // console.log(data);

  const addSavingsFundData = {
    projectTitle: data?.projectTitle,
    projectSubtitle: data?.projectSubtitle,
    projectDesc: data?.projectDesc,
    projectCategory: data?.projectCategory,
    photoURL: data?.photo,
    totalToCollect: data?.totalToCollect,
    alreadyCollected: {
      platform: 0.0,
      excludingPlatform: data?.alreadyCollected,
    },
    status: "Ongoing project",
    participants: { platforms: 0, offPlatform: 0 },
    minimumAccepted: data?.minimumAccepted,
    maximumAccepted: data?.maximumAccepted,
    applicableRate: {
      fromAmount: data?.fromAmount,
      toAmount: data?.toAmount,
      interestRate: data?.interestRate,
      applicablePeriod: data?.applicablePeriod,
      firstDueDate: data?.firstDueDate,
      rateFrequency: data?.rateFrequency,
      release: data?.release,
      method: data?.method,
    },
    display: data?.display === "show",
    popularityTag: {
      mostRecommended: data?.mostRecommended,
      mostPopular: data?.mostPopular,
      newProduct: data?.newProduct,
    },
    confidenceIndex: data?.confidenceIndex,
    endOfSubscription: data?.endOfSubscription
  };

  // console.log(addSavingsFundData)
  try {
    await connectMongoDB();

    await SavingsFund.create(addSavingsFundData);

    revalidatePath("/dashboard/product");
    redirect("/dashboard/product");
    // return NextResponse.json(
    //   { message: "Successfully add savings fund." },
    //   { status: 201 }
    // );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to add savings fund due to server error.",
        error: error,
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectMongoDB();

    const allSavingsFunds = await SavingsFund.find({});
    return NextResponse.json(
      { message: "Fetched data successful.", data: allSavingsFunds },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Server error.", error: error },
      { status: 500 }
    );
  }
}
