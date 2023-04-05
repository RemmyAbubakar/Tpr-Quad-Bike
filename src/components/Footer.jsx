import React from 'react'
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { SlPhone } from "react-icons/sl";


function Footer() {
  return (
    <div className="py-0 sticky bottom-0 z-50 bg-black shadow-3xl rounded-t-[1.5rem] cursor-pointer p-4 h-[4.5rem] lg:hidden md:hidden ">
      <nav className=" mt-4">
        <div className="flex justify-between items-center">
          <div className="mt-4 ml-2">
            <div className="flex justify-center">
              <AiOutlineHome size={25} color="white" />
            </div>
            <div>
              <h3 className="text-white">Home</h3>
            </div>
          </div>

          <div className="mt-4 ml-2">
            <div className="flex justify-center">
              <RxDashboard size={25} color="white" />
            </div>
            <div>
              <h3 className="text-white">Gallery</h3>
            </div>
          </div>

          <div className="mt-4 ml-2">
            <div className="flex justify-center">
              <SlPhone size={25} color="white" />
            </div>
            <div>
              <h3 className="text-white">Contact</h3>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Footer