import React from "react";
import InvitationsTabLinks from "./components/InvitationsTabLinks/InvitationsTabLinks";
import LeadManager from "./components/LeadManager/LeadManager";
import Link from "next/link";
import AutoPilotForm from "./components/AutoPilotForm/AutoPilotForm";

const InvitationsOfLeads = () => {
  return (
    <div className="p-8">
      <InvitationsTabLinks parentClass={"invitations"} />
      <div>
        <div
          id="lead_manager"
          className="tabcontent invitations"
          style={{ display: "block" }}
        >
          <LeadManager title={"SELECTIVE LEAD ASSIGNMENT"} />
        </div>
        <div
          id="new_assignment"
          className="tabcontent invitations"
          style={{ display: "none" }}
        >
          Mass Assignment of customers
        </div>
        <div
          id="auto_pilot"
          className="tabcontent invitations"
          style={{ display: "none" }}
        >
          <AutoPilotForm />
          <LeadManager title={"AUTOMATICALLY MODIFYING A REVIEW"} />
        </div>
        <div
          id="archive"
          className="tabcontent invitations"
          style={{ display: "none" }}
        >
          <Link href="/dashboard/client-prospect">
            Copied from Client/Prospect
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InvitationsOfLeads;
