import React from "react";
import { Link } from "react-router-dom";
import ContactMap from "../components/ContactMap";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { ImFacebook } from "react-icons/im";
import { SiTiktok } from "react-icons/si";

function Contact() {
  return (
    <div className="mb-10 cursor-pointer">
      <div className="lg:p-5 md:p-10 sm:p-5 rounded-xl">
        <ContactMap />
      </div>

      <div className="flex justify-center mt-8 mb-1 font-rem lg:text-3xl md:text-3xl">
        <h3>Connect with us!</h3>
      </div>

      <div className="flex justify-center">
        <div className="bg-black lg:w-24 md:w-24 sm:w-10 rounded-full lg:mt-1 md:mt-1 sm:mt-1 h-1 mb-3"></div>
      </div>

      <div className="flex justify-center font-saf lg:mt-5 md:mt-5 text-center sm:p-4">
        <h3>
          You can click the button to chat with us directly and reserve via
          WhatsApp
        </h3>
      </div>

      <div className="flex justify-center lg:mt-8 md:mt-8 sm:mt-4 lg:space-x-5 md:space-x-5 sm:space-x-3">
        <Link to="https://api.whatsapp.com/send/?phone=%2B233558331868&text&type=phone_number&app_absent=0">
          <img
            alt=""
            src="/images/whatsappicon.png"
            className="lg:h-20 md:h-20 sm:h-14 lg:w-20 md:w-20 w-14 rounded-full"
          />
        </Link>

        <Link to="https://www.instagram.com/tprquadbiking/">
          <img
            alt=""
            src="/images/in.png"
            className="lg:h-20 md:h-20 sm:h-14 lg:w-20 md:w-20 w-14rounded-full"
          />
        </Link>

        <Link to="https://www.tiktok.com/@tprquadbiking/">
          <img
            alt=""
            src="/images/ticktok.png"
            className="lg:h-20 md:h-20 sm:h-14 lg:w-20 md:w-20 w-14 rounded-full"
          />
        </Link>

        <Link to="https://www.facebook.com/tprquadbiking/">
          <img
            alt=""
            src="/images/facebook_icon_133036.png"
            className="lg:h-20 md:h-20 sm:h-14 lg:w-20 md:w-20 w-14 rounded-full"
          />
        </Link>
      </div>
    </div>
  );
}

export default Contact;
