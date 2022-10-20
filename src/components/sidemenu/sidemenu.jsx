const React = require('react');

import Logo from './logo/logo.jsx';
import Navigation from './navigation/navigation.jsx'; // импортируем компонент навигации
import Helper from './helper/helper.jsx';

import './sidemenu.sass';
import './sidemenu-mobile.sass';

const Sidemenu = (props) => {
    return(
        <div className={`sidemenu ${props.className}`}>
            <div>
                <Logo className="sidemenu__logo"/>

                <Navigation />
            </div>
            
            <Helper />
        </div>
    )
}

export default Sidemenu;