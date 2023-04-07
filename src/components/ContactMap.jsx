import React from "react";

function ContactMap() {
  return (
    <div>
      <div className="flex justify-center mt-8 sm:mt-3 mb-1 font-rem lg:text-3xl md:text-3xl">
        <h3>Find Us</h3>
      </div>

      <div className="flex justify-center">
        <div className="bg-black lg:w-24 md:w-24 sm:w-10 rounded-full lg:mt-1 md:mt-1 sm:mt-1 h-1 mb-3"></div>
      </div>


      <div className="l:p-10 sm:p-2 rounded-xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.8630410083842!2d-0.1681546848940379!3d5.874867331992425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf714b4970ee1d%3A0x5b8851d9dec980d9!2sTPR%20QUAD%20BIKING%20ADVENTURE!5e0!3m2!1sen!2sgh!4v1680884828030!5m2!1sen!2sgh"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="rounded-2xl w-full object-cover sm:h-96"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactMap;
