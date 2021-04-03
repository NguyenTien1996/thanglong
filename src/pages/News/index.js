import React,{useEffect} from 'react';
import LayoutComponent from '../../components/Layout';
import BannerComponent from '../../components/Banner';
import NewsBody from '../News/component/NewsBody'
import bg from '../../styles/bn-tc.jpg'

const NewsPage = () => {

    useEffect(()=>{
        window.scrollTo(0,0);
        document.body.style.overflow = 'unset';
    },[])

    return(
       <>
           <LayoutComponent>
               <BannerComponent  bannerImage={bg} name="Tin tức"/>
               <NewsBody/>
               <h1>News</h1>
           </LayoutComponent>
       </>
    )
}
export default React.memo(NewsPage);