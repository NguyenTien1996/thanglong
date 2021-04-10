import React, { useEffect, useState } from "react";
import { Skeleton } from 'antd';
import MyContext from '../../../context/my-context';

const LatestNews = () => {
    return (
        <MyContext.Consumer>
            {context => {
                if(context === undefined){
                    return <Skeleton active />
                }
                return (
                        <>
                        <p className="name gn">
                            Xem nhiều nhất
                        </p>
                        <div className="list-top-news">
                            {context.map((item,index) => {(
                                <div className="item"  key={index}>
                                    <div className="img">
                                        <a href="#">
                                        <img src="images/topprj.jpg" alt="" />
                                        </a>
                                    </div>
                                    <div className="text">
                                        <h3>{item.name}</h3>
                                        <span className="timess">12/12/1212</span>
                                    </div>
                                </div>
                            )})}
                        </div>
                    </>
                );
            }}
        </MyContext.Consumer>
    )
}
export default React.memo(LatestNews);