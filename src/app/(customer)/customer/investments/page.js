import React from "react";
import TopHeader from "./components/TopHeader";
import InvestmentBooklet from "./components/InvestmentBooklet";
import toast from "react-hot-toast";

const savingFundsBooklet = [
  {
    image: "/assets/advantage_1.png",
  },
  {
    image: "/assets/advantage_2.png",
  },
  {
    image: "/assets/advantage_3.png",
  },
];

const carParkBooklet = [
  {
    image: "/assets/car_park_1.png",
  },
  {
    image: "/assets/car_park_2.png",
  },
  {
    image: "/assets/car_park_3.png",
  },
];

const getData = async (api) => {
  const res = await fetch(api);

  if (!res.ok) {
    toast.error("Error while fetching data.");
    return;
  }

  const { data } = await res.json();
  return data;
};

const Investments = async () => {
  const savingsFunds = await getData(`${process.env.PROD_URL}api/data/savings-funds`)

  return (
    <div className="w-[90%] mx-auto py-10">
      <h2 className="text-2xl font-bold py-4">
        Financial Investment Until 2023
      </h2>
      <p className="text-lg py-4">
        There are numerous ways to invest; please choose the type of investment
        you prefer.
      </p>
      <div className="bg-white rounded-2xl p-8">
        <TopHeader />
        {/* saving funds booklet list  */}
        <div
          id="saving-funds"
          className="bookletTab"
          style={{ display: "block" }}
        >
          {savingsFunds.map((booklet, i) => (
            <InvestmentBooklet key={i} savingsFund={booklet} />
          ))}
        </div>
        {/* saving funds booklet list  */}
        <div id="car-park" className="bookletTab" style={{ display: "none" }}>
          {/* {carParkBooklet.map((booklet, i) => (
            <InvestmentBooklet key={i} image={booklet.image} />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Investments;
