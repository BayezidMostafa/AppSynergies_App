import React from "react";

const Help = () => {
  const helpBtnSet = [
    "Product idea ideation & validation",
    "UX/UI design",
    "Software development",
    "Cloud / DevOps",
    "Data science & engineering / Machine learning",
    "Digital transformation / Process optimization",
    "Others",
  ];
  return (
    <>
      <div>
        {helpBtnSet.map((btn, index) => (
          <button className="px-4 py-3 bg-white rounded-full m-2" key={index}>
            {btn}
          </button>
        ))}
      </div>
    </>
  );
};

export default Help;
