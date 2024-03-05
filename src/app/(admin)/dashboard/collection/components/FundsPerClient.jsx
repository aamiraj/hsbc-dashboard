"use client";
import React, { useEffect, useState } from "react";

const card = [
  {
    title: "Julien Chauveau (Manager)",

    price: "50.00",
  },
  {
    title: "Torti Thierry (Manager)",

    price: "400.00",
  },
];

const FundsPerClient = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? (
        <div className="bg-white rounded-md">
          <div className="shadow-md rounded-lg py-4 px-8 my-8">
            <div className="py-4">
              <table className="table">
                <thead>
                  <tr>
                    <th className="th">
                      <div className="flex justify-between">
                        <div className="w-4/12 flex justify-center">
                          <h1>Seller</h1>
                        </div>
                        <div className="w-3/12 flex justify-between">
                          <h1>Fund Per Client</h1>
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {card.map((card, i) => (
                    <div key={i} className="flex justify-between mb-5">
                     <div className="w-4/12">
                     <h1 className="text-sm font-semibold  text-center ">{card.title}</h1>
                     </div>

                      <div className="w-3/12 px-5">
                        <span>${card.price}</span>
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

export default FundsPerClient;
