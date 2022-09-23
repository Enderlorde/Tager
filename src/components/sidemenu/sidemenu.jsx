const React = require('react');

import Navigation from './navigation/navigation.jsx'; // импортируем компонент навигации

const Sidemenu =  () => {
    return(
        <div className="sidemenu">
            <Navigation />
        </div>
    )
}

export default Sidemenu;