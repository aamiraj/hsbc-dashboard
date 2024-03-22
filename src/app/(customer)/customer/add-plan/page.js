import React from "react";
import Image from "next/image";

const AddFund = () => {
  let array = [1, 2, 3];
  return (
    <section className="p-8">
      <h1 className="text-[32px] font-bold py-7 text-center">
        Add Fund And Create Crypto Account
      </h1>
      <div className="grid grid-cols-3 gap-5">
        {array.map((a, i) => (
          <div
            key={i}
            className="rounded-xl relative border border-[#595959]"
          >
            <Image
              src={"/assets/ce1e025ec981289572edf337907792c1.jpg"}
              alt="image"
              width={2500}
              height={1725}
              style={{ width: "100%", borderRadius: "8px 8px 0 0" }}
            />
            <h1 className="absolute top-3 right-2 bg-red-600/80 text-white font-bold rounded-bl-full rounded-tr-full px-8 py-4">
              Most Favourite
            </h1>
            <h1 className="text-[24px] font-bold absolute top-40 text-white left-5">
              Booklet Fixed bunq
            </h1>
            <div className="p-5">
              <div className="flex justify-between">
                <h1 className="text-[#878790] font-medium text-sm">
                  Account Min
                </h1>
                <h1 className="text-sm font-bold">$50.000 {">"} $10.000.000</h1>
              </div>
              <div className="flex justify-between pt-3">
                <h1 className="text-[#878790] font-medium text-sm">
                  Guarented Up To
                </h1>
                <h1 className="text-sm font-bold">%100.0</h1>
              </div>
              <div className="flex justify-between pt-3">
                <h1 className="text-[#878790] font-medium text-sm">
                  Leverage Effect
                </h1>
                <h1 className="text-sm font-bold">1</h1>
              </div>
              <div className="flex justify-between pt-3">
                <h1 className="text-[#878790] font-medium text-sm">
                  Fund Release
                </h1>
                <h1 className="text-sm font-bold">12 Month</h1>
              </div>
              <div className="flex justify-between pt-3">
                <h1 className="text-[#878790] font-medium text-sm">
                  Max if Position
                </h1>
                <h1 className="text-sm font-bold">0</h1>
              </div>
              <div className="flex justify-between pt-3">
                <h1 className="text-[#878790] font-medium text-sm">
                  Instant Bonus
                </h1>
                <h1 className="text-sm font-bold">0,0%</h1>
              </div>
              <div className="flex items-center justify-center py-4">
                <button
                  type="button"
                  className="bg-red-600 text-white font-bold rounded-2xl px-8 py-4"
                >
                  Select this method
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AddFund;
