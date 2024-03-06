import React from "react";
import Cryptocurrency from "../../../transaction/sections/Cryptocurrency/Cryptocurrency";

const LeadManager = ({title}) => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold py-4">{title}</h2>
      <Cryptocurrency />
    </div>
  );
};

export default LeadManager;
