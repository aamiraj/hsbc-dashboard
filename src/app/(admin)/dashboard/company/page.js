import React from "react";
import TextInput from "../client-prospect/components/TextInput/TextInput";
import TextAreaInput from "../client-prospect/components/TextAreaInput/TextAreaInput";
import PhotoInput from "../client-prospect/components/PhotoInput/PhotoInput";

const Company = () => {
  return (
    <div>
      <div>
        <div className="p-8 flex items-center justify-center">
          <div className="bg-white w-3/5 border border-[#0F993E] rounded-lg p-8 flex flex-col items-center justify-center gap-4">
            <h3 className="text-2xl">Website Setting</h3>
            <TextInput id={"expert_name"} label={"Expert Name"} />
            <TextInput id={"city_name"} label={"City"} />
            <TextAreaInput id={"short_desc"} label={"Short Description"} />
            <PhotoInput id={"photo"} label={"Photo"} />
            <PhotoInput id={"photoTwo"} label={"Photo"} />
            <TextInput id={"pack_title"} label={"Pack Title"} />
            <TextInput id={"pack_category"} label={"Pack Category"} />
            <p>Choose currencied and proportions in this pack</p>
            <div className="w-full grid grid-cols-2 gap-8">
              <TextInput id={"chose_the_list"} label={"Chose The List"} />
              <TextInput id={"enter_the_name"} label={"Enter the Name Here"} />
              <TextInput id={"chose_the_value"} label={"Chose The Value"} />
              <TextInput id={"proportion"} label={"What Proportion?"} />
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="text-white bg-[#39DE5D] shadow-lg px-6 py-3 rounded-lg">
                <p>Add</p>
              </div>
              <div className="text-white bg-[#000000] shadow-lg px-6 py-3 rounded-lg">
                <p>Reset</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
