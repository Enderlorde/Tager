import React from 'react';

import Header from '../common/header/header.jsx';
import Slider from '../slider/slider.jsx';
import List from '../list/list.jsx';

const Mentors =  () => {
    return(
        <div className="mentors">
            <Header title="Explore Mentors" className="mentors__header" action={true} search={true}/>
        
            <Slider lenght={4} className="mentors__slider" title="Recent Mentors"/>

            <List title="Mentors" className="mentors__list"/>
        </div>
    )
}

export default Mentors;