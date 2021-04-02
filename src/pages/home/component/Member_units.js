import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MemberUnits = () => {
    const settings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed:1000,
        infinite:true,
        arrows:true
      };
    return(
       <>
           <section className="image-hd">
                <div className="tit-kn">
                    <h2><a href="#">Đơn vị thành viên</a></h2>
                </div>
                <div className="slide-image-hd">
                    <Slider {...settings}>
                        <div className="item">
                            <a href="#"><img src="images/img-hd.jpg" alt="" /></a>
                        </div>
                        <div className="item">
                            <a href="#"><img src="images/img-hd.jpg" alt="" /></a>
                        </div>
                        <div className="item">
                            <a href="#"><img src="images/img-hd.jpg" alt="" /></a>
                        </div>
                        <div className="item">
                            <a href="#"><img src="images/img-hd.jpg" alt="" /></a>
                        </div>
                        <div className="item">
                            <a href="#"><img src="images/img-hd.jpg" alt="" /></a>
                        </div>
                        <div className="item">
                            <a href="#"><img src="images/img-hd.jpg" alt="" /></a>
                        </div>
                    </Slider>
                </div>
            </section>

       </>
    )
}
export default React.memo(MemberUnits);