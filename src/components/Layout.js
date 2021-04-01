import React from 'react';
import HeaderComponent from './Header';
import FooterComponent from './Footer';
import PropTypes from 'prop-types'

const LayoutComponent = (props) => {
    return(
        <>
            <HeaderComponent/>
                <div className="Content">
                    {props.children}
                </div>
            <FooterComponent/>
        </>
    )
}
LayoutComponent.propTypes = {
    children: PropTypes.node.isRequired
}
export default React.memo(LayoutComponent)