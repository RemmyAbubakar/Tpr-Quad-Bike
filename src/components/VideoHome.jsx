import React from "react";

function VideoHome() {
  return (
    <div className="lg:p-10 md:p-7 sm:p-4 cursor-pointer">
      <div className="w-full rounded-3xl h-full">
        <img
          src="/images/quadbikevid.gif"
          className="w-full rounded-xl object-cover"
        />
      </div>
    </div>
  );
}

export default VideoHome;
