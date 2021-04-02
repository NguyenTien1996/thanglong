import React from 'react';
import LayoutComponent from '../../components/Layout';
import BannerComponent from '../Home/component/Banner';
import ActionUnitsComponent from '../Home/component/Action_units';
import AboutUsComponent from '../Home/component/About_us';
import NewsComponent from '../Home/component/News';
import ProjectComponent from '../Home/component/Project';
import MemberUnitComponent from '../Home/component/Member_units';


const HomePage = () => {
    return(
       <>
           <LayoutComponent>
               <BannerComponent/>
               <ActionUnitsComponent/>
               <AboutUsComponent/>
               <NewsComponent/>
               <ProjectComponent/>
               <MemberUnitComponent/>
           </LayoutComponent>
       </>
    )
}
export default React.memo(HomePage);