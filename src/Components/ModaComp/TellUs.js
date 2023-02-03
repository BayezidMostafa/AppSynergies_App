import React from "react";

const TellUs = () => {
  return (
    <div>
      <p>
        What your project is about? Any specific technologies or solutions you
        are using or would like to introduce? How can we help you?
      </p>
      <textarea
        className="w-full lg:w-[50%] xl:w-[40%] p-3 rounded border-2 border-black mt-5"
        placeholder="Please leave your message and continue"
      />
    </div>
  );
};

export default TellUs;
