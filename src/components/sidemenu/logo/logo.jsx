import React from 'react';

import './logo.sass';
import LogoIcon from '../../../static/images/logo/logo.svg';

const Logo = () => {
    return(
        <div className="logo">
            <LogoIcon />
            
            <div className="logo__text">nuegas</div>
        </div>
    )
}

export default Logo;