import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const News = () => {
    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:true
      };
    return(
       <>
           <section className="news">
                <div className="container">
                    <div className="news-id">
                    <div className="tit-news">
                        <h2><a href="#">Tin tức sự kiện</a></h2>
                        <div className="list-a">
                        <a href="#" className="active">Tin công ty</a>
                        <a href="#">Tin ngành nghề</a>
                        <a href="#">kinh tế &amp; xã hội</a>
                        </div>
                    </div>
                    <div className="list-news-id">
                            <Slider {...settings}>
                                <div className="item">
                                    <div className="item-mar">
                                        <div className="img">
                                        <a href="#">
                                            <img src="images/news-id.jpg" alt="" />
                                        </a>
                                        </div>
                                        <div className="text">
                                            <span className="time">02/20/2021</span>
                                            <h3><a href="#">Lễ kỷ niệm 20 năm thành lập công ty cổ phần tập đoàn xây dựng Thăng Long</a></h3>
                                        </div>  
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item-mar">
                                        <div className="img">
                                        <a href="#">
                                            <img src="images/news-id.jpg" alt="" />
                                        </a>
                                        </div>
                                        <div className="text">
                                            <span className="time">02/20/2021</span>
                                            <h3><a href="#">Lễ kỷ niệm 20 năm thành lập công ty cổ phần tập đoàn xây dựng Thăng Long</a></h3>
                                        </div>  
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item-mar">
                                        <div className="img">
                                        <a href="#">
                                            <img src="images/news-id.jpg" alt="" />
                                        </a>
                                        </div>
                                        <div className="text">
                                            <span className="time">02/20/2021</span>
                                            <h3><a href="#">Lễ kỷ niệm 20 năm thành lập công ty cổ phần tập đoàn xây dựng Thăng Long</a></h3>
                                        </div>  
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item-mar">
                                        <div className="img">
                                        <a href="#">
                                            <img src="images/news-id.jpg" alt="" />
                                        </a>
                                        </div>
                                        <div className="text">
                                            <span className="time">02/20/2021</span>
                                            <h3><a href="#">Lễ kỷ niệm 20 năm thành lập công ty cổ phần tập đoàn xây dựng Thăng Long</a></h3>
                                        </div>  
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item-mar">
                                        <div className="img">
                                        <a href="#">
                                            <img src="images/news-id.jpg" alt="" />
                                        </a>
                                        </div>
                                        <div className="text">
                                            <span className="time">02/20/2021</span>
                                            <h3><a href="#">Lễ kỷ niệm 20 năm thành lập công ty cổ phần tập đoàn xây dựng Thăng Long</a></h3>
                                        </div>  
                                    </div>
                                </div>
                            </Slider>
                    </div>
                    </div>
                </div>
            </section>
       </>
    )
}
export default React.memo(News);