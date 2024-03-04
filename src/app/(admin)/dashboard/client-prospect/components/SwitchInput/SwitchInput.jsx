import React from "react";

const SwitchInput = ({checked}) => {
  return (
    <div className="w-max text-lg flex items-center justify-center gap-4">
        On
      <label className="switch">
        <input type="checkbox" defaultChecked={checked} />
        <span className="slider round"></span>
      </label>
      Off
    </div>
  );
};

export default SwitchInput;
