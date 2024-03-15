"use client"

import React, { useState } from "react";
import TextInput from "../TextInput/TextInput";
import TextAreaInput from "../TextAreaInput/TextAreaInput";
import PhotoInput from "../PhotoInput/PhotoInput";

const Details = ({ client }) => {
  const [inputs, setInputs] = useState();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputs)
  };
  return (
    <div>
      <div className="border rounded-lg p-8 flex items-center justify-center">
        <div className="w-3/5 border rounded-lg p-8 flex flex-col items-center justify-center gap-4">
          <h3 className="text-2xl">Details of customer</h3>
          <TextInput
            id={"fullname"}
            label={"Full Name"}
            value={client?.fullname}
            handleChange={handleChange}
          />
          <TextInput
            id={"email"}
            label={"Email"}
            value={client?.email}
            handleChange={handleChange}
          />
          <TextInput
            id={"phone"}
            label={"Phone"}
            type={"phone"}
            value={client?.phone}
            handleChange={handleChange}
          />
          <TextInput
            id={"birthdate"}
            label={"Birth Date"}
            type={"date"}
            value={client?.birthdate}
            handleChange={handleChange}
          />
          <TextInput
            id={"countryFrom"}
            label={"Country From"}
            value={client?.countryFrom}
            handleChange={handleChange}
          />
          <TextInput
            id={"campaignBy"}
            label={"Campaign"}
            value={client?.campaignBy}
            handleChange={handleChange}
          />
          {/* <TextInput id={"city_name"} label={"City"} />
          <TextAreaInput id={"short_desc"} label={"Short Description"} /> */}
          <PhotoInput id={"photo"} label={"Photo"} />
          {/* <PhotoInput id={"photoTwo"} label={"Photo"} /> */}
          {/* <TextInput id={"pack_title"} label={"Pack Title"} /> */}
          {/* <TextInput id={"pack_category"} label={"Pack Category"} /> */}
          {/* <p>Choose currencied and proportions in this pack</p>
          <div className="w-full grid grid-cols-2 gap-8">
            <TextInput id={"chose_the_list"} label={"Chose The List"} />
            <TextInput id={"enter_the_name"} label={"Enter the Name Here"} />
            <TextInput id={"chose_the_value"} label={"Chose The Value"} />
            <TextInput id={"proportion"} label={"What Proportion?"} />
          </div> */}
          <div className="flex items-center justify-center gap-4">
            <div className="text-white bg-[#39DE5D] shadow-lg px-6 py-3 rounded-lg">
              <p>Validate</p>
            </div>
            <div className="text-white bg-[#000000] shadow-lg px-6 py-3 rounded-lg">
              <p>Close</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
