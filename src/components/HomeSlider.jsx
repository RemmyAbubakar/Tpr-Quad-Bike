import React from "react";
import Slider from "react-slick";

const image = [
  {
    img: "/images/bike3.jpg",
  },
  {
    img: "/images/bike7.jpg",
  },
  {
    img: "/images/bike10.jpg",
  },
  {
    img: "/images/bike15.jpg",
  },
  {
    img: "/images/bike20.jpg",
  },
];

function HomeSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="flex justify-center mt-2">
      <div className="lg:w-[90%] md:w-[87%] sm:w-[89%]">
        <Slider {...settings}>
          {image.map((ima, index) => (
            <div className="w-full rounded-3xl h-full flex justify-center items-center relative">
              <img
                alt=""
                src={ima.img}
                className="w-full lg:h-[25rem] md:h-[20rem] sm:h-[13rem] rounded-xl object-cover"
              />

              <div className="sm:flex md:flex lg:flex">
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-2xl bg-black bg-opacity-60 md:p-5">
                  <div className="space-y-3">
                    <p className="flex justify-center text-white text-xl md:text-3xl lg:text-4xl font-pri">
                      Our Quad-Bike Adventure
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default HomeSlider;
