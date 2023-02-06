import React, { useState } from "react";

const Step_Three = () => {
  const [value, setValue] = useState(false);
  const handleClick = (e) => {
    e.target.classList.toggle("bg-[#BD996A]");
    e.target.classList.toggle("text-white");
    if (e.target.classList.contains("bg-[#BD996A]")) {
      const clicked = e.target.innerText;
      console.log(clicked);
      if (e.target.innerText === "Others") {
        setValue(true);
        console.log("Hello");
      }
      return;
    }
    setValue(false);
  };

  const techStackBtn = [
    "iOS",
    "Android",
    "Kotlin",
    "React Native",
    "Flutter",
    "React",
    "Angular",
    "Vue",
    "Ruby",
    "Node",
    "Java",
    "PHP",
    "Python",
    "Machine Learning",
    "Sales force development",
    "Quality Assurance",
    "Devops",
    "Others",
  ];

  return (
    <>
      <div className="">
        {techStackBtn.map((btn, index) => (
          <button
            onClick={handleClick}
            className="px-4 py-3 bg-white rounded-full m-3 "
            key={index}
          >
            {btn}
          </button>
        ))}
      </div>
      <div>
        {value && (
          <textarea
            className="w-full lg:w-[50%] xl:w-[40%] p-3 rounded border-2 border-black mt-5 h-[150px]"
            placeholder="Please leave your message and continue"
            id=""
          ></textarea>
        )}
      </div>
    </>
  );
};

export default Step_Three;
