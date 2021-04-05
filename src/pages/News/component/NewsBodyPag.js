import React from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames'

function NewsBodyPag(props) {

    return(
        <div className="ppage" onClick={props.choosePage}>
                <div id="-1" className={classNames({
                    newspagnigation_disable: props.currentPage === 1
                }) + " a"}>←</div>
                { props.pages.map(function(number, index) { 
                    if (props.currentPage === number) {
                        return (
                            <div key={number} id={number} className=" a active">
                                {number}
                            </div>
                        )
                    } else {
                        return (
                        <div 
                            className="a"
                            key={number}
                            id={number}
                            >
                                {number}
                        </div>
                        )
                    } 
                })}
                <div id="999" className={classNames({
                    newspagnigation_disable: props.currentPage === props.pageNumbers.length
                }) + " a"}>→</div>
        </div>
    )
    
} export default withRouter(NewsBodyPag);