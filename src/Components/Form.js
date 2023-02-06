import React, { useState } from "react";
import { HiChevronLeft } from "react-icons/hi";
import Step_Five from "./ModaComp/Step_Five";
import Step_Four from "./ModaComp/Step_Four";
import Step_One from "./ModaComp/Step_One";
import Step_Seven from "./ModaComp/Step_Seven";
import Step_Six from "./ModaComp/Step_Six";
import Step_Three from "./ModaComp/Step_Three";
import Step_Two from "./ModaComp/Step_Two";

const Form = () => {
  const [page, setPage] = useState(0);
  const heading = [
    "What are the main challenges you're facing right now?",
    "What can we help you with?",
    "Are there any specific technologies you are looking for?",
    "Tell us more about your project",
    "Great! you are almost done",
    "",
    "",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <Step_One />;
    } else if (page === 1) {
      return <Step_Two />;
    } else if (page === 2) {
      return <Step_Three />;
    } else if (page === 3) {
      return <Step_Four />;
    } else if (page === 4) {
      return <Step_Five />;
    } else if (page === 5) {
      return <Step_Six />;
    } else {
      return <Step_Seven />;
    }
  };

  console.log(page);

  const handleInputData = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
  };

  return (
    <div className="p-10">
      <div className="w-full bg-gray-200 h-2 rounded">
        <div
          style={{
            width:
              page === 0
                ? "14.28%"
                : page === 1
                ? "28.57%"
                : page === 2
                ? "42.85%"
                : page === 3
                ? "57.13%"
                : page === 4
                ? "71.41%"
                : page === 5
                ? "85.69%"
                : "100%",
          }}
          className={`bg-[#ecc59d] h-full rounded transition-all duration-500 ease-in`}
        ></div>
      </div>
      <div>
        <p className="text-[24px] my-5">{heading[page]}</p>
      </div>
      <form onSubmit={handleInputData} className="">
        <div>{PageDisplay()}</div>
        <div className="flex gap-2 mt-5">
          {page !== 0 && (
            <button
              className="bg-white border text-black px-5 py-4 rounded-full flex items-center"
              onClick={() => setPage((currentPage) => currentPage - 1)}
            >
              <HiChevronLeft className="w-7 h-7" />
              <span>Back</span>
            </button>
          )}
          {page === heading.length - 1 ? (
            <>
              <button
                type="submit"
                className="bg-black text-white px-5 py-4 rounded-full"
              >
                Submit
              </button>
            </>
          ) : (
            <>
              <button
                type="submit"
                className="bg-black text-white px-5 py-4 rounded-full"
                onClick={() => setPage((currentPage) => currentPage + 1)}
              >
                Continue
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
