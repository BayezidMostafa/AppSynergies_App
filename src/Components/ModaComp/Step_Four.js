import React from "react";

const Step_Four = () => {
  return (
    <div>
      <p className="my-6">
        What your project is about? Any specific technologies or solutions you
        are using or would like to introduce? How can we help you?
      </p>
      <textarea
        className="w-full lg:w-[50%] xl:w-[40%] p-3 rounded mt-5 h-[150px]"
        placeholder="Please leave your message and continue*"
      />
    </div>
  );
};

export default Step_Four;
