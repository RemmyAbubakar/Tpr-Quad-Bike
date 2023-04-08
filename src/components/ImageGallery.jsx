import React, { useState } from "react";
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";

const images = [
  {
    img: "/images/bike1.jpg",
  },
  {
    img: "/images/bike2.jpg",
  },
  {
    img: "/images/bike3.jpg",
  },
  {
    img: "/images/bike4.jpg",
  },
  {
    img: "/images/bike5.jpg",
  },

  {
    img: "/images/bike6.jpg",
  },
  {
    img: "/images/bike7.jpg",
  },
  {
    img: "/images/bike8.jpg",
  },
  {
    img: "/images/bike9.jpg",
  },
  {
    img: "/images/bike10.jpg",
  },

  {
    img: "/images/bike11.jpg",
  },
  {
    img: "/images/bike12.jpg",
  },
  {
    img: "/images/bike13.jpg",
  },
  {
    img: "/images/bike14.jpg",
  },
  {
    img: "/images/bike15.jpg",
  },

  {
    img: "/images/bike16.jpg",
  },
  {
    img: "/images/bike17.jpg",
  },
  {
    img: "/images/bike18.jpg",
  },
  {
    img: "/images/bike19.jpg",
  },
  {
    img: "/images/bike20.jpg",
  },
];

function ImageGallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const toggleModal = (index) => setSelectedImageIndex(index);

  const navigate = (direction) => {
    setSelectedImageIndex((prevIndex) =>
      direction === "next"
        ? (prevIndex + 1) % images.length
        : (prevIndex - 1 + images.length) % images.length
    );
  };


  const selectImage = (index) => {
    setSelectedImageIndex(index);
  };

  
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.img}
            alt={image.alt}
            onClick={() => selectImage(index)}
            className="lg:h-96 md:h-96 sm:h-52 w-[100%] rounded-2xl object-cover"
          />
        ))}
      </div>

      {selectedImageIndex !== null && (
        <div className="modalBackground fixed flex justify-center items-center inset-0 h-[100%] bg-neutral-900 bg-opacity-90 w-[100vw] cursor-pointer">
          <button
            onClick={() => navigate("prev")}
            className="absolute lg:mr-[60rem] md:mr-[40rem] sm:mr-[21rem] sm:mt-20"
          >
            <BsArrowLeftCircleFill color="white" className="text-5xl" />
          </button>
          <button
            onClick={() => navigate("next")}
            className="absolute lg:ml-[60rem] md:ml-[40rem] sm:ml-[21rem] sm:mt-20"
          >
            <BsArrowRightCircleFill color="white" className="text-5xl" />
          </button>
          <button
            onClick={() => toggleModal(null)}
            className="absolute lg:mb-[35rem] md:mb-[35rem] sm:mb-96 lg:ml-[80rem] md:ml-[33rem] sm:ml-80"
          >
            <IoMdCloseCircle color="white" className="text-5xl" />
          </button>
          <div className="rounded-2xl lg:p-10 md:p-10 sm:p-7">
            <img
              src={images[selectedImageIndex].img}
              alt={images[selectedImageIndex].alt}
              className="lg:h-[40rem] md:h-[40rem] sm:h-[30rem] w-[100%] mt-20 rounded-2xl object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageGallery;
