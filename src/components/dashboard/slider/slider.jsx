import React, { useState, useRef } from 'react';

import ArrowIcon from "./images/arrow_icon.svg";

import './slider.sass';

//TODO: вынести в отдельный модуль
const clamp = (value, min, max) => {
    if (value>max) {
        value -= max;
        return value>max?clamp(value,min,max):value;
    }
    if (value<min) {
        value = max - (min - value);
        return value<min?clamp(value,min,max):value;
    }   
    return value
}

const Slider = (props) => {
    const collection = props.collection;

    const contentWrapperRef = useRef();

    const buildView = (collection, index) => {
        return (
            [
                collection[clamp(index, 0, collection.length-1)],
                collection[clamp(index+1, 0, collection.length-1)],
            ]
        )
    }

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentView, setCurrentView] = useState(buildView(collection, currentIndex));

    const switchSlide = (direction) => {
        
        //состояние не успевает обновится и buldView получает старое значение, потому создаем временную переменную
        let tempIndex = direction=="next"?currentIndex+1:currentIndex-1;
        setCurrentIndex(tempIndex);
        const temparr = buildView(collection, tempIndex);
        setCurrentView([...temparr]);
    }

    return (
        <div className="slider">
            <div className="slider__header header">
                <h3>{props.title}</h3>

                <div className="header__controls">
                    <button>
                        <ArrowIcon onClick={() => switchSlide('prev')} className="mirrored_y" />
                    </button>

                    <button>
                        <ArrowIcon onClick={() => switchSlide('next')} />
                    </button>
                </div>
            </div>

            <div className="slider__content">
                <ul className="content__wrapper" ref={contentWrapperRef}>
                    {currentView.map((element,i) => <li className="content__slide" key={i}>{element}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default Slider;