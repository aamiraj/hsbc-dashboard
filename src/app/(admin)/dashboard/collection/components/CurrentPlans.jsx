import React from "react";
import { CiCamera } from "react-icons/ci";

const CurrentPlans = () => {
  return (
    <div className="border border-gray-600 rounded">
      <div className="p-5 flex gap-x-5">
        <input type="file" name="" id="file" className="hidden" />
        <label htmlFor="file">
          <div className="w-[132px] h-[169px] border border-dashed border-[#00AC4F] flex justify-center pt-[35px] rounded-[10px] cursor-pointer">
            <div>
              <div className="flex justify-center">
                <CiCamera className="text-[#A3A3A3] w-[32px] h-[26px]  flex justify-center" />
              </div>
              <h1 className="text-[15px] font-medium text-[#A3A3A3]">
                Add Picture
              </h1>
            </div>
          </div>
        </label>
        <div>
          <div className="flex gap-x-5">
            <h1 className="text-[#595959] text-[15px] font-medium">
              Plan's title :
            </h1>
            <input
              type="text"
              name=""
              id=""
              className="border-b w-[774px] border-[#97979A]  outline-none "
            />
          </div>
          <div className="flex justify-between w-[940px] my-8">
            <div className="flex gap-x-5 ">
              <h1 className="text-[#595959]  text-[15px] font-medium">
                From :
              </h1>
              <input
                type="text"
                name=""
                id=""
                className="border-b w-[110px]  border-[#97979A]  outline-none "
              />
            </div>
            <div className="flex gap-x-5 relative">
              <h1 className="text-[#595959] text-[15px] font-medium">To :</h1>
              <input
                type="text"
                name=""
                id=""
                className="border-b  w-[110px] border-[#97979A]  outline-none "
              />
              <span className="absolute right-0 text-[#97979A] pr-2">$</span>
            </div>
            <div className="flex gap-x-5 relative">
              <h1 className="text-[#595959] text-[15px] font-medium">
                Bonuses :
              </h1>
              <input
                type="text"
                name=""
                id=""
                className="border-b  w-[110px] border-[#97979A]  outline-none "
              />
              <span className="absolute right-0 text-[#97979A] pr-2">%</span>
            </div>
            <div className="flex gap-x-5 relative">
              <h1 className="text-[#595959] text-[15px] font-medium">
                Limit of leverage :
              </h1>
              <input
                type="text"
                name=""
                id=""
                className="border-b w-[110px]  border-[#97979A]  outline-none "
              />
              <span className="absolute right-0 text-[#97979A] pr-2">%</span>
            </div>
          </div>
          <div className="flex justify-between w-[940px] mb-8 ">
            <div className="flex  gap-x-2">
              <h1 className="text-[#595959]  text-[15px] font-medium">
                Blocked during :
              </h1>
              <input
                type="text"
                name=""
                id=""
                className="border-b w-[110px]  border-[#97979A]  outline-none "
              />
            </div>
            <div className="flex  gap-x-2 relative">
              <h1 className="text-[#595959] text-[15px] font-medium">
                Minimum of positions :
              </h1>
              <input
                type="text"
                name=""
                id=""
                className="border-b  w-[110px] border-[#97979A]  outline-none "
              />
              <span className="absolute right-0 text-[#97979A] pr-2">%</span>
            </div>
            <div className="flex gap-x-2 relative">
              <h1 className="text-[#595959] text-[15px] font-medium">
                Warranty :
              </h1>
              <input
                type="text"
                name=""
                id=""
                className="border-b  w-[110px] border-[#97979A]  outline-none "
              />
              <span className="absolute right-0 text-[#97979A] pr-2">%</span>
            </div>
            <div className="flex gap-x-2 relative">
              <h1 className="text-[#595959] text-[15px] font-medium">
                Commission :
              </h1>
              <input
                type="text"
                name=""
                id=""
                className="border-b w-[110px]  border-[#97979A]  outline-none "
              />
              <span className="absolute right-0 text-[#97979A] pr-2">%</span>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <div className="flex gap-x-3">
                <input type="checkbox" name="" id="" />{" "}
                <span>
                  This plan allows you to access the list for investment 
                </span>
              </div>
              <div className="flex gap-x-3">
                <input type="checkbox" name="" id="" />{" "}
                <span>Passbook account</span>
              </div>
            </div>
            <button className="bg-[#DD9A19] text-white px-8 rounded-lg shadow-md">
              Delete the Plan
            </button>
          </div>
        </div>
      </div>
      {/* <hr />  */}
      <div className="p-5">
        <div className="border-b border-gray-500"></div>
        <div className="my-5 text-[#595959] flex gap-x-10 px-5">
          <div >
            <div className="flex gap-x-3">
              <input type="checkbox" name="" id="" />{" "}
              <span>isplay this plan in client/background-plans</span>
            </div>
            <div className="flex gap-x-3 my-2">
              <input type="checkbox" name="" id="" />{" "}
              <span>Account status</span>
            </div>
            <div className="flex gap-x-3 mb-3">
              <input type="checkbox" name="" id="" />{" "}
              <span>Total amount invested</span>
            </div>
            <div className="flex gap-x-3">
              <input type="checkbox" name="" id="" />{" "}
              <span>Total Performance</span>
            </div>
          </div>
          <div >
            <div className="flex gap-x-3">
              <input type="checkbox" name="" id="" />{" "}
              <span>isplay this plan in client/background-plans</span>
            </div>
            <div className="flex gap-x-3 my-2">
              <input type="checkbox" name="" id="" />{" "}
              <span>Account status</span>
            </div>
            <div className="flex gap-x-3 mb-3">
              <input type="checkbox" name="" id="" />{" "}
              <span>Total amount invested</span>
            </div>
            <div className="flex gap-x-3">
              <input type="checkbox" name="" id="" />{" "}
              <span>Total Performance</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentPlans;
