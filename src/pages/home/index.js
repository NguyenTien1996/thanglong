import React from 'react';
import LayoutComponent from '../../components/Layout';
import BannerComponent from '../home/component/banner';
import ActionUnitsComponent from '../home/component/action_units'
import AboutUsComponent from '../home/component/about_us'
import NewsComponent from '../home/component/news'
import ProjectComponent from '../home/component/project'

const HomePage = () => {
    return(
       <>
           <LayoutComponent>
               <BannerComponent/>
               <ActionUnitsComponent/>
               <AboutUsComponent/>
               <NewsComponent/>
               <ProjectComponent/>
           </LayoutComponent>
       </>
    )
}
export default React.memo(HomePage);