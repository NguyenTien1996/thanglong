import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends React.Component {
    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 1500,
            slidesToShow: 1,
            slidesToScroll: 1,
            waitForAnimate: false,
            autoplay:1
          };
      return (
        <section className="banner">
            <div className="slide-banner">
            <Slider {...settings}>
                    <img src="images/banner.jpg" alt="" />
                    <img src="images/banner.jpg" alt="" />
                    <img src="images/banner.jpg" alt="" />
                    <img src="images/banner.jpg" alt="" />
                    <img src="images/banner.jpg" alt="" />
                </Slider>
        </div>
      </section>
      );
    }
  }