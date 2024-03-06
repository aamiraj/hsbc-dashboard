/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";

const Modal = ({ isOpen, title, body, footer }) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="
          justify-center 
          items-center 
          flex 
          overflow-x-hidden 
          overflow-y-auto 
          fixed 
          inset-0 
          z-50 
          outline-none 
          focus:outline-none
          bg-neutral-800/70
        "
      >
        <div
          className="
          relative 
          w-10/12
          md:w-4/6
          lg:w-3/6
          xl:w-2/5
          my-5
          mx-auto 
          h-auto 
          md:h-auto
          lg:h-full
          "
        >
          {/*content*/}
          <div
            className={`
            translate
            duration-300
            h-full
            ${showModal ? "translate-y-0" : "translate-y-full"}
            ${showModal ? "opacity-100" : "opacity-0"}
          `}
          >
            <div
              className="
              translate
              h-full
              lg:h-auto
              md:h-auto
              border-0 
              rounded-lg 
              shadow-lg 
              relative 
              flex 
              flex-col 
              w-full 
              bg-white 
              outline-none 
              focus:outline-none
            "
            >
              {/*header*/}
              <div className="flex justify-center p-5">
                <div className=" text-center text-[36px] font-light">
                  {title}
                </div>
              </div>
              <div className="relative pb-5 px-10 flex-auto">{body}</div>
              {/*footer*/}
              <div className="flex flex-col gap-2  pb-10">{footer}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
