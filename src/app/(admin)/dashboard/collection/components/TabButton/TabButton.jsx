"use client";

import React from "react";

const TabButton = ({ text, id, isDefault, handleClick }) => {
 
  return (
    <button
      type="button"
      onClick={(e) => handleClick(e, id)}
      className={`tab_button ${isDefault ? "active" : ""}`}
    >
      {text}
    </button>
  );
};

export default TabButton;
