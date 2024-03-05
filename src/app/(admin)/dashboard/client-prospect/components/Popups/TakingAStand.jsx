import React from "react";
import TextInput from "../TextInput/TextInput";
import SelectInput from "../SelectInput/SelectInput";

const TakingAStand = () => {
  return (
    <div className="border rounded-lg p-12">
      <div>
        <TextInput
          id={"choose_the_type_of_transaction"}
          label={"Choose the Type of Transaction"}
        />
        <p>
          The "Investment" mode offers negotiated prices on certain values.
          These negotiations can be set in the tab "ADDING A NEGOTIATION ON THE
          COURSE" in the "Settings" page available in the menu. This mode does
          not give access to leverage or stop limits up or down.“Trading” mode
          offers current cryptocurrencies prices with all trading options.
        </p>
        <SelectInput id={"Trading"} options={["Trading"]} />
        <SelectInput id={"Trading"} options={["Purchase Without Leverage"]} />
        <TextInput
          id={"enter_the_name_here"}
          label={"Enter the name here..."}
        />
        <TextInput id={"product"} label={"Product"} />
        <TextInput
          id={"SELECT_CUSTOMERS_ACCOUNT_FROM_WHICH"}
          label={"SELECT CUSTOMER'S ACCOUNT FROM WHICH"}
        />
        <TextInput id={"available_funds"} label={"Available funds"} />
        <TextInput
          id={"SELECT_DATE_AND_TIME_OF_TRANSACTION"}
          label={"SELECT DATE AND TIME OF TRANSACTION"}
        />
        <TextInput id={"currency"} label={"Currency"} />
        <TextInput
          id={"INDICATE_THE_COURSE_AT_WHICH_YOU_PASS_THIS_TRANSACTION"}
          label={"INDICATE THE COURSE AT WHICH YOU PASS THIS TRANSACTION"}
        />
        <TextInput id={"relevant_quantity"} label={"Relevant quantity"} />
        <TextInput
          id={"LEVERAGE_EFFECT_FOR_THIS_TRANSACTION"}
          label={"LEVERAGE EFFECT FOR THIS TRANSACTION"}
        />
      </div>
      <div className="flex justify-center items-center my-4">
        <input type="checkbox" name="place_stop_limit" id="place_stop_limit" />
        <label htmlFor="place_stop_limit" className="mx-2">PLACE STOP LIMIT</label>
      </div>
      <div className="flex items-center justify-center gap-4">
        <div className="text-white bg-[#39DE5D] shadow-lg px-6 py-3 rounded-lg">
          <p>Send</p>
        </div>
        <div className="text-white bg-[#000000] shadow-lg px-6 py-3 rounded-lg">
          <p>Close</p>
        </div>
      </div>
    </div>
  );
};

export default TakingAStand;
