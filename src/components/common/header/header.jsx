import React from 'react';

import Controls from './controls/controls.jsx';
import Options from './options/options.jsx';

import './header.sass';

const Header = (props) => {

    return (
        <div className={props.className?`header ${props.className}`:`header`}>
            <h4 className='header__title'>{props.title}</h4>

            {props.controls?<Controls className="header__controls" elements={props.controls} />:null}

            {props.options?<Options className="header__options" options={props.options} />:null}
        </div>
    )
}

export default Header;