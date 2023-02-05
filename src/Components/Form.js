import React, { useState } from "react";
import Help from "./ModaComp/Help";
import MainChallenge from "./ModaComp/MainChallenge";
import SpecificTech from "./ModaComp/SpecificTech";
import TellUs from "./ModaComp/TellUs";

const Form = () => {
  const [page, setPage] = useState(0);
  const heading = [
    "What are the main challenges you're facing right now?",
    "What can we help you with?",
    "Are there any specific technologies you are looking for?",
    "Tell us more about your project",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <MainChallenge />;
    } else if (page === 1) {
      return <Help />;
    } else if (page === 2) {
      return <SpecificTech />;
    } else {
      return <TellUs />;
    }
  };

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
                ? "25%"
                : page === 1
                ? "50%"
                : page === 2
                ? "75%"
                : "100%",
          }}
          className={`bg-[#ecc59d] h-full rounded transition-all duration-500 ease-in`}
        ></div>
      </div>
      <div>
        <p className="text-[24px] my-5">{heading[page]}</p>
      </div>
      <form id="myform" onSubmit={handleInputData} className="">
        <div>{PageDisplay()}</div>
        <div className="flex gap-2 mt-5">
          {page !== 0 && (
            <button
              className="bg-white border text-black px-5 py-4 rounded-full"
              onClick={() => setPage((currentPage) => currentPage - 1)}
            >
              Prev
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
