"use client";
import React, { useEffect, useState } from "react";
import Searchbox from "@/components/Searchbox/Searchbox";
import Selectbox from "@/components/Selectbox/Selectbox";
import { optionListNumbers } from "../../options/optionList";
import Image from "next/image";
import image1 from "../../../../../images/628d9abe1d64b9cd528c434381eba87f.jpg";
import image2 from "../../../../../images/27022519889f16e1275b4e0f96f434b8.jpg";
import image3 from "../../../../../images/28d03fb43d7b35353bbdef38649852e3.jpg";

const card = [
  {
    image: image1,
    title: "Julien Chauveau (Manager)",
    sub_title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    initial_price: "50.00",
    offer_price: "20",
  },
  {
    image: image2,
    title: "Torti Thierry (Manager)",
    sub_title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    initial_price: "400.00",
    offer_price: "400.00",
  },
  {
    image: image3,
    title: "Berthier Laurent (Manager)",
    sub_title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    initial_price: "345.99",
    offer_price: "20",
  },
];

const ProductSell = ({ title }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? (
        <div className="bg-white rounded-md">
          <div className="shadow-md rounded-lg py-4 px-8 my-8">
            <div className="flex items-center gap-4 justify-between">
              <h2 className="text-lg font-bold">{title}</h2>
              <div className="flex items-center justify-end gap-4">
                <Searchbox withCommand={false} />
                <Selectbox optionList={optionListNumbers} defaultOption="" />
              </div>
            </div>
            <div className="py-4">
              <table className="table">
                <thead>
                  <tr>
                    <th className="th">
                      <div className="flex justify-between">
                        <div className="w-[27%] flex justify-center">
                          <h1>Seller</h1>
                        </div>
                        <div className="w-3/12 flex justify-between">
                          <h1>Fund Per Client</h1>
                          <h1>Withdraw Amount</h1>
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {card.map((card, i) => (
                    <div key={i} className="flex justify-between mb-5">
                      <div className="flex gap-x-6 w-9/12">
                        <Image
                          src={card.image}
                          alt=""
                          width={100}
                          height={100}
                          className="h-[56px] w-[62px] rounded-lg"
                        />
                        <div>
                          <h1 className="text-lg font-semibold">
                            {card.title}
                          </h1>
                          <h2>{card.sub_title}</h2>
                        </div>
                      </div>
                      <div className="w-3/12 flex justify-between px-6">
                        <span>${card.initial_price}</span>
                        <span>${card.offer_price}</span>
                      </div>
                    </div>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ProductSell;
