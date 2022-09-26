import React from 'react';

import './slider.sass';

const Slider = (props) => {
    return (
        <div className="slider">
            <div className="slider__header">
                <h3>{props.title}</h3>

                <div className="slider__navigation">
                    <button>
                        L
                    </button>

                    <button>
                        R
                    </button>
                </div>
            </div>

            <div className="slider__content">
                {props.collection}
            </div>
        </div>
    )
}

export default Slider;