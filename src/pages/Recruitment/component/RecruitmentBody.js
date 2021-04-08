import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListRecruitment from './ListRecruitment';
import SearchRecruitment from './SearchRecruitment';
import { withRouter } from 'react-router-dom';

const RecruitmentBody = (props) => {

    const [Recruitment, setRecruitment] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const RecruitmentPerPage = 5;
    const [currentTab, setCurrentTab] = useState(-1);
    const [currentTabText, setCurrentTabText] = useState("");
    let firstPost = [];
    let sortedCate = [];
    let nextPosts = [];
    let splicedCate = [];
    let pages = [];
    let pageNumbers = []; //Số trang được chia ra
    const [searchRecruitment, setSearchRecruitment] = useState(null)
    const [searchErr, setSearchErr] = useState(null)

    useEffect(() => {
        if (searchRecruitment) {
            axios.get(`https://606a7c88e1c2a100175459e4.mockapi.io/api/recruitment`)
                .then(res => { 
                    const search = []
                    for (let i in res.data) { 
                        if ((res.data[i].name).toLowerCase().includes(searchRecruitment)) {
                            search.push(res.data[i])
                        }
                    }
                    if (search.length > 0) {
                        setRecruitment(search) 
                        setSearchErr(null)
                    } else { 
                        setSearchErr("No results found") 
                    }
                }
            )
        } else {
            axios.get(`https://606a7c88e1c2a100175459e4.mockapi.io/api/recruitment`)
                .then(res => {
                    setRecruitment(res.data)
                }
            )
            console.log(Recruitment)
        }
    },[props.history.location.pathname, props.match.params.cate, searchRecruitment])

    return(
       <>
       <SearchRecruitment/>
            <section class="table-td">
                <div class="container">
                    <div class="tabletd-ct">
                        <table>
                            <tr>
                                <th>STT</th>
                                <th>Chức vụ</th>
                                <th>Mức lương</th>
                                <th>Địa điểm</th>
                                <th>Ngày đăng</th>
                                <th>Ngày hết hạn</th>
                            </tr>
                            {Recruitment.map((item, index) => {
                                (
                                    <ListRecruitment item={item} key={index}/>
                                )
                            })}
                        </table>
                        <div class="ppage"><div id="-1" class="newspagnigation_disable a">←</div><div id="1" class=" a active">1</div><div class="a" id="2">2</div><div id="999" class=" a">→</div></div>
                    </div>
                </div>
            </section>
       </>
    )
}
export default withRouter(RecruitmentBody);