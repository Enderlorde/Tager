import React from 'react';

import './options.sass';

const Options = (props) => {
    return (
        <select name={props.name} className={props.className?`options ${props.className}`:`options`}>
            {props.options.map((option, index) => {
                return (
                    <option key={index} value={option.value}>{option.description}</option>
                )
            })}
        </select>
    )
}

export default Options;