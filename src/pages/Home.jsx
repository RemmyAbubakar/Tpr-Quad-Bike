import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import Adventure from "../components/Adventure";
import ContactMap from "../components/ContactMap";
import VideoHome from "../components/VideoHome";

function Home() {
  return (
    <div>
      <div>
        <VideoHome />
      </div>

      <div className="font-rem lg:text-3xl md:text-3xl flex justify-center sm:mt-3">
        <h3>Our Quad Bike Adventure</h3>
      </div>

      <div className="flex justify-center">
        <div className="bg-black lg:w-48 md:w-40 sm:w-20 rounded-full lg:mt-3 md:mt-2 sm:mt-2 h-1 mb-3"></div>
      </div>

      <Adventure />

      <div className="hidden md:flex md:justify-center lg:flex lg:justify-center cursor-pointer">
        <Link to="/gallery">
          <div className="flex lg:mt-4 md:mt-4 justify-center items-center font-saf text-xl mb-10 ">
            <h3>View More</h3>
            <HiArrowRight className="ml-2" />
          </div>
        </Link>
      </div>

      <div className="lg:p-5 md:p-10 sm:p-5 rounded-xl">
        <ContactMap />
      </div>
    </div>
  );
}

export default Home;
