import React from 'react';

import {Mentor as Card} from '../common/cards/cards.jsx';

const List = (props) => {
    return(
        <div className={props.className?`${props.className}`:"list"}>
            <h3>{props.title}</h3>
        
            
        </div>
    )
}

export default List;