const React = require('react');

import Logo from './logo/logo.jsx';
import Navigation from './navigation/navigation.jsx'; // импортируем компонент навигации
import Helper from './helper/helper.jsx';

import './sidemenu.sass';

const Sidemenu =  () => {
    return(
        <div className="sidemenu">
            <Logo />
            <Navigation />
            <Helper />
        </div>
    )
}

export default Sidemenu;