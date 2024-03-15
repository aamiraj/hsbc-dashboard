import NumberStatCard from "./components/NumberStatCard/NumberStatCard";
import Totalstat from "./components/Totalstat/Totalstat";
import React from "react";
import ClientTable from "./components/ClientTable/ClientTable";

const getEngagementsData = async (api) => {
  try {
    const res = await fetch(api);
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
const Client_Prospect = async () => {
  const engagements = await getEngagementsData(
    `${process.env.PROD_URL}/api/data/engagements/`
  );
  return (
    <div className="p-8 my-8">
      <div className="grid grid-cols-4 gap-4">
        <NumberStatCard
          title={"Interested"}
          trendUp={false}
          percent={0}
          stat={0}
          context={"Employee"}
        />
        <NumberStatCard
          title={"Customer"}
          trendUp={engagements?.trendUp}
          percent={engagements?.percent}
          stat={engagements?.stat}
          context={"Viewers"}
        />
        <NumberStatCard
          title={"Already Contacted"}
          trendUp={false}
          percent={0}
          stat={0}
          context={"Applicants"}
        />
        <NumberStatCard
          title={"Not Interested"}
          trendUp={false}
          percent={0}
          stat={0}
          context={"Employee"}
        />
      </div>
      <div>
        <Totalstat />
      </div>
      {/* client table  */}
      <div>
        <ClientTable />
      </div>
    </div>
  );
};

export default Client_Prospect;
