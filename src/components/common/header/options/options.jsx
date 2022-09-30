import React from 'react';

import './options.sass';

const Options = (props) => {
    return (
        <select name={props.name} className={props.className?`options ${props.className}`:`options`}>
            {props.options.map((option) => {
                return (
                    <option value={option.value}>{option.description}</option>
                )
            })}
        </select>
    )
}

export default Options;