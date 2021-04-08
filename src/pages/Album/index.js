import React,{useEffect} from 'react';
import LayoutComponent from '../../components/Layout';
import BannerComponent from '../../components/Banner';
import ListImage from '../Album/component/ListImage'
import ListVideo from '../Album/component/ListVideo'
import ListDocument from '../Album/component/ListDocument'

import bg from '../../styles/bn-tc.jpg'

const RecruitmentPage = () => {

    useEffect(()=>{
        window.scrollTo(0,0);
        document.body.style.overflow = 'unset';
    },[])

    return(
       <>
           <LayoutComponent>
               <BannerComponent  bannerImage={bg} name="Thư viện "/>
               <section className="lvdt">
                    <div className="container">
                        <div className="lvdt-ct">
                        <h2><a href="#">Hình ảnh hoạt động</a></h2>
                        <div className="list-tva">
                            <ListImage/>
                        </div>
                        <div className="ppage">
                            <a href="#" title className="active">1</a>
                            <a href="#" title>2</a>
                            <a href="#" title>3</a>
                            <a href="#" title><i className="fa fa-angle-right" /></a>
                            <a href="#" title><i className="fa fa-angle-double-right" /></a>
                        </div>
                        </div>
                    </div>
                    </section>

           </LayoutComponent>
       </>
    )
}
export default React.memo(RecruitmentPage);