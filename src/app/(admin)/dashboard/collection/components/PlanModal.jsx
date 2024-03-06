import React from "react";
import Modal from "./Modal";
import usePlanModal from "@/hooks/PlanModal";

const PlanModal = () => {
  const planModal = usePlanModal();

  const bodyContent = (
    <div>
      <div className="flex gap-x-10">
        <ul>
          <li className="pb-1 text-[15px]">Name</li>
          <li className="pb-1 text-[15px]">Created</li>
          <li className="pb-1 text-[15px]">Price</li>
          <li className="pb-1 text-[15px]">Available Funds</li>
          <li className="pb-1 text-[15px]">Instant Bonus</li>
        </ul>
        <ul>
          <li className="font-semibold pb-1">HSBC Free Booklet</li>
          <li className="font-semibold pb-1">2023-12-12 / 18:24</li>
          <li className="font-semibold pb-1">1,100.00 EUR</li>
          <li className="font-semibold pb-1">1,100.00 EUR</li>
          <li className="font-semibold pb-1">0,0%</li>
        </ul>
      </div>
      <div className="border-b border-[#97979A] py-2"></div>

      <div className="my-5">
        <div>
          <h2>Funds Payment Date</h2>
          <input
            type="text"
            className="border-b border-[#97979A] w-full mt-1 outline-none"
            placeholder="Find Value..."
          />
        </div>
        <div className="my-5">
          <h2>Remitted Amount</h2>
          <input
            type="text"
            className="border-b border-[#97979A] w-full mt-1 outline-none"
            placeholder="Find Value..."
          />
        </div>
        <div>
          <h2>Credited Amount</h2>
          <input
            type="text"
            className="border-b border-[#97979A] w-full mt-1 outline-none"
            placeholder="Type Here..."
          />
        </div>
        <div className="my-5">
          <h2>Order Status</h2>
          <input
            type="text"
            className="border-b border-[#97979A] w-full mt-1 outline-none"
            placeholder="Find Value..."
          />
        </div>
        <div>
          <h2>Payment Method</h2>
          <input
            type="text"
            className="border-b border-[#97979A] w-full mt-1 outline-none"
            placeholder="Type Here..."
          />
        </div>
        <div className="my-5">
          <h2>Short Description</h2>
          <textarea
            type="text"
            className="border border-[#97979A] w-full mt-1 outline-none h-28 rounded-md"
          />
        </div>
      </div>
    </div>
  );
  const footerContent = (
    <div className="flex justify-center gap-x-5">
      <button className="bg-[#39DE5D] px-14 py-[9.5px] rounded font-semibold">
        Send
      </button>
      <button
        onClick={planModal.onClose}
        className="bg-[#000000] px-12 py-[9.5px] rounded font-semibold text-white"
      >
        Close
      </button>
    </div>
  );

  return (
    <Modal
      //   disabled={isLoading}
      isOpen={planModal.isOpen}
      title={"Plan : HSBC Libre Livret"}
      onClose={planModal.onClose}
      body={bodyContent}
      footer={footerContent}
    ></Modal>
  );
};

export default PlanModal;
