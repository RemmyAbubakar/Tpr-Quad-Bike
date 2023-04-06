import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

function Adventure() {
  return (
    <div className=" p-4 cursor-pointer">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
        <img
          src="/images/quad5.jpg"
          className="lg:h-96 md:h-96 sm:h-52 w-[100%] rounded-2xl object-cover"
        />
        <img
          src="/images/quad2.jpg"
          className="lg:h-96 md:h-96 sm:h-52 w-[100%] rounded-2xl object-cover"
        />
        <img
          src="/images/quad4.jpg"
          className="lg:h-96 md:h-96 sm:h-52 w-[100%] rounded-2xl object-cover"
        />

        <Link to="/gallery">
          <div className="flex justify-center items-center sm:h-52 lg:hidden md:hidden">
            <img
              src="/images/quad5.jpg"
              className="object-cover h-52 opacity-20 rounded-2xl"
            />

            <div className="flex justify-center items-center absolute">
              <h3 className="font-rem absolute w-32">View More</h3>
              <HiArrowRight className="ml-20 absolute" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Adventure;
