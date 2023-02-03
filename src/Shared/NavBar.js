import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../Assets/logo.png";
import Company_Name from "../Assets/company_name.png";
import Image from "next/image";
import Modal from "@/Components/Modal";

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Head>
        <title></title>
        <meta name="" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="w-full shadow relative">
        <div className="justify-between mx-auto px-3 md:px-5 md:items-center flex py-3 md:py-6 transition-all ease-in duration-500">
          <div className="flex justify-center items-center gap-3">
            <Link href={``}>
              <Image src={Logo} alt="Main Logo" />
            </Link>
            <Link href="" className="border-b-2 border-[#BD996A]">
              <Image src={Company_Name} alt="company_name" />
            </Link>
          </div>
          <ul className="items-center justify-center space-y-8 md:flex hidden space-x-0 md:space-x-1 lg:space-x-10 text-[16px] md:space-y-0">
            <li className="text-black">
              <Link href="/">Services</Link>
            </li>
            <li className="text-black">
              <Link href="/ourblogs">Our Apps</Link>
            </li>
            <li className="text-black">
              <Link href="/industries">Industries</Link>
            </li>
            <li className="text-black">
              <Link href="/about">About</Link>
            </li>
            <li className="text-black">
              <Link href="/careers">Careers</Link>
            </li>
            <li onClick={() => setShowModal(true)}>
              <Link
                href={``}
                className="text-black border border-black md:p-2 lg:p-4 hover:border-[#BD996A] hover:bg-[#BD996A]"
              >
                Estimate Projects
              </Link>
            </li>
          </ul>
          <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
          <div className="md:hidden flex">
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div
              className={`${
                !navbar ? "hidden" : "flex"
              } absolute w-[90%] h-screen top-[72px] right-0 z-10 bg-white sidebar shadow-lg`}
            >
              <ul className="items-center w-[100%] pt-10 flex gap-3 flex-col">
                <li className="text-black text-3xl">Menu</li>
                <li className="text-black text-xl">
                  <Link href="/">Services</Link>
                </li>
                <li className="text-black text-xl">
                  <Link href="/blogs">Our Apps</Link>
                </li>
                <li className="text-black text-xl">
                  <Link href="/about">Industries</Link>
                </li>
                <li className="text-black text-xl">
                  <Link href="/contact">About</Link>
                </li>
                <li className="text-black text-xl">
                  <Link href="/contact">Career</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div></div>
      </nav>
    </div>
  );
};

export default NavBar;
