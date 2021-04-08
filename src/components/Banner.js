import React from 'react';
import {
    Link,
    withRouter
  } from "react-router-dom"; 

const BannerComponent = (props) => {

    const location = props.history.location.pathname.split('/')[(props.history.location.pathname.split('/').length-1)]

    let locationText = location
    // if (location.split('-').length > 1) {
    //     locationText = location.split('-').join(' ')
    // } else {
    //     locationText = location
    // }
    return(
       <>
           <section className="banner bn-tc">
           
                <div className="banner-tc">
                    <div className="img">
                        <img src={props.bannerImage} alt="" />
                    </div>
                    <div className="text">
                    <h1><a href="#">{props.name}</a></h1>
                    <div className="div-a">
                        <div 
                            style={{cursor: 'pointer'}}
                            onClick={()=>{
                                props.history.push('/')
                            }}
                        >Trang chủ</div>/ 
                        <Link to={locationText}>{props.name}</Link>
                    </div>
                    </div>
                </div>
            </section>
       </>
    )
}
export default withRouter(BannerComponent);