import React from 'react';
import { withRouter } from 'react-router-dom';
const ListNews = (props) => {

    const item  = props.item;
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
                        props.history.push(`/news/${item.id}`)
                    }}><img src={item.avatar} alt="" />
                </div>
                <div className="text">
                    <span className="timess">{timeStr}</span>
                    <h3><a href=""
                        onClick={()=>{
                            window.scrollTo(0,0); 
                            props.history.push(`/news/${item.id}`)
                        }}
                    >{item.name}</a></h3>
                    <p dangerouslySetInnerHTML={{__html: item.content}}></p>
                    <div
                        className="see-more"
                        onClick={()=>{
                            window.scrollTo(0,0); 
                            props.history.push(`/news/${item.id}`)
                        }}
                    >Chi tiết</div>
                </div>
            </div>

       </>
    )
}
export default withRouter(ListNews);