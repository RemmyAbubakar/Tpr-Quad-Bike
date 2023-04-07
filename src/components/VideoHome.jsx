import React from "react";

function VideoHome() {
  return (
    <div className="lg:p-10 md:p-7 sm:p-4 cursor-pointer ">
      <div className="w-full rounded-3xl h-full relative flex justify-center items-center">
        <img
          alt=""
          src="/images/quadbikevid.gif"
          className="w-full rounded-xl object-cover"
        />

        <div className="hidden md:flex lg:flex">
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black rounded-2xl bg-opacity-60 md:p-5">
            <div className="space-y-3">
              <p className="flex justify-center text-white text-xl md:text-3xl lg:text-4xl font-saf">
                Welcome to
              </p>

              <p className="flex justify-center text-white text-xl md:text-3xl lg:text-5xl font-bold font-pri">
                TOTAL PRESTIGE RACING
              </p>

              <p className="flex justify-center text-white text-xl md:text-xl lg:text-md font-saf font-normal">
                Enjoy a new quad-biking experience with the best!
              </p>

              <p className="flex justify-center text-white text-xl md:text-sm lg:text-lg font-saf font-normal">
                We offer high-quality quad bikes and a highly skilled team to
                make your quad-biking moments once in a lifetime.
              </p>

              <div className="flex justify-center">
                <div className="font-rem bg-red-800 lg:p-2 md:p-2 sm:p-1 text-white md:w-32 sm:w-20 flex justify-center rounded-lg mr-6 sm:mr-4 font-bold text-sm">
                  <h3>Book</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex lg:flex justify-center mt-20 space-x-5">
        <img alt="" src="/images/quadjump2.jpg" className="h-96 w-96" />
        <img alt="" src="/images/quadjump3.jpg" className="h-96 w-96" />
      </div>

      <div className="hidden md:flex lg:flex mt-3 justify-center">
        <div className="font-rem bg-red-800 lg:p-2 md:p-2 sm:p-1 text-white md:w-32 sm:w-20 flex justify-center rounded-lg mr-6 sm:mr-4 font-bold text-sm">
          <h3>Book</h3>
        </div>
      </div>

      <div className="lg:hidden md:hidden flex justify-center items-center mt-5">
        <div className="space-y-2">
          <h3 className="flex justify-center text-lg font-saf">Welcome to</h3>
          <h3 className="flex justify-center text-2xl font-pri">
            TOTAL PRESTIGE RACING
          </h3>
          <h3 className="flex justify-center text-md font-saf font-normal">
            Enjoy a new quad-biking experience with the best!
          </h3>
          <h3 className="flex justify-center text-md font-saf font-normal text-center	">
            We offer high-quality quad bikes and a highly skilled team to make
            your quad-biking moments once in a lifetime.
          </h3>

          <div className="flex justify-center">
            <img alt="" src="/images/quadjump2.jpg" className="h-52 w-52" />
          </div>

          <div className="flex justify-center">
            <div className="font-rem bg-red-800 p-2 text-white w-28 mt-3 flex justify-center rounded-md mr-6 sm:mr-4 font-bold text-sm">
              <h3>Book</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoHome;
