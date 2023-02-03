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

  return (
    <div>
      <div className="">Progres bar</div>
      <div className="">
        <div>{heading[page]}</div>
        <div>{PageDisplay()}</div>
        <div className="flex gap-2">
          <button
            disabled={page === 0}
            className="bg-black text-white"
            onClick={() => setPage((currentPage) => currentPage - 1)}
          >
            Prev
          </button>
          <button
            disabled={page === heading.length - 1}
            className="bg-black text-white"
            onClick={() => setPage((currentPage) => currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
