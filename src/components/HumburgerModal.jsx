import React from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { ImFacebook } from "react-icons/im";
import { SiTiktok } from "react-icons/si";

function HumburgerModal({ closeModal }) {
  return (
    <div
      className="modalBackground fixed flex justify-center items-center inset-0 h-[100%] bg-neutral-900 bg-opacity-60 w-[100vw] cursor-pointer"
      onClick={() => {
        closeModal(false);
      }}
    >
      <div className="bg-white rounded-2xl lg:p-10 md:p-10 sm:p-7">
        <div className="flex justify-end">
          <div className="flex">
            <IoClose
              size={30}
              className="cursor-pointer flex justify-end text-black"
              onClick={() => {
                closeModal(false);
              }}
            />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="Lg:space-y-4 md:space-y-3 sm:space-y-3">
            <div className="font-saf font-semibold lg:text-2xl md:text-xl sm:text-xl">
              <Link to="/">
                <h3>Home</h3>
              </Link>
            </div>

            <div className="font-saf font-semibold lg:text-2xl md:text-xl sm:text-xl">
              <Link to="/gallery">
                <h3>Gallery</h3>
              </Link>
            </div>

            <div className="font-saf font-semibold lg:text-2xl md:text-xl sm:text-xl">
              <Link to="/gallery">
                <h3>Contact</h3>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:mt-4 md:mt-4 sm:mt-1">
          <img
            alt=""
            src="/images/quadbikelogo.png"
            className="lg:h-20 md:h-20 sm:h-14 lg:w-36 md:w-36 sm:w-28"
          />
        </div>

        <div className="flex justify-center items-center mt-4">
          <div className="flex justify-center items-center space-x-8">
            <div>
              <IoLogoWhatsapp className="lg:text-3xl md:text-2xl sm:text-2xl" />
            </div>
            <div>
              <AiOutlineInstagram className="lg:text-3xl md:text-2xl sm:text-2xl" />
            </div>
            <div>
              <ImFacebook className="lg:text-3xl md:text-3xl sm:text-2xl" />
            </div>
            <div>
              <SiTiktok className="lg:text-3xl md:text-2xl sm:text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HumburgerModal;
