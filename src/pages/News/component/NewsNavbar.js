import React from 'react';

import { withRouter } from 'react-router-dom';

const NewsNavbar = (props) => {
    
        return(
            <>
                <section className="tit-gc">
                    <div className="container">
                        <div className="tit-gc-ct">
                        {props.sortedCate.map((item, index) => {
                            return (
                                <div 
                                    key={index} 
                                    id={index}
                                    className={props.currentTab === Number(index) ? "nav-a active" : "nav-a" }
                                    onClick={(event) => {
                                        props.setCurrentTab(index)
                                        props.setCurrentTabText(event.currentTarget.textContent)
                                        props.setCurrentPage(1)
                                     }}
                                     >{item}</div>
                            )
                        })}
                        </div>
                    </div>
                </section>
            </>
        )

}
export default withRouter(NewsNavbar);