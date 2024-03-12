import React from "react";

const MediaDocuments = () => {
  return (
    <div className="my-8 p-8 bg-white grid grid-cols-2 gap-8">
      <div className="p-8 border-2 border-black rounded-lg flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">MEDIA & DOCUMENTS</h1>
        <p className="text-center p-4">
          You want to establish financial security and plan for possible future
          hauls. This fund allows you yo save money will be compltely safe and
          to benefit
        </p>
        <button
          type="button"
          className="w-[80%] px-2 py-4 text-center font-bold text-lg text-white bg-[#D80027] rounded-lg"
        >
          Download PDF
        </button>
      </div>
      <div className="p-8 border-2 border-black rounded-lg flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">SCHEDULE FOR YOUR</h1>
        <div className="w-full my-4 grid grid-cols-4 gap-4">
          <div className="font-bold flex flex-col gap-2 items-center justify-center">
            <p className="text-[#D80027]">Date</p>
            <p>09-11-2023</p>
            <p className="text-[#D80027]">Total</p>
          </div>
          <div className="font-bold flex flex-col gap-2 items-center justify-center">
            <p className="text-[#D80027]">From</p>
            <p>€1,380.00</p>
            <p className="text-[#D80027]">€1,380.00</p>
          </div>
          <div className="font-bold flex flex-col gap-2 items-center justify-center">
            <p className="text-[#D80027]">From</p>
            <p>-0.01%</p>
            <p className="text-[#D80027]">€1,380.00</p>
          </div>
          <div className="font-bold flex flex-col gap-2 items-center justify-center">
            <p className="text-[#D80027]">From</p>
            <p>-0.01%</p>
            <p className="text-[#D80027]">€1,380.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaDocuments;
