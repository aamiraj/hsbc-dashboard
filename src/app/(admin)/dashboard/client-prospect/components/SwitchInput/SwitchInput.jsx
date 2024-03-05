import React from "react";

const SwitchInput = ({ checked, withLabel }) => {
  return (
    <div className="w-max text-lg flex items-center justify-center gap-4">
      {withLabel ? "On" : ""}
      <label className="switch">
        <input type="checkbox" defaultChecked={checked} />
        <span className="slider round"></span>
      </label>
      {withLabel ? "Off" : ""}
    </div>
  );
};

export default SwitchInput;
