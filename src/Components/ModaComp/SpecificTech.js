import React from "react";

const SpecificTech = () => {
  const teckStackBtn = [
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
    <div className="">
      {teckStackBtn.map((btn, index) => (
        <button className="px-4 py-3 bg-white rounded-full m-3 " key={index}>
          {btn}
        </button>
      ))}
    </div>
  );
};

export default SpecificTech;
