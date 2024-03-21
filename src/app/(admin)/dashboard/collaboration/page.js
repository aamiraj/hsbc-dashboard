import Searchbox from "../../../../components/Searchbox/Searchbox";
import Selectbox from "../../../../components/Selectbox/Selectbox";
import React from "react";
import { TfiAngleDown } from "react-icons/tfi";
import { optionListNumbers } from "../options/optionList";
import AddUserPopUp from "./components/AddUserPopUp";
import UserTable from "./components/UserTable";
import PopUpButton from "./components/PopUpButton";

const Collaboration = () => {
  return (
    <div className="p-8">
      <PopUpButton />
      <div id="addUserPopUp" style={{ display: "none" }}>
        <AddUserPopUp id={"addUserPopUp"} user={null} />
      </div>
      <div className="p-4 bg-white rounded-lg">
        {/* top select and search options  */}
        <div className="flex justify-between items-center gap-4 py-4">
          <div className="flex items-center gap-4 py-4">
            <div className="text-xs font-semibold px-4 flex items-center gap-2 rounded-full border-2">
              <p>
                Assign to
                <br />
                Better Paul (Manager)
              </p>
              <TfiAngleDown style={{ width: "20px", height: "20px" }} />
            </div>
            <div>
              <button
                type="button"
                className="font-bold px-8 py-2 bg-[#39DE5D] rounded-full"
              >
                Validate
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Searchbox />
            <Selectbox optionList={optionListNumbers} defaultOption={""} />
          </div>
        </div>
        {/* table of users  */}
        <div>
          <UserTable />
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
