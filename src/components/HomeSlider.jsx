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
    <div className="flex justify-center">
      <div className="w-[87%]">
        <Slider {...settings}>
          {image.map((ima, index) => (
            <div className="w-full h-96">
              <img
                alt=""
                src={ima.img}
                className="w-full h-full object-cover object-center rounded-xl"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default HomeSlider;
