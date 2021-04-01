import React from 'react';
import Slider from "react-slick";


const BannerComponent = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
      };
     
    return(
       <>
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
       </>
    )
}
export default BannerComponent;