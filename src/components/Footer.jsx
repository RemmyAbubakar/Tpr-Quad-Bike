import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { ImFacebook } from "react-icons/im";
import { SiTiktok } from "react-icons/si";

function Footer() {
  return (
    <div className="py-0 bg-gradient-to-r bottom-0 from-white to-red-100 cursor-pointer">
      <footer className="p-5">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-center">
          <div className="flex justify-center">
            <img
              alt=""
              src="/images/quadbikelogo.png"
              className="lg:ml-14 md:ml-14 sm:ml-7 h-52 w-96 mt-2 sm:h-40 sm:w-72"
            />
          </div>

          <div className="flex justify-center items-center font-rem lg:text-xl md:text-lg sm:text-md">
            <div className="space-y-3">
              <h3 className="flex justify-center items-center">
                No. 1 Quad-Biking Experience in Ghana
              </h3>
              <h3 className="text-xl flex justify-center font-bello font-bold">
                TPR Quad Biking
              </h3>
              <h3 className="text-sm flex justify-center font-saf  mt-2">
                Click “BOOK” below to join the experience.
              </h3>

              <div className="flex justify-center mt-4">
                <div className="w-32 bg-red-800 flex justify-center p-2 rounded-lg text-white text-sm">
                  <h3>Book</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center space-x-10">
              <div>
                <Link to="https://api.whatsapp.com/send/?phone=%2B233558331868&text&type=phone_number&app_absent=0">
                  <IoLogoWhatsapp size={30} />
                </Link>
              </div>
              <div>
                <Link to="https://www.instagram.com/tprquadbiking/">
                  <AiOutlineInstagram size={30} />
                </Link>
              </div>
              <div>
                <Link to="https://www.facebook.com/tprquadbiking/">
                  <ImFacebook size={30} />
                </Link>
              </div>
              <div>
                <Link to="https://www.tiktok.com/@tprquadbiking/">
                  <SiTiktok size={30} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
