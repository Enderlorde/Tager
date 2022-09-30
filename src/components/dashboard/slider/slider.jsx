import React, { useState, useEffect } from 'react';

import ArrowIcon from "./images/arrow_icon.svg";
import Header from '../../common/header/header.jsx';


import './slider.sass';

//TODO: вынести в отдельный модуль
const clamp = (value, min, max) => {
    if (value>max) {
        value = min + (value - max) - 1;
        return value>max?clamp(value,min,max):value;
    }
    if (value<min) {
        value = max - (min - value) + 1 ;
        return value<min?clamp(value,min,max):value;
    }   
    return value
}

const Slider = (props) => {
    const collection = props.collection;

    const buildView = (collection, index) => {
        //Функция собирает контент для двух слайдов в массив
        return (
            [
                collection[clamp(index, 0, collection.length-1)],
                collection[clamp(index+1, 0, collection.length-1)],
            ]
        )
    }

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentView, setCurrentView] = useState(buildView(collection, currentIndex));
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        //Вешаем задержку для удаления класса с анимацией
        if (animate) window.setTimeout(() => setAnimate(false),2000);
    }, [animate])

    const switchSlide = (direction) => {
        //состояние не успевает обновится и buldView получает старое значение, потому создаем временную переменную
        let tempIndex = direction=="next"?currentIndex+2:currentIndex-2;
        setAnimate(true);
        setCurrentIndex(clamp(tempIndex, 0, collection.length - 1));
        const temparr = buildView(collection, tempIndex);
        window.setTimeout(() => setCurrentView([...temparr]),1000);
    }

    return (
        <div className={props.className?`slider ${props.className}`:`slider`}>
            <Header title={props.title} className='slider__header' controls={
                [
                    {
                        content: <ArrowIcon style={{transform: 'scaleX(-1)'}} onClick={() => switchSlide('prev')} />,
                    },
                    {
                        content: <ArrowIcon onClick={() => switchSlide('next')} />,
                    } 
                ]
            }/>

            <ul className="slider__slides slides">
                {currentView.map((element,i) => {
                    return (
                        <li 
                            className={animate?`slides__slide slides__slide_animate`:`slides__slide`} 
                            key={i}
                        >
                            {element}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Slider;