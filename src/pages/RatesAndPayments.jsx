import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

function RatesAndPayments() {
  return (
    <div className=" p-4 cursor-pointer">
      <div className="flex justify-center lg:mt-10 md:mt-10 sm:mt-3 mb-1 font-rem lg:text-3xl md:text-3xl">
        <h3>Rates & Payments</h3>
      </div>

      <div className="flex justify-center">
        <div className="bg-black lg:w-24 md:w-24 sm:w-10 rounded-full lg:mt-1 md:mt-1 sm:mt-1 h-1 mb-3"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center md:mt-8 sm:mt-3 lg:mb-10 md:mb-10 sm:mb-3">
        <div className="w-full rounded-3xl h-full flex justify-center items-center relative">
          <img
            src="/images/bike1.jpg"
            className="lg:h-96 md:h-96 sm:h-52 w-[100%] rounded-2xl object-cover"
          />

          <div className="sm:flex md:flex lg:flex">
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-2xl bg-black bg-opacity-60 md:p-5">
              <div className="lg:space-y-4 md:space-y-4 sm:space-y-2">
                <p className="flex justify-center text-white sm:text-xl md:text-2xl lg:text-3xl font-bello font-bold">
                  TPR Quad-Biking
                </p>
                <p className="flex justify-center text-white sm:text-xl md:text-2xl lg:text-2xl font-bello font-bold">
                  10:00am - 11:30am
                </p>
                <p className="flex justify-center text-white sm:text-xl md:text-2xl lg:text-2xl font-bello font-bold">
                  GHS 550
                </p>
                <div className="flex justify-center">
                  <Link to="https://tpr-quad-biking.reservio.com/services">
                    <div className="font-rem bg-red-800 lg:p-2 md:p-2 sm:p-2 text-white md:w-32 sm:w-28 flex justify-center rounded-md font-bold text-sm">
                      <h3>Book</h3>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full rounded-3xl h-full flex justify-center items-center relative">
          <img
            src="/images/bike8.jpg"
            className="lg:h-96 md:h-96 sm:h-52 w-[100%] rounded-2xl object-cover"
          />

          <div className="sm:flex md:flex lg:flex">
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-2xl bg-black bg-opacity-60 md:p-5">
              <div className="lg:space-y-4 md:space-y-4 sm:space-y-2">
                <p className="flex justify-center text-white sm:text-xl md:text-2xl lg:text-3xl font-bello font-bold">
                  TPR Quad-Biking
                </p>
                <p className="flex justify-center text-white sm:text-xl md:text-2xl lg:text-2xl font-bello font-bold">
                  12:00pm - 1:30pm
                </p>
                <p className="flex justify-center text-white sm:text-xl md:text-2xl lg:text-2xl font-bello font-bold">
                  GHS 550
                </p>
                <div className="flex justify-center">
                  <Link to="https://tpr-quad-biking.reservio.com/services">
                    <div className="font-rem bg-red-800 lg:p-2 md:p-2 sm:p-2 text-white md:w-32 sm:w-28 flex justify-center rounded-md font-bold text-sm">
                      <h3>Book</h3>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full rounded-3xl h-full flex justify-center items-center relative">
          <img
            src="/images/bike4.jpg"
            className="lg:h-96 md:h-96 sm:h-52 w-[100%] rounded-2xl object-cover"
          />

          <div className="sm:flex md:flex lg:flex">
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-2xl bg-black bg-opacity-60 md:p-5">
              <div className="lg:space-y-4 md:space-y-4 sm:space-y-2">
                <p className="flex justify-center text-white sm:text-xl md:text-2xl lg:text-3xl font-bello font-bold">
                  TPR Quad-Biking
                </p>
                <p className="flex justify-center text-white sm:text-xl md:text-2xl lg:text-2xl font-bello font-bold">
                  2:00pm - 3:30pm
                </p>
                <p className="flex justify-center text-white sm:text-xl md:text-2xl lg:text-2xl font-bello font-bold">
                  GHS 550
                </p>
                <div className="flex justify-center">
                  <Link to="https://tpr-quad-biking.reservio.com/services">
                    <div className="font-rem bg-red-800 lg:p-2 md:p-2 sm:p-2 text-white md:w-32 sm:w-28 flex justify-center rounded-md font-bold text-sm">
                      <h3>Book</h3>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RatesAndPayments;
