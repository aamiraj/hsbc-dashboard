import React from "react";

const TopBar = () => {
  return (
    <div className="flex justify-between  pl-10 w-[1131px] mx-auto">
      <div className=" py-7">
        <h1 className="text-[36px] font-bold">Personal Data</h1>
        <p>Complete the information Request in the block blow</p>
      </div>
      <div className=" flex gap-x-5 py-8">
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.5101 0.119302C10.6554 0.0584822 10.8113 0.0271606 10.9688 0.0271606C11.1262 0.0271606 11.2821 0.0584822 11.4274 0.119302C11.5718 0.179767 11.7028 0.268186 11.8129 0.379465L15.1205 3.68708C15.2318 3.79718 15.3202 3.9282 15.3807 4.07261C15.4415 4.21787 15.4728 4.37377 15.4728 4.53125C15.4728 4.68872 15.4415 4.84463 15.3807 4.98988C15.3202 5.13428 15.2318 5.2653 15.1205 5.37539L6.04484 14.4511C5.9335 14.5624 5.78247 14.625 5.625 14.625H2.0625C1.74756 14.625 1.44551 14.4999 1.22281 14.2772C1.00011 14.0545 0.875 13.7524 0.875 13.4375V10.1208M10.5101 0.119302C10.3657 0.179776 10.2346 0.268214 10.1245 0.379518L10.5101 0.119302ZM2.0625 10.1209V13.4375H5.37906L14.2853 4.53123L14.2821 4.52806L10.9687 1.21467L10.9656 1.2179L2.0625 10.1209Z"
              fill="white"
            />
          </svg>
        </button>
        <button className="bg-white text-black   rounded-md flex justify-center items-center gap-x-1 w-[200px] h-10 border border-[#838A91]">
         Next
          <svg
            width="17"
            height="17"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.86653 1.82645C10.0884 1.73455 10.3438 1.78535 10.5136 1.95516L17.6386 9.08016C17.8705 9.31203 17.8705 9.68797 17.6386 9.91985L10.5136 17.0448C10.3438 17.2147 10.0884 17.2655 9.86653 17.1736C9.64466 17.0817 9.5 16.8652 9.5 16.625V13.6563H3.5625C3.24756 13.6563 2.94551 13.5311 2.72281 13.3084C2.50011 13.0857 2.375 12.7837 2.375 12.4688V6.53125C2.375 6.21631 2.50011 5.91426 2.72281 5.69156C2.94551 5.46886 3.24756 5.34375 3.5625 5.34375H9.5V2.375C9.5 2.13485 9.64466 1.91835 9.86653 1.82645ZM10.6875 3.80844V5.9375C10.6875 6.26542 10.4217 6.53125 10.0938 6.53125H3.5625L3.5625 12.4688H10.0938C10.4217 12.4688 10.6875 12.7346 10.6875 13.0625V15.1916L16.3791 9.5L10.6875 3.80844Z"
              fill="#595959"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TopBar;
