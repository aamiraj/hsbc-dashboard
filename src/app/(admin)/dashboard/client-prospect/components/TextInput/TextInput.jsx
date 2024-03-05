import React from "react";

const TextInput = ({ id, label, type, placeholder }) => {
  return (
    <div className="w-full my-4">
      <label htmlFor={id} className="text-lg">{label}</label>
      <input
        type={!!type ? type : "text"}
        name={id}
        id={id}
        className="border-b w-full py-2 my-2 outline-none"
        placeholder={!!placeholder ? placeholder : "Type Here..."}
      />
    </div>
  );
};

export default TextInput;
