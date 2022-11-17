import React from 'react';

import './greetings.sass';
import './greetings-mobile.sass';

const Greetings = (props) => {
    return (
        <div className={`greetings ${props.className}`}>
            <h3 className="greetings__user">Hi, {props.username}!</h3>

            <p className="greetings__tagline">{props.tagline}</p> 
        </div>
    )
}

export default Greetings;