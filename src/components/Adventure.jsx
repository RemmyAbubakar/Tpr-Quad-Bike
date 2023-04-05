import React from "react";

function Adventure() {
  return (
    <div className="mb-10 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">
        <img
          src="/images/quad5.jpg"
          className="h-52 w-[100%] rounded-2xl object-cover"
        />
        <img
          src="/images/quad2.jpg"
          className="h-52 w-[100%] rounded-2xl object-cover"
        />
        <img
          src="/images/quad4.jpg"
          className="h-52 w-[100%] rounded-2xl object-cover"
        />
      </div>
    </div>
  );
}

export default Adventure;
