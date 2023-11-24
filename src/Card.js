import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Card() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="SliderDiv">
        <Slider {...sliderSettings }  >
          <div>
            <div className="SliderPage">
             <center> <p>BY ONE GET ONE FREE </p>
             <p>pizza online side pizza <br/> side on pizza starters </p>
             </center>
            </div>
          </div>
          <div>
            <div className="SliderPage">
            <center> <p>BY ONE GET ONE FREE </p>
            <p>pizza online side pizza <br/> side on pizza starters </p>
            </center>
            </div>
          </div>
          <div>
            <div className="SliderPage">
            <center>   <p>BY ONE GET ONE FREE </p>
            <p>pizza online side pizza <br/> side on pizza starters </p>
            </center>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Card;
