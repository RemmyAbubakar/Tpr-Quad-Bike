import React from 'react'
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { SlPhone } from "react-icons/sl";


function Footer() {
  return (
    <div className="py-0 sticky bottom-0 z-50 bg-gradient-to-r from-white to-red-100 shadow-2xl rounded-t-2xl cursor-pointer p-4 h-14 lg:hidden md:hidden ">
      <nav className=" mt-4">
        <div className="flex justify-between items-center">
          <div className="mt-4">
            <AiOutlineHome size={30} />
          </div>
          <div className="mt-4">
            <RxDashboard size={30} />
          </div>
          <div className="mt-4">
            <SlPhone size={30} />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Footer