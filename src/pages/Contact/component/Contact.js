import React,{useState,useEffect} from 'react';
import { withRouter } from 'react-router-dom';

const Contact = () => {
    const [systemConfig, setSystemConfig] = useState([]);
    const [contact , setContact] = useState([])

    return(
       <>
            <section className="contact">
                <div className="container">
                <div className="contact-ct">
                    <div className="infor-contact">
                    <h2>CÔNG TY CỔ PHẦN TẬP ĐOÀN 
                        XÂY DỰNG THĂNG LONG</h2>
                    <div className="item">
                        <div className="img"><img src="images/ic-contact-1.png" alt="" /></div>
                        <div className="text">
                        <span>Địa chỉ: </span>Thôn 6 - Xã Thạch Hòa - Huyện 
                        Thạch Thất - TP. Hà Nội
                        </div>
                    </div>
                    <div className="item">
                        <div className="img"><img src="images/ic-contact-2.png" alt="" /></div>
                        <div className="text">
                        <span>Địa chỉ: </span>Thôn 6 - Xã Thạch Hòa - Huyện 
                        Thạch Thất - TP. Hà Nội
                        </div>
                    </div>
                    <div className="item">
                        <div className="img"><img src="images/ic-contact-3.png" alt="" /></div>
                        <div className="text">
                        <span>Địa chỉ: </span>Thôn 6 - Xã Thạch Hòa - Huyện 
                        Thạch Thất - TP. Hà Nội
                        </div>
                    </div>
                    <div className="item">
                        <div className="img"><img src="images/ic-contact-4.png" alt="" /></div>
                        <div className="text">
                        <span>Địa chỉ: </span>Thôn 6 - Xã Thạch Hòa - Huyện 
                        Thạch Thất - TP. Hà Nội
                        </div>
                    </div>
                    </div>
                    <div className="form-contact">
                    <p className="name">Gửi thông tin liên hệ cho chúng tôi</p>
                    <form action>
                        <div className="form-group w-50">
                        <input type="text" placeholder="Họ tên" />
                        </div>
                        <div className="form-group w-50">
                        <input type="text" placeholder="Điện thoại" />
                        </div>
                        <div className="form-group">
                        <input type="text" placeholder="Email" />
                        </div>
                        <div className="form-group">
                        <textarea placeholder="Nội dung" defaultValue={""} />
                        </div>
                        <button>Gửi liên hệ</button>
                    </form>
                    </div>
                </div>
                </div>
            </section>
            <section className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2437.052755867946!2d4.847754815690365!3d52.35132842978259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5e21c9482e89b%3A0xf4fa0e4da8e6425c!2sHoofddorpplein!5e0!3m2!1svi!2s!4v1616573092245!5m2!1svi!2s" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" />
            </section>
       </>
    )
}
export default withRouter(Contact);