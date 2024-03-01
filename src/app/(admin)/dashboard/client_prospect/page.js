import UsersTwo from "@/components/Icons/UsersTwo";
import NumberStatCard from "@/components/NumberStatCard/NumberStatCard";
import Totalstat from "@/components/Totalstat/Totalstat";
import { engagements } from "@/dummydata/stats";
import React from "react";

const Client_Prospect = () => {
  return (
    <div className="p-8 my-8">
      <div className="grid grid-cols-4 gap-4">
        {engagements.map((e, i) => (
          <NumberStatCard
            key={i}
            title={e.title}
            trendUp={e.trendUp}
            percent={e.percent}
            stat={e.stat}
            context={e.context}
          />
        ))}
      </div>
      <div>
        <Totalstat />
      </div>
    </div>
  );
};

export default Client_Prospect;
