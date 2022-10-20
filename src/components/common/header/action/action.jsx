import React from 'react';

import './action.sass';
import NotificationIcon from './images/notification_icon.svg';

const Action = (props) => {
    return (
        <div className={props.className?`action ${props.className}`:"action"}>
            <button className="action__notification"><NotificationIcon /></button>

            <img className="action__avatar" src="https://via.placeholder.com/200" alt="user avatar"/>
        </div>
    )
}

export default Action;