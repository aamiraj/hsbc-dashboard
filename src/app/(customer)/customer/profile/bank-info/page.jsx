import React from 'react';

const BankInfo = () => {
    return (
        <div className="w-[750px] h-[500px] border border-[#97979A] rounded-xl ml-10">
        <h1 className="text-[24px] font-bold text-center pt-5">
        Bank Information
        </h1>
        
        <div className="px-8 pb-7">
          <div>
            <h1 className="mb-1 text-[#595959] text-[16px] font-medium">
            Name Of Bank            </h1>
            <div className="relative">
              <input
                type="text"
                name=""
                id=""
                className="border-b border-[#97979A] w-full pl-6 outline-none"
                placeholder="Type Here..."
              />

              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-[2px] left-[2px]"
              >
                <path
                  d="M2.83366 2.83334H14.167C14.9462 2.83334 15.5837 3.47084 15.5837 4.25V12.75C15.5837 13.5292 14.9462 14.1667 14.167 14.1667H2.83366C2.05449 14.1667 1.41699 13.5292 1.41699 12.75V4.25C1.41699 3.47084 2.05449 2.83334 2.83366 2.83334Z"
                  stroke="#97979A"
                  stroke-width="1.41667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.5837 4.25L8.50033 9.20833L1.41699 4.25"
                  stroke="#97979A"
                  stroke-width="1.41667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className='my-5'>
            <h1 className="mb-1 text-[#595959] text-[16px] font-medium">
            iBAN
            </h1>
            <div className="relative">
              <input
                type="text"
                name=""
                id=""
                className="border-b border-[#97979A] w-full pl-6 outline-none"
                placeholder="Type Here..."
              />

              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-[2px] left-[2px]"
              >
                <path
                  d="M2.83366 2.83334H14.167C14.9462 2.83334 15.5837 3.47084 15.5837 4.25V12.75C15.5837 13.5292 14.9462 14.1667 14.167 14.1667H2.83366C2.05449 14.1667 1.41699 13.5292 1.41699 12.75V4.25C1.41699 3.47084 2.05449 2.83334 2.83366 2.83334Z"
                  stroke="#97979A"
                  stroke-width="1.41667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.5837 4.25L8.50033 9.20833L1.41699 4.25"
                  stroke="#97979A"
                  stroke-width="1.41667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div>
            <h1 className="mb-1 text-[#595959] text-[16px] font-medium">
            SWIFT/BIC:
            </h1>
            <div className="relative">
              <input
                type="text"
                name=""
                id=""
                className="border-b border-[#97979A] w-full pl-6 outline-none"
                placeholder="Type Here..."
              />

              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-[2px] left-[2px]"
              >
                <path
                  d="M2.83366 2.83334H14.167C14.9462 2.83334 15.5837 3.47084 15.5837 4.25V12.75C15.5837 13.5292 14.9462 14.1667 14.167 14.1667H2.83366C2.05449 14.1667 1.41699 13.5292 1.41699 12.75V4.25C1.41699 3.47084 2.05449 2.83334 2.83366 2.83334Z"
                  stroke="#97979A"
                  stroke-width="1.41667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.5837 4.25L8.50033 9.20833L1.41699 4.25"
                  stroke="#97979A"
                  stroke-width="1.41667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
         
        
        
        
        <div>
          <div className=" flex justify-center py-8">
            <button className="bg-black text-white  rounded-md flex items-center justify-center gap-x-1 w-[200px] h-10">
              Edit
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.5101 0.119302C10.6554 0.0584822 10.8113 0.0271606 10.9688 0.0271606C11.1262 0.0271606 11.2821 0.0584822 11.4274 0.119302C11.5718 0.179767 11.7028 0.268186 11.8129 0.379465L15.1205 3.68708C15.2318 3.79718 15.3202 3.9282 15.3807 4.07261C15.4415 4.21787 15.4728 4.37377 15.4728 4.53125C15.4728 4.68872 15.4415 4.84463 15.3807 4.98988C15.3202 5.13428 15.2318 5.2653 15.1205 5.37539L6.04484 14.4511C5.9335 14.5624 5.78247 14.625 5.625 14.625H2.0625C1.74756 14.625 1.44551 14.4999 1.22281 14.2772C1.00011 14.0545 0.875 13.7524 0.875 13.4375V10.1208M10.5101 0.119302C10.3657 0.179776 10.2346 0.268214 10.1245 0.379518L10.5101 0.119302ZM2.0625 10.1209V13.4375H5.37906L14.2853 4.53123L14.2821 4.52806L10.9687 1.21467L10.9656 1.2179L2.0625 10.1209Z"
                  fill="white"
                />
              </svg>
            </button>
            
          </div>
        </div>
      </div>
    );
};

export default BankInfo;