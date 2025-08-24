import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carousel from "../Images/carousel.jpg"
const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <Slider {...settings} className="300px">
        <div className="h-300px">
          <img
            src={carousel}
            className="w-full h-full object-cover"
            alt="Slide 1"
          />
        </div>
        <div className="h-300px">
          <img
            src={carousel}
            className="w-full h-full object-cover"
            alt="Slide 2"
          />
        </div>
        <div className="h-300px">
          <img
            src={carousel}
            className="w-full h-full object-cover"
            alt="Slide 3"
          />
        </div>
      </Slider>
    </>
  );
};

export default Carousel;
