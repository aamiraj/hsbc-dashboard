import React from "react";
import TextInput from "../TextInput/TextInput";

const experiences = [
  {
    question:
      "Which experience level do you have with derivatives or leveraged products such as CFDs?",
    options: ["1-2 years", "Less than a year", "I've never traded"],
  },
  {
    question: "Which definition best fits your trading strategy?",
    options: ["1-2 years", "Less than a year", "I've never traded"],
  },
  {
    question: "Which answer best describes your main objective?",
    options: ["1-2 years", "Less than a year", "I've never traded"],
  },
];

const Experience = () => {
  return (
    <div className="rounded-lg border w-full p-8 ">
      <div>
        <ul>
          {experiences.map((exp, i) => (
            <li key={i} className="p-4">
              <div>
                <p className="text-lg font-bold">{exp.question}</p>
                <div className="flex items-center justify-start gap-4 py-2">
                  {exp.options.map((opt, i) => (
                    <div key={i}>
                      <input type="radio" id={opt} />
                      <label htmlFor={opt}>{opt}</label>
                    </div>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4">
        <TextInput
          id={"source_of_income"}
          label={"What is your main source of income?"}
        />
        <TextInput
          id={"source_of_income"}
          label={"What is your main source of income?"}
        />
      </div>
      <div className="flex items-center justify-center gap-4">
        <div className="text-white bg-[#39DE5D] shadow-lg px-6 py-3 rounded-lg">
          <p>Send</p>
        </div>
        <div className="text-white bg-[#000000] shadow-lg px-6 py-3 rounded-lg">
          <p>Close</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
