import React from "react";
import PaymentTabLinks from "./sections/PaymentTabLinks/PaymentTabLinks";
import { payments } from "@/dummydata/payments";
import PaymentList from "../components/PaymentList/PaymentList";

const Payment = () => {
  return (
    <div className="p-8">
      <PaymentTabLinks parentClass={"payment"} />
      <div>
        <div id="investment" className="tabcontent payment" style={{ display: "block" }}>
          <PaymentList title={"Order in Progress"} payments={payments} />
        </div>
        <div id="park" className="tabcontent payment" style={{ display: "none" }}>
          <PaymentList title={"Order in Progress"} payments={payments} />
        </div>
        <div id="fund" className="tabcontent payment" style={{ display: "none" }}>
          <PaymentList title={"Order in Progress"} payments={payments} />
        </div>
        <div id="insurance" className="tabcontent payment" style={{ display: "none" }}>
          <PaymentList title={"Order in Progress"} payments={payments} />
        </div>
      </div>
    </div>
  );
};

export default Payment;
