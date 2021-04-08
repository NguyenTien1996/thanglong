import React from 'react';
import {NavLink, useLocation} from 'react-router-dom';

const HeaderComponent = () => {
    return(
       <>
           <header>
                <div className="head-top">
                <div className="container">
                    <div className="headtop-ct">
                        <div className="bottom flex-bet">
                        <div className="logo">
                            <NavLink to="/">
                                <img src="images/logo.png" alt="" />
                            </NavLink>
                        </div>
                        <div className="right-bt-hd">
                            <div className="hotline-lang">
                            <a href="#">024.337761759</a>
                            <div className="lang">
                                <a href="#"><img src="images/lang-vn.png" alt="" /></a>
                                <a href="#"><img src="images/lang-anh.png" alt="" /></a>
                            </div>
                            </div>
                            <div className="search">
                            <form action>
                                <input type="text" placeholder="Tìm Kiếm" />
                                <button><img src="images/ic-search.png" alt="" /></button>
                            </form>
                            </div><a href="javascript:;" className="btn-search-mobile"><img src="images/ic-search.png" alt="" /></a>
                        </div>
                        <div className="touch-menu"><span /></div>
                        <div className="bg-black" />
                        <div className="ic-search-mb"><img src="images/ic-search.png" alt="" /></div>
                        <div className="search-mobile">
                            <form action>
                            <input type="text" placeholder="Tìm Kiếm" />
                            <button><img src="images/ic-search.png" alt="" /></button>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="head-bottom">
                    <div className="container">
                    <div className="menu">
                        <ul>
                        <li>
                            <a href="#"><img src="images/ic-tc.png" alt="" /></a>
                        </li>
                        <li>
                            <NavLink to="/about-us">
                                Giới thiệu
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/news">
                                Tin tức sự kiện
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/project">
                            dự án công trình
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/member">
                            đơn vị thành viên
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/album">
                            thư viện
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/recruitment">
                            tuyển dụng
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">
                            liên hệ
                            </NavLink>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </header>
       </>
    )
}
export default React.memo(HeaderComponent);