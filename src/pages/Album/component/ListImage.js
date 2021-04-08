import React from 'react';

const ListImage = () => {
    return(
       <>
           <div className="item">
                <div className="img">
                    <a href="#">
                    <img src="images/img-tva.jpg" alt="" />
                    </a>
                </div>
                <div className="text">
                    <h3><a href="#">Đường Nhật Tân đi sân bay Nội Bài</a></h3>
                    <a href="#" class="seeimg">Xem toàn bộ ảnh</a>
                </div>
            </div>
       </>
    )
}
export default React.memo(ListImage);