import React from "react";

const SelectInput = ({ id, options }) => {
  return (
    <div className="w-full my-4">
      <select id={id} name={id} className="border-b w-full py-2 my-2">
        {options.map((option, i) => (
          <option key={i} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
