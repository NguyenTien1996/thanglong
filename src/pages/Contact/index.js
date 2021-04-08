import React from 'react';
import ContactComponent from './component/Contact';
import LayoutComponent from '../../components/Layout';

const Contact = () => {
    return(
       <>
       <LayoutComponent>
            <ContactComponent/>
        </LayoutComponent>
       </>
    )
}
export default React.memo(Contact);