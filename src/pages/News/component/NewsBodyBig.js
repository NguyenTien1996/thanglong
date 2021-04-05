import React from 'react';
import { withRouter } from 'react-router-dom';
const ListNews = (props) => {

    const item  = props.firstPost;
    const date = new Date(item.createDate);
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const timeStr = day + '/' + month + '/' +year;

    return(
       <>
           <div className="item">
                <div 
                    className="img" 
                    onClick={()=>{
                        window.scrollTo(0,0); 
                        props.history.push(`/news/${item.name}`)
                    }}><img src={item.avatar} alt="" />
                </div>
                <div className="text">
                    <h3><a href=""
                        onClick={()=>{
                            window.scrollTo(0,0); 
                            props.history.push(`/news/${item._id}`)
                        }}
                    >{item.name}</a></h3>
                </div>
            </div>

       </>
    )
}
export default React.memo(ListNews);