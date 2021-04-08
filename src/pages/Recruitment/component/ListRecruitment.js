import React from 'react';
import { withRouter } from 'react-router-dom';
const ListRecruitment = (props) => {

    const item  = props.item;

    return(
       <>
            <tr key={props.key}>
                <td>{props.position}</td>
                <td 
                    onClick={()=>{
                        window.scrollTo(0,0); 
                        props.history.push(`/recruitment/${item.name}`)
                    }}
                >{item.name}</td>
                <td>{item.salary}</td>
                <td>{item.address}</td>
                <td>{item.timeStr}</td>
                <td>{item.endDate}</td>
            </tr>
       </>
    )
}
export default withRouter(ListRecruitment);