import React from 'react';

const AboutUs = () => {
    return(
       <>
           <section className="vct">
                <div className="container">
                    <div className="vct-ct">
                    <div className="text-vct">
                        <h2><a href="#"><span>Giới thiệu</span>Về chúng tôi</a></h2>
                        <div className="text">
                        <p>Công ty cổ phần tập đoàn xây dựng Thăng Long tiền thân là Công ty cổ phần đầu tư xây dựng thương mại và tư vấn Thăng Long được thành lập vào ngày 31 tháng 3 năm 1998. Hiện nay, văn phòng giao dịch của Công ty đặt tại 58 Láng Hạ - Đống Đa- Hà Nội.</p>
                        <a href="#">Tìm hiểu thêm</a>
                        </div>
                        <div className="cso">
                        <div className="item">
                            <span>
                            <span className="count">23</span>
                            </span>
                            <p>Năm thành lập</p>
                        </div>
                        <div className="item">
                            <span>
                            <span className="count">100</span>
                            </span>
                            <p>Công trình dự án</p>
                        </div>
                        <div className="item">
                            <span>
                            <span className="count">1200</span>
                            </span>
                            <p>Đối tác Khách hàng</p>
                        </div>
                        </div>
                    </div>
                    <div className="img-vct">
                        <a href="#">
                        <img src="images/vct.png" alt="" />
                        </a>
                    </div>
                    </div>
                </div>
            </section>
       </>
    )
}
export default React.memo(AboutUs);