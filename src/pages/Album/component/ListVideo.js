import React from 'react';

const ListVideo = () => {
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
                </div>
            </div>
       </>
    )
}
export default React.memo(ListVideo);