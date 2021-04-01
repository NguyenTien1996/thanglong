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
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            waitForAnimate: false
          };
      return (
        <section className="banner">
            <div className="slide-banner">
            <Slider {...settings}>
                    <div className="item"><img src="images/banner.jpg" alt="" /></div>
                    <div className="item"><img src="images/banner.jpg" alt="" /></div>
                    <div className="item"><img src="images/banner.jpg" alt="" /></div>
                    <div className="item"><img src="images/banner.jpg" alt="" /></div>
                    <div className="item"><img src="images/banner.jpg" alt="" /></div>
                </Slider>
        </div>
      </section>
      );
    }
  }