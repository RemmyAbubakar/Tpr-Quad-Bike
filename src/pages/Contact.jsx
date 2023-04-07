import React from 'react'

function Contact() {
  return (
    <div className="l:p-10 sm:p-5 rounded-xl">
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
  );
}

export default Contact