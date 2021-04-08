import React from 'react';
import { Link } from 'react-router-dom';

const ListDocument = () => {
    return(
       <>
           <tr>
                <td>1</td>
                <td>Điều lệ quy chế quản trị Công ty CP Tập đoàn xây dựng Thăng Long</td>
                <td>12/03/2021</td>
                <td><Link className="icon-down"></Link></td>
            </tr>
       </>
    )
}
export default React.memo(ListDocument);