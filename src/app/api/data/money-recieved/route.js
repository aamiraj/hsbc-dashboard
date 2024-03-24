import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodbConnect";
import MoneyRecieved from "../../../../models/moneyRecieved";
import Client from "../../../../models/client";

export async function POST(req) {
  try {
    const data = await req.json();
    //   console.log(data);

    await connectMongoDB();

    const client = await Client.findOne(
      { email: data?.email },
      "fullname email attribution"
    );

    const moneyRecievedData = {
      amount: data?.amount,
      planTitle: data?.planTitle,
      bonuses: data?.bonuses,
      planId: data?._id,
      clientName: client?.fullname,
      attribution: client?.attribution,
      clientId: client?._id,
    };

    await MoneyRecieved.create(moneyRecievedData);

    return NextResponse.json(
      { message: "Successfully added a request." },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to add the request due to server error." },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  try {
    await connectMongoDB();

    const allData = await MoneyRecieved.find({
      email: email,
    });

    return NextResponse.json(
      { message: "Successfully fetched accounts.", data: allData },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to fetch accounts due to server error.",
        error: error,
      },
      { status: 500 }
    );
  }
}

// export async function PUT(req) {
//   try {
//     const data = await req.json();
//     //   console.log(data);
//     if (data?.status === "Payment recieved") {
//       await connectMongoDB();

//     await MoneyRecieved.updateOne(moneyRecievedData);

//       const client = await Client.findOne(
//         { email: data?.email },
//         "fullname email attribution"
//       );
//     }

//     const moneyRecievedData = {
//       amount: data?.amount,
//       planTitle: data?.planTitle,
//       bonuses: data?.bonuses,
//       planId: data?._id,
//       clientName: client?.fullname,
//       attribution: client?.attribution,
//       clientId: client?._id,
//     };

//     await MoneyRecieved.create(moneyRecievedData);

//     return NextResponse.json(
//       { message: "Successfully added a request." },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json(
//       { message: "Failed to add the request due to server error." },
//       { status: 500 }
//     );
//   }
// }
