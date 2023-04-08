import React from "react";

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
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center">
        {images.map((image, index) => (
          <img
            src={image.img}
            className="lg:h-96 md:h-96 sm:h-52 w-[100%] rounded-2xl object-cover"
          />
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
