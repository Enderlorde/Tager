import React from 'react';

import './logo.sass';
import LogoIcon from '../../../static/images/logo/logo.svg';

const Logo = (props) => {
    return(
        <div className={`logo ${props.className}`}>
            <LogoIcon />
            
            <div className="logo__text">nuegas</div>
        </div>
    )
}

export default Logo;