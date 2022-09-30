import React from 'react';

import './controls.sass';

const Controls = (props) => {
    return (
        <div className={props.className?`controls ${props.className}`:`controls`}>
            {props.elements.map((element) => {
                return (
                    <button className='controls__element'>
                        {element.content}
                    </button>
                )
            })}
        </div>
    )
}

export default Controls;