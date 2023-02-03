import Image from "next/image";
import React from "react";
import Logo from "../Assets/logo.png";
import { HiOutlineX } from "react-icons/hi";
import FromPoster from "../Assets/form poster.png";
import Form from "./Form";

const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 md:pt-6 md:px-5 pt-3 px-3 ">
      <div className="flex justify-between min-w-[95%]">
        <Image className="w-12 h-12" src={Logo} alt="" />
        <button>
          <HiOutlineX
            onClick={() => onClose()}
            className="text-white text-6xl"
          />
        </button>
      </div>
      <div className="min-h-[80vh] w-[95%] mx-auto mt-5 bg-white md:flex justify-between">
        <div>
          <Form />
        </div>
        <div className="bg-[#FFF0E2] w-full hidden md:block lg:w-[30%] xl:w-[25%]">
          <div className="w-[80%] mx-auto">
            <p className="text-[24px] my-4">What happens next?</p>
            <ul className="text-[14.76px] mb-2">
              <li className="list-disc">
                To help you achieve your goal, first we’d like to better
                understand your needs.
              </li>
              <li className="list-disc">
                we’ll review your application and schedule a estimation call.
              </li>
            </ul>
          </div>
          <Image src={FromPoster} className="w-[95%] mx-auto" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
