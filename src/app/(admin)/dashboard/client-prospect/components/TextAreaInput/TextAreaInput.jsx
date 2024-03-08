import React from "react";

const TextAreaInput = ({ id, label }) => {
  return (
    <div className="w-full">
      <label htmlFor={id}>{label}</label>
      <textarea
        name={id}
        id={id}
        className="border rounded w-full py-2 my-2"
        cols={10}
        rows={4}
      ></textarea>
    </div>
  );
};

export default TextAreaInput;
