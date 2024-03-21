"use client";

import React from "react";

const ShowPlanModal = ({ payment, closeModal }) => {
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/10">
      <div className="relative w-10/12 md:w-4/6 lg:w-3/6 xl:w-2/5 my-5 mx-auto h-auto md:h-auto lg:h-full">
        {/*content*/}
        <div className={`translate duration-300 h-full`}>
          <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex justify-center p-5">
              <div className=" text-center text-[36px] font-light">
                {`Plan: ${payment?.plan}`}
              </div>
            </div>
            <div className="relative pb-5 px-10 flex-auto">
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
                    <li className="font-semibold pb-1">{payment?.fullname}</li>
                    <li className="font-semibold pb-1">{payment?.date}</li>
                    <li className="font-semibold pb-1">{payment?.price}</li>
                    <li className="font-semibold pb-1">{payment?.price}</li>
                    <li className="font-semibold pb-1">{payment?.bonuses}</li>
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
                      defaultValue={payment?.date}
                    />
                  </div>
                  <div className="my-5">
                    <h2>Remitted Amount</h2>
                    <input
                      type="text"
                      className="border-b border-[#97979A] w-full mt-1 outline-none"
                      placeholder="Find Value..."
                      defaultValue={payment?.price}
                    />
                  </div>
                  <div>
                    <h2>Credited Amount</h2>
                    <input
                      type="text"
                      className="border-b border-[#97979A] w-full mt-1 outline-none"
                      placeholder="Type Here..."
                      defaultValue={payment?.price}
                    />
                  </div>
                  <div className="my-5">
                    <h2>Order Status</h2>
                    <input
                      type="text"
                      className="border-b border-[#97979A] w-full mt-1 outline-none"
                      placeholder="Find Value..."
                      defaultValue={
                        payment?.payment
                          ? "Payment recieved"
                          : "Payment not recieved"
                      }
                    />
                  </div>
                  <div>
                    <h2>Payment Method</h2>
                    <input
                      type="text"
                      className="border-b border-[#97979A] w-full mt-1 outline-none"
                      placeholder="Type Here..."
                      defaultValue={payment?.method}
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
            </div>
            {/*footer*/}
            <div className="flex flex-col gap-2  pb-10">
              <div className="flex justify-center gap-x-5">
                <button className="bg-[#39DE5D] px-14 py-[9.5px] rounded font-semibold">
                  Send
                </button>
                <button
                  onClick={closeModal}
                  className="bg-[#000000] px-12 py-[9.5px] rounded font-semibold text-white"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowPlanModal;
