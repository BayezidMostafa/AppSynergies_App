import Image from "next/image";
import React from "react";
import Logo from "../../Assets/logo.png";

const Step_Six = () => {
  return (
    <div className="">
      <div className="w-[50%]">
        <div className="flex flex-col w-1/5 items-center">
          <Image className="w-16 h-16" src={Logo} alt="" />
          <span className="border-b-4 border-[#BB9A6A]">AppSynergies</span>
        </div>
        <p className="text-2xl">
          Book a call with an expert to create your dream project
        </p>
        <div>
          <p>
            We would like to schedule a 30-minute online meeting with you to get
            to know each other.
          </p>
          <p>
            For the upcoming conversation, we would like to propose the
            following agenda:
          </p>
        </div>
        <div>
          <p>- Short introduction</p>
          <p>- Q&A regarding the app to better understand your idea</p>
          <p>- Your budget</p>
          <p>- Your questions</p>
          <p>- Further process and the next steps</p>
        </div>
        <p className="mt-2">
          For the Q&A, here are the most important questions:
        </p>
        <div>
          <p>
            - Vision: How was your idea born & what is your long term vision?
          </p>
          <p>
            - Mission: What is your main long-term goal (5-10 years from now)?
          </p>
          <p>
            - Business goal: What business goal do you want to achieve (1-3
            years from now)?
          </p>
          <p>
            - Product goal: What problem do you want to solve for your users?
          </p>
        </div>
        <div className="mt-3">
          <p>
            Don’t worry if you do not have all the answers! We will help you
            discover them.
          </p>
          <p>
            If there is anything you would like to add to the agenda, please let
            us know, and we will update it.
          </p>
        </div>
        <p>We are excited to talk to you soon!</p>
      </div>
    </div>
  );
};

export default Step_Six;
