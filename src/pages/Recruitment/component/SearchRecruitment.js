import React from 'react';

const SearchRecruitment = () => {
    return(
       <>
           <section className="search-td">
                <div className="container">
                    <div className="searchtd-ct">
                    <form action>
                        <div className="form-group">
                        <input type="text" name id placeholder="Tìm kiếm" />
                        </div>
                        <div className="form-group select">
                        <select name id>
                            <option value>Chức vụ</option>
                        </select>
                        </div>
                        <div className="form-group select">
                        <select name id>
                            <option value>Khu vực</option>
                        </select>
                        </div>
                        <button>Tìm kiếm</button>
                    </form>
                    </div>
                </div>
            </section>

       </>
    )
}
export default React.memo(SearchRecruitment);