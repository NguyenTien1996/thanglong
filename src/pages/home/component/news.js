import React from 'react';

const News = () => {
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
                        <div className="slider">
                        <div className="item">
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
                        <div className="item">
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
                        <div className="item">
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
                        <div className="item">
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
                        <div className="cl-action">
                        <a href="javascript:;" className="prev-news-id"><i className="fa fa-angle-left" /></a>
                        <a href="javascript:;" className="next-news-id"><i className="fa fa-angle-right" /></a>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
       </>
    )
}
export default React.memo(News);