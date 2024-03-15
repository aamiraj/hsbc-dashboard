import React from "react";
import Image from "next/image";

const getEngagementsData = async (api) => {
  try {
    const res = await fetch(api);
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const Stat = ({ children, title, stat }) => {
  return (
    <div>
      <div className="flex justify-start items-center gap-2">
        <div className="bg-gradient-to-b from-[#D3FFE7] to-[#EFFFF6] rounded-full p-4 ">
          <div>{children}</div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm text-slate-700">{title}</p>
          <p className="text-xl font-bold text-black">{stat}</p>
          {/* {trend !== "none" && (
            <div>
              <p className="text-xs">
                <span className={trend==='up' ? "text-[#00AC4F]" : "text-[#D0004B]"}>
                  {trend === "up" ? (
                    <Image
                      src={"/assets/arrow-up.svg"}
                      alt="2 users icon"
                      width={12}
                      height={12}
                      className="inline-block"
                    />
                  ) : (
                    <Image
                      src={"/assets/arrow-down.svg"}
                      alt="2 users icon"
                      width={12}
                      height={12}
                      className="inline-block"
                    />
                  )}
                  {percent}%
                </span>
                {" "}
                this month
              </p>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

const Totalstat = async () => {
  const engagements = await getEngagementsData(
    `${process.env.PROD_URL}/api/data/engagements/`
  );

  return (
    <>
      <div className="bg-[#FFFFFF] rounded-lg p-8 my-8 flex justify-around items-center gap-4">
        <Stat title={"Total Customers"} stat={engagements?.stat}>
          <Image
            src={"/assets/profile-2user.svg"}
            alt="2 users icon"
            width={32}
            height={32}
          />
        </Stat>
        <div className="w-[1px] h-[84px] bg-[#B1B1B1] mx-8"></div>
        <Stat title={"Members"} stat={engagements?.stat}>
          <Image
            src={"/assets/profile-tick.svg"}
            alt="2 users icon"
            width={32}
            height={32}
          />
        </Stat>
        <div className="w-[1px] h-[84px] bg-[#B1B1B1] mx-8"></div>
        <Stat title={"Active Now"} stat={engagements?.stat}>
          <Image
            src={"/assets/monitor.svg"}
            alt="2 users icon"
            width={32}
            height={32}
          />
        </Stat>
      </div>
    </>
  );
};

export default Totalstat;
