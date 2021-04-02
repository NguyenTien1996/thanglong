import React,{useState, useEffect} from 'react';
import LayoutComponent from '../../components/Layout';
import BannerComponent from '../../components/Banner';
import bg from '../../styles/bn-tc.jpg'

const AboutUsPage = () => {

    useEffect(()=>{
        window.scrollTo(0,0);
        document.body.style.overflow = 'unset';
    },[])

    return(
       <>
           <LayoutComponent>
                <BannerComponent bannerImage={bg} name="Giới thiệu"/>
                <h1>About</h1>
           </LayoutComponent>
       </>
    )
}
export default React.memo(AboutUsPage);