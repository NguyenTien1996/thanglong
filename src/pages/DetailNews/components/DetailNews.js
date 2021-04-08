import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function NewsContent(props) {

    const news = {};
    if (props.news) {
        Object.assign(news,props.news) // gán obj props.news vào news
    }
    const cateLink = (`/news/category/${news.name}`)

    const date = new Date(news.createDate)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const timeStr = day + '/' + month + '/' +year

    if (news._id) {
        axios.post(`https://606a7c88e1c2a100175459e4.mockapi.io/api/news/${news.id}`, {
            countId: news._id
        })
    }
    
    return(
        <section className="content">
            <div className="container">
                <div className="content-ct">
                <div className="left">
                    <div className="detail-news">
                    <h2>{news.name}</h2>
                    <span className="timess">{timeStr}</span>
                    <div className="content-news" dangerouslySetInnerHTML={{__html: news.content}}></div>
                    </div>
                    <div className="ot-news">
                    <p className="name gn">Tin tức khác</p>
                    <a href="#"><span className="times">02/02/2920</span>- Khánh thành cầu Nhật Tân, rút ngắn đường đi Nội Bài</a>
                    <a href="#"><span className="times">02/02/2920</span>- Khánh thành cầu Nhật Tân, rút ngắn đường đi Nội Bài</a>
                    <a href="#"><span className="times">02/02/2920</span>- Khánh thành cầu Nhật Tân, rút ngắn đường đi Nội Bài</a>
                    <a href="#"><span className="times">02/02/2920</span>- Khánh thành cầu Nhật Tân, rút ngắn đường đi Nội Bài</a>
                    </div>
                </div>
                <div className="right">
                    <div className="top-news">
                    <p className="name gn">
                        Xem nhiều nhất
                    </p>
                    <div className="list-top-news">
                        <div className="item">
                        <div className="img">
                            <a href="#">
                            <img src="images/topprj.jpg" alt="" />
                            </a>
                        </div>
                        <div className="text">
                            <h3>Khánh thành cầu Nhật Tân, rút ngắn đường đi Nội Bài</h3>
                            <span className="timess">12/12/1212</span>
                        </div>
                        </div>
                        <div className="item">
                        <div className="img">
                            <a href="#">
                            <img src="images/topprj.jpg" alt="" />
                            </a>
                        </div>
                        <div className="text">
                            <h3>Khánh thành cầu Nhật Tân, rút ngắn đường đi Nội Bài</h3>
                            <span className="timess">12/12/1212</span>
                        </div>
                        </div>
                        <div className="item">
                        <div className="img">
                            <a href="#">
                            <img src="images/topprj.jpg" alt="" />
                            </a>
                        </div>
                        <div className="text">
                            <h3>Khánh thành cầu Nhật Tân, rút ngắn đường đi Nội Bài</h3>
                            <span className="timess">12/12/1212</span>
                        </div>
                        </div>
                        <div className="item">
                        <div className="img">
                            <a href="#">
                            <img src="images/topprj.jpg" alt="" />
                            </a>
                        </div>
                        <div className="text">
                            <h3>Khánh thành cầu Nhật Tân, rút ngắn đường đi Nội Bài</h3>
                            <span className="timess">12/12/1212</span>
                        </div>
                        </div>
                        <div className="item">
                        <div className="img">
                            <a href="#">
                            <img src="images/topprj.jpg" alt="" />
                            </a>
                        </div>
                        <div className="text">
                            <h3>Khánh thành cầu Nhật Tân, rút ngắn đường đi Nội Bài</h3>
                            <span className="timess">12/12/1212</span>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="top-prj">
                    <p className="name gn">
                        dự án tiêu biểu
                    </p>
                    <div className="list-top-prj list-lvdt">
                        <div className="slider">
                        <div className="item">
                            <div className="img">
                            <a href="#">
                                <img src="images/lvdt.jpg" alt="" />
                            </a>
                            </div>
                            <div className="text">
                            <h3><a href="#">nhà máy thủy điện bạch đằng</a></h3>
                            <p className="location">Xã Bạch Đằng, huyện Hòa An, tỉnh Cao Bằng</p>
                            <a href="#" className="seemore">Xem chi tiết</a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                            <a href="#">
                                <img src="images/lvdt.jpg" alt="" />
                            </a>
                            </div>
                            <div className="text">
                            <h3><a href="#">nhà máy thủy điện bạch đằng</a></h3>
                            <p className="location">Xã Bạch Đằng, huyện Hòa An, tỉnh Cao Bằng</p>
                            <a href="#" className="seemore">Xem chi tiết</a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                            <a href="#">
                                <img src="images/lvdt.jpg" alt="" />
                            </a>
                            </div>
                            <div className="text">
                            <h3><a href="#">nhà máy thủy điện bạch đằng</a></h3>
                            <p className="location">Xã Bạch Đằng, huyện Hòa An, tỉnh Cao Bằng</p>
                            <a href="#" className="seemore">Xem chi tiết</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>

    )
}