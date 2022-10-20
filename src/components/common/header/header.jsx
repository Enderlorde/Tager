import React from 'react';

import Controls from './controls/controls.jsx';
import Options from './options/options.jsx';
import Action from './action/action.jsx';
import Search from './search/search.jsx';

import './header.sass';

const Header = (props) => {
    return (
        <div className={props.className?`header ${props.className}`:`header`}>
            <h4 className={props.small?"header__title header__title_size_small":"header__title"}>{props.title}</h4>

            {props.controls?<Controls className="header__controls" elements={props.controls} />:null}

            {props.action?<Action className="header__action" />:null}

            {props.options?<Options className="header__options" options={props.options} />:null}

            {props.search?<Search className="header__search" />:null}
        </div>
    )
}

export default Header;