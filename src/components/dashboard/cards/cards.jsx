import React from 'react';

import ClockIcon from './images/clock_icon.svg';
import TaskIcon from './images/note_icon.svg';
import StarIcon from './images/star_icon.svg';
import Progress from './progress/progress.jsx';

import './cards.sass';

export const Mentor = (props) => {
    return (
        <div className="card">
            <div className="card__row">
                <div className="card__mentor mentor">
                    <img className="mentor__avatar" src={props.avatar} alt="mentor's avatar"/>

                    <div className="mentor__info">
                        <h4>{props.name}</h4>

                        <p>{props.occupation}</p>
                    </div>
                </div>
                
                <button className="card__follow">+ follow</button>
            </div>

            <div className="card__row">
                <div className="card__task-tracker task-tracker">
                    <TaskIcon className="task-tracker__icon"/> {props.tasks} Task
                </div>

                <div className="card__rating rating">
                    <StarIcon className="rating__icon" /> {props.rating} ({props.reviews} reviews)
                </div>
            </div>
        </div>
    )
}

export const Task = (props) => {
    return (
        <div className="card">
            <img className="card__illustration" src={props.illustration} alt=""/>

            <div className="card__info">
                <h4>{props.title}</h4>

                <p>{props.theme}</p>
            </div>

            <div className="card__progress progess">
                <Progress max={100} value={props.progress} />
            </div>

            <div className="card__row">
                <div className="card__timeout timeout">
                    <ClockIcon className="timeout__icon"/> {props.daysLeft} Days Left
                </div>

                <ul className="card__likes">
                    {props.followers.filter((value, index) => index<=4).map((follower, index) => {
                        return <li key={index}>
                            <img src={follower} alt=""/>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}