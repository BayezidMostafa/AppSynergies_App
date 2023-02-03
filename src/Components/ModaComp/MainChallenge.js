import React, { useState } from "react";

const MainChallenge = () => {
  const firstPageBtnSet = [
    "Validating my product idea",
    "Creating an mvp",
    "Scale an existing product",
    "Driving more sales",
    "Cutting costs",
    "Others",
  ];

  console.log(firstPageBtnSet);

  return (
    <>
      <div className="">
        {firstPageBtnSet.map((btn, index) => (
          <button className="px-4 py-3 bg-white rounded-full m-2" key={index}>
            {btn}
          </button>
        ))}
      </div>
    </>
  );
};

export default MainChallenge;
