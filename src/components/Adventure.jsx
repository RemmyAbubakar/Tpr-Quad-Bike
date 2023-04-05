import React from "react";
import { Fade } from "react-awesome-reveal";

function Adventure() {
  return (
    <div className="mb-10 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">
        <Fade left>
          <img
            src="/images/quad5.jpg"
            className="h-52 w-[100%] rounded-2xl object-cover"
          />
        </Fade>

        <Fade right>
          <img
            src="/images/quad2.jpg"
            className="h-52 w-[100%] rounded-2xl object-cover"
          />
        </Fade>

        <Fade up>
          <img
            src="/images/quad4.jpg"
            className="h-52 w-[100%] rounded-2xl object-cover"
          />
        </Fade>
      </div>
    </div>
  );
}

export default Adventure;
