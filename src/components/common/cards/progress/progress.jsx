import React from 'react';

import './progress.sass';

const Progress = (props) => {
    const getPercents = (value, max) => {
        return value * 100 / max
    }

    const currentProgress = getPercents(props.value, props.max);

    return (
        <div className="progress">
            <div className="progress__header">
                <h4>Progress</h4>

                <p>{currentProgress} %</p>
            </div>

            <div className="progress__bar bar">
                <div style={{ width: `${currentProgress}%` }} className="bar__value"></div>
            </div>
                
        </div>
    )
} 

export default Progress;