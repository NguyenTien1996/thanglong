import React from 'react';
import { withRouter } from 'react-router-dom';
const ListNews = (props) => {

    const item  = props.item;
    const date = new Date(item.newTime);
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
                        props.history.push(`/news/category/${item.newCate}`)
                    }}><img src={item.newImg} alt="" />
                </div>
                <div className="text">
                    <span className="timess">{timeStr}</span>
                    <h3><a href=""
                        onClick={()=>{
                            window.scrollTo(0,0); 
                            props.history.push(`/news/${item._id}`)
                        }}
                    >{item.newTitle}</a></h3>
                    <div dangerouslySetInnerHTML={{__html: item.newContent}}></div>
                    <a href="#" 
                        className="see-more"
                        onClick={()=>{
                            window.scrollTo(0,0); 
                            props.history.push(`/news/${item._id}`)
                        }}
                    >Chi tiết</a>
                </div>
            </div>

       </>
    )
}
export default React.memo(ListNews);