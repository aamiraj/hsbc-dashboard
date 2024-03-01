import React from "react";

const Selectbox = ({ optionList, defaultOption }) => {
  return (
    <div>
      <select
        name="timerange"
        id="timerange"
        className="flex items-center justify-between rounded-lg gap-2 p-2 bg-[#1C1C1C0D]  text-[#7E7E7E]"
      >
        {optionList.map(({ text, value }, i) => (
          <option key={i} value={value} className="text-sm">
            {text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selectbox;
