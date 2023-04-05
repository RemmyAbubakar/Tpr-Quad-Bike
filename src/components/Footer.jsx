import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { ImFacebook } from "react-icons/im";
import { SiTiktok } from "react-icons/si";

function Footer() {
  return (
    <div className="p-5 shadow-2xl rounded-t-md">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-10 justify-center">
        <div className="flex justify-center">
          <img
            alt=""
            src="/images/quadbikelogo.png"
            className="lg:ml-14 md:ml-14 sm:ml-7 h-52 w-96 mt-2 sm:h-40 sm:w-72"
          />
        </div>

        <div className="flex justify-center items-center font-rem lg:text-xl md:text-xl sm:text-md">
          <div>
            <h3>
              No. 1 Quad-Biking Experience in Ghana <br />
              <span className="text-xl flex justify-center font-bello font-bold">
                TPR Quad Biking
              </span>
              <span className="text-sm flex justify-center font-poppins mt-2">
                Click “BOOK” below to join the experience.
              </span>
            </h3>

            <div className="flex justify-center mt-4">
              <div className="w-32 bg-red-800 flex justify-center p-1 rounded-lg text-white">
                <h3>Book</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center space-x-4">
            <div>
              <IoLogoWhatsapp size={30} />
            </div>
            <div>
              <AiOutlineInstagram size={30} />
            </div>
            <div>
              <ImFacebook size={30} />
            </div>
            <div>
              <SiTiktok size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
