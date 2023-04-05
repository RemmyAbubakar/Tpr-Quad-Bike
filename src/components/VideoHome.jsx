import React from "react";

function VideoHome() {
  return (
    <div className="lg:p-10 md:p-7 sm:p-4 cursor-pointer">
      <div className="w-full rounded-3xl h-full">
        <video
          src="/images/quadbikevid.mp4"
          autoPlay
          loop
          controls
          className="w-full rounded-3xl object-cover"
        />
      </div>
    </div>
  );
}

export default VideoHome;
