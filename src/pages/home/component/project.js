import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Project = () => {
    const settings = {
        slidesToShow: 2,
        slidesToScroll: 1,
        rows:2,
        infinite:true,
        dots: true,
        autoplaySpeed:1000,
      };
    return(
       <>
           <section className="project">
            <div className="container">
                <div className="project-id">
                <h2><a href="#">Dự án tiêu biểu</a></h2>
                <div className="list-item-prj">
                    <div className="item-prj">
                        <p className="tit"><a href="#">Lĩnh vực đâu tư</a></p>
                        <div className="slide-prj-id">
                            <div className="item-big">
                                <Slider {...settings}>
                                    <div className="item">
                                        <div className="item-mar">
                                            <div className="img">
                                                <a href="#"><img src="images/prj-id.jpg" alt="" /></a>
                                            </div>
                                            <div className="text">
                                                <h3><a href="#">Hội nghị xúc tiến đầu tư
                                                    trà vinh 2020</a></h3>
                                                <a href="#" className="see-more">Chi tiết</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="item-mar">
                                            <div className="img">
                                                <a href="#"><img src="images/prj-id.jpg" alt="" /></a>
                                            </div>
                                            <div className="text">
                                                <h3><a href="#">Hội nghị xúc tiến đầu tư
                                                    trà vinh 2020</a></h3>
                                                <a href="#" className="see-more">Chi tiết</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="item-mar">
                                            <div className="img">
                                                <a href="#"><img src="images/prj-id.jpg" alt="" /></a>
                                            </div>
                                            <div className="text">
                                                <h3><a href="#">Hội nghị xúc tiến đầu tư
                                                    trà vinh 2020</a></h3>
                                                <a href="#" className="see-more">Chi tiết</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="item-mar">
                                            <div className="img">
                                                <a href="#"><img src="images/prj-id.jpg" alt="" /></a>
                                            </div>
                                            <div className="text">
                                                <h3><a href="#">Hội nghị xúc tiến đầu tư
                                                    trà vinh 2020</a></h3>
                                                <a href="#" className="see-more">Chi tiết</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="item-mar">
                                            <div className="img">
                                                <a href="#"><img src="images/prj-id.jpg" alt="" /></a>
                                            </div>
                                            <div className="text">
                                                <h3><a href="#">Hội nghị xúc tiến đầu tư
                                                    trà vinh 2020</a></h3>
                                                <a href="#" className="see-more">Chi tiết</a>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                    <div className="item-prj">
                    <p className="tit"><a href="#">Thi công xây lắp</a></p>
                    <div className="slide-prj-id">
                            <div className="slider">
                                <div className="item-big">
                                        <Slider {...settings}>
                                                <div className="item">
                                                    <div className="item-mar">
                                                        <div className="img">
                                                            <a href="#"><img src="images/prj-id.jpg" alt="" /></a>
                                                        </div>
                                                        <div className="text">
                                                            <h3><a href="#">Hội nghị xúc tiến đầu tư
                                                                trà vinh 2020</a></h3>
                                                            <a href="#" className="see-more">Chi tiết</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="item-mar">
                                                        <div className="img">
                                                            <a href="#"><img src="images/prj-id.jpg" alt="" /></a>
                                                        </div>
                                                        <div className="text">
                                                            <h3><a href="#">Hội nghị xúc tiến đầu tư
                                                                trà vinh 2020</a></h3>
                                                            <a href="#" className="see-more">Chi tiết</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="item-mar">
                                                        <div className="img">
                                                            <a href="#"><img src="images/prj-id.jpg" alt="" /></a>
                                                        </div>
                                                        <div className="text">
                                                            <h3><a href="#">Hội nghị xúc tiến đầu tư
                                                                trà vinh 2020</a></h3>
                                                            <a href="#" className="see-more">Chi tiết</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="item-mar">
                                                        <div className="img">
                                                            <a href="#"><img src="images/prj-id.jpg" alt="" /></a>
                                                        </div>
                                                        <div className="text">
                                                            <h3><a href="#">Hội nghị xúc tiến đầu tư
                                                                trà vinh 2020</a></h3>
                                                            <a href="#" className="see-more">Chi tiết</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="item-mar">
                                                        <div className="img">
                                                            <a href="#"><img src="images/prj-id.jpg" alt="" /></a>
                                                        </div>
                                                        <div className="text">
                                                            <h3><a href="#">Hội nghị xúc tiến đầu tư
                                                                trà vinh 2020</a></h3>
                                                            <a href="#" className="see-more">Chi tiết</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Slider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>

       </>
    )
}
export default React.memo(Project);