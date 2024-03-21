"use client";

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
    console.log(inputs);
  };
  return (
    <div>
      <div className="border rounded-lg p-8 flex items-center justify-center">
        <div className="w-3/5 border rounded-lg p-8 flex flex-col items-center justify-center gap-4">
          <h3 className="text-2xl">Details of customer</h3>
          <TextInput
            id={"fullname"}
            label={"Full Name"}
            type={""}
            placeholder={""}
            value={client?.fullname}
            handleChange={handleChange}
          />
          <TextInput
            id={"email"}
            label={"Email"}
            type={""}
            placeholder={""}
            value={client?.email}
            handleChange={handleChange}
          />
          <TextInput
            id={"additionalemail"}
            label={"Additional Email"}
            type={""}
            placeholder={""}
            value={client?.additionalemail}
            handleChange={handleChange}
          />
          <TextInput
            id={"phone"}
            label={"Phone"}
            type={"phone"}
            placeholder={""}
            value={client?.phone}
            handleChange={handleChange}
          />
          <TextInput
            id={"additionalphone1"}
            label={"Additional Phone 1"}
            type={"phone"}
            placeholder={""}
            value={client?.additionalphone1}
            handleChange={handleChange}
          />
          <TextInput
            id={"additionalphone2"}
            label={"Additional Phone 2"}
            type={"phone"}
            placeholder={""}
            value={client?.additionalphone2}
            handleChange={handleChange}
          />
          <TextInput
            id={"birthdate"}
            label={"Birth Date"}
            type={"date"}
            placeholder={""}
            value={client?.birthdate}
            handleChange={handleChange}
          />
          <TextInput
            id={"mainaddrress"}
            label={"Main Address"}
            type={""}
            placeholder={""}
            value={client?.mainaddrress}
            handleChange={handleChange}
          />
          <TextInput
            id={"countryFrom"}
            label={"Country From"}
            type={""}
            placeholder={""}
            value={client?.countryFrom}
            handleChange={handleChange}
          />
          <TextInput
            id={"city"}
            label={"City"}
            type={""}
            placeholder={""}
            value={client?.city}
            handleChange={handleChange}
          />
          <TextInput
            id={"postcode"}
            label={"Postcode"}
            type={""}
            placeholder={""}
            value={client?.postcode}
            handleChange={handleChange}
          />
          <TextInput
            id={"opening"}
            label={"Opening"}
            type={""}
            placeholder={""}
            value={client?.campaignBy}
            handleChange={handleChange}
          />
          <TextAreaInput id={"remarks"} label={"Remarks"} />
          {/* <TextAreaInput id={"short_desc"} label={"Short Description"} /> */}
          {/* <PhotoInput id={"photo"} label={"Photo"} /> */}
          {/* <PhotoInput id={"photoTwo"} label={"Photo"} /> */}
          {/* <TextInput id={"pack_title"} label={"Pack Title"} /> */}
          {/* <TextInput id={"pack_category"} label={"Pack Category"} /> */}
          {/* <p>Choose currencied and proportions in this pack</p> */}
          <p className="py-6 font-bold text-2xl">
            Create a password for the client
          </p>
          <div className="w-full grid grid-cols-2 gap-8">
            <TextInput
              id={"password"}
              label={"New password"}
              type={"password"}
              placeholder={""}
              handleChange={handleChange}
            />
            <TextInput
              id={"repeatpassword"}
              label={"Repeat New password"}
              type={"password"}
              placeholder={""}
              handleChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-center gap-4">
            <button
              type="submit"
              onClick={handleSubmit}
              className="text-white bg-[#39DE5D] shadow-lg px-6 py-3 rounded-lg"
            >
              <p>Validate</p>
            </button>
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
