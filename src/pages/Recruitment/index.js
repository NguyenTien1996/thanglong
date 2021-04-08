import React,{useEffect} from 'react';
import LayoutComponent from '../../components/Layout';
import BannerComponent from '../../components/Banner';
import RecruitmentBody from '../Recruitment/component/RecruitmentBody'
import bg from '../../styles/bn-tc.jpg'

const RecruitmentPage = () => {

    useEffect(()=>{
        window.scrollTo(0,0);
        document.body.style.overflow = 'unset';
    },[])

    return(
       <>
           <LayoutComponent>
               <BannerComponent  bannerImage={bg} name="Tuyển dụng "/>
               <RecruitmentBody/>
           </LayoutComponent>
       </>
    )
}
export default React.memo(RecruitmentPage);