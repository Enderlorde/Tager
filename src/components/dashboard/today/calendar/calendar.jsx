import React, { useState, useEffect } from 'react';

import ArrowIcon from './images/arrow_icon.svg';

import './calendar.sass';

const Calendar = () => {
    const [choosenDate, setChoosenDate] = useState(new Date());
    const [animationDirection, setAnimationDirection] = useState('none');

    useEffect(() => {
        if (animationDirection != 'none')
        {
            window.setTimeout(() => setAnimationDirection('none'), 2000);
        }
    },[animationDirection])

    const monthLabels = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

    const checkEqualDates = (date1, date2) => {
        return (new Date(date1.getFullYear(), date1.getMonth()-1, date1.getDate()).valueOf()==new Date(date2.getFullYear(), date2.getMonth()-1, date2.getDate()).valueOf())
    }

    const getWeek = (date) => {
        const weekdayLables = ["S", 'M', 'T', "W", "T", "F", "S"]
        const weekStart = (date - ((date.getDay() )*24*60*60*1000));

        let week = [];

        for (let i = 0; i < 7; i++){
            const tempDate = new Date(weekStart + i*24*60*60*1000);
            week.push({
                weekday: weekdayLables[tempDate.getDay()],
                date: tempDate,
                active: checkEqualDates(new Date(), tempDate)?true:false,
                hide: choosenDate.getMonth() != tempDate.getMonth()?true:false
            })
        }

        return week
    }

    //TODO: вынести в отдельный модуль
    const getAnimationClass = (direction, className) => {
        if (direction == "left") return `${className}_left`
        if (direction == "right") return `${className}_right`
        return ''
    }   

    return(
        <div className="calendar">
            <div className="calendar__header">
                <button className="calendar__navigation navigation navigation_left" onClick={() => {
                    setAnimationDirection('right');
                    const changedDate = new Date (choosenDate.valueOf() - 7*24*60*60*1000); 
                    window.setTimeout(() => setChoosenDate(changedDate), 1000);
                }}> <ArrowIcon /> </button>
                <div className="calendar__date">{`${monthLabels[choosenDate.getMonth()]} ${choosenDate.getFullYear()}`}</div>
                <button className="calendar__navigation navigation navigation_right" onClick={() => {
                    setAnimationDirection('left');
                    const changedDate = new Date (choosenDate.valueOf() + 7*24*60*60*1000); 
                    window.setTimeout(() => setChoosenDate(changedDate), 1000);
                }}> <ArrowIcon /> </button> 
            </div>

            <ul className="calendar__week">
                {getWeek(choosenDate).map((day,i) => {
                    return (
                    <li key={i} className={`week__day day day_animate ${getAnimationClass(animationDirection, "day_animate")} day_${day.active?"active":"inactive"} day_${day.hide?"hide":"visible"}`} >
                        <div className="day__name">
                            {day.weekday}
                        </div>
                        <div className="day__date">
                            {day.date.getDate() }
                        </div>
                    </li>
                    )
                })}                
            </ul>
        </div>
    )
}

export default Calendar;