import React from "react";
import Slider from "react-slick";

const image = [
  {
    img: "/images/quad1.jpg",
  },
  {
    img: "/images/quad2.jpg",
  },
  {
    img: "/images/quad3.jpg",
  },
  {
    img: "/images/quad4.jpg",
  },
  {
    img: "/images/quad5.jpg",
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
    <div className="flex justify-center mt-3">
      <div className="w-[87%]">
        <Slider {...settings}>
          {image.map((ima, index) => (
            <div className="w-full rounded-3xl h-full flex justify-center items-center">
              <img
                alt=""
                src={ima.img}
                className="w-full lg:h-[30rem] md:h-[20rem] sm:h-[13rem] rounded-xl object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default HomeSlider;
