import React from "react";
import TabButton from "./components/TabButton/TabButton";
import TabLinks from "./sections/TabLinks/TabLinks";

const Collection = () => {
  return (
    <div className="p-8">
      <TabLinks />
      <div>
        <div id="recieved" className="tabcontent" style={{ display: "block" }}>
          Money Received
        </div>
        <div id="withdraw" className="tabcontent" style={{ display: "none" }}>
          WIthdraw
        </div>
        <div id="deposit" className="tabcontent" style={{ display: "none" }}>
          Deposit
        </div>
        <div id="modify" className="tabcontent" style={{ display: "none" }}>
          Add/Modify a plan
        </div>
      </div>
    </div>
  );
};

export default Collection;
