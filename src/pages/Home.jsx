import React from "react";
import Adventure from "../components/Adventure";
import VideoHome from "../components/VideoHome";

function Home() {
  return (
    <div>
      <div>
        <VideoHome />
      </div>

      <div className="font-rem lg:text-3xl md:text-3xl flex justify-center sm:mt-3">
        <h3>Quad Bike Adventure</h3>
      </div>

      <div className="flex justify-center">
        <div className="bg-black lg:w-48 md:w-40 sm:w-20 rounded-full lg:mt-3 md:mt-2 sm:mt-2 h-1 mb-3"></div>
      </div>

      <Adventure />
    </div>
  );
}

export default Home;
