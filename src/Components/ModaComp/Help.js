import React, { useState } from "react";

const Help = () => {
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
          <button
            onClick={handleClick}
            className="px-4 py-3 bg-white rounded-full m-2"
            key={index}
          >
            {btn}
          </button>
        ))}
      </div>
      <div>
        {value && (
          <div>
            <textarea
              className="w-full lg:w-[50%] xl:w-[40%] p-3 rounded border-2 border-black mt-5 h-[150px]"
              placeholder="Please leave your message and continue"
              id=""
            ></textarea>
          </div>
        )}
      </div>
    </>
  );
};

export default Help;
