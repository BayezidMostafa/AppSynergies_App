import Image from "next/image";
import React from "react";
import Logo from "../Assets/logo.png";
import { HiOutlineX } from "react-icons/hi";

const Modal = ({ children, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 md:pt-6 md:px-5 pt-3 px-3">
      <div className="flex justify-between min-w-[95%]">
        <Image className="w-12 h-12" src={Logo} alt="" />
        <button>
          <HiOutlineX
            onClick={() => onClose()}
            className="text-white text-6xl"
          />
        </button>
      </div>
      <div className="min-h-[80vh] w-[95%] mx-auto mt-5 bg-white">
        {children}
      </div>
    </div>
  );
};

export default Modal;
