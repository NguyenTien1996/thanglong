import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {  faFacebookF } from "@fortawesome/free-solid-svg-icons";
import {  faFacebookF, faTwitter, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons';

const FooterComponent = () => {
    return(
       <>
           <footer>
                <div className="ft-top">
                    <div className="container">
                    <div className="cpn">
                        <div className="item">
                        <p className="name">CÔNG TY CỔ PHẦN TẬP ĐOÀN XÂY DỰNG THĂNG LONG</p>
                        <p><span>Địa chỉ:</span> Đường Nguyễn Văn Huyên - Nghĩa Đô Cầu Giấy - Hà Nội</p>
                        <p><span>Tel:</span> <a href="#">(84-4)38363906</a> - <span>Fax:</span> <a href="#">069.515.516</a> </p>
                        <p><span>Email:</span> <a href="#">hanhchinh@thanglongtci.vn</a></p>
                        <p><span>Website:</span> <a href="#">http://thanglongtci.vn</a></p>
                        </div>
                        <div className="item">
                        <p className="name"><a href="#">Giới thiệu</a></p>
                        <p><a href="#">Giới thiệu công ty</a></p>
                        <p><a href="#">Sơ đồ tổ chức</a></p>
                        <p><a href="#">Đơn vị thành viên</a></p>
                        </div>
                        <div className="item">
                        <p className="name"><a href="#">Tin tức sự kiện</a></p>
                        <p><a href="#">Giới thiệu công ty</a></p>
                        <p><a href="#">Sơ đồ tổ chức</a></p>
                        <p><a href="#">Đơn vị thành viên</a></p>
                        </div>
                        <div className="item">
                        <form action className="regis">
                            <input type="text" placeholder="Đăng ký nhận bản tin" />
                            <button><img src="images/ic-send.png" alt="" /></button>
                        </form>
                        <form action>
                            <select name id>
                            <option value>Web Liên Kết</option>
                            <option value>1</option>
                            </select>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="ft-bot">
                    <div className="container">
                        <p>© 2021 thanglong group. All rights reserved.</p>
                        <div className="social">
                            <p>Kết nối với chúng tôi</p>
                            <a href="#"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="#"><FontAwesomeIcon icon={faTwitter}/></a>
                            <a href="#"><FontAwesomeIcon icon={faYoutube}/></a>
                            <a href="#"><FontAwesomeIcon icon={faInstagram}/></a>
                        </div>
                    </div>
                </div>
            </footer>
       </>
    )
}
export default React.memo(FooterComponent);