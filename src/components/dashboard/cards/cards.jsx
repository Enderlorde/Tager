import React from 'react';

import './cards.sass';

export const Mentor = (props) => {
    return (
        <div className="card">
            <div className="card__row">
                <div className="card__avatar">
                    <img src={props.avatar} alt=""/>
                </div>

                <div className="card__info">
                    <h4>{props.name}</h4>

                    <p>{props.occupation}</p>
                </div>

                <button>+follow</button>
            </div>

            <div className="card__row">
                <div className="card__task-tracker">
                    {props.tasks} Task
                </div>

                <div className="card__rating">
                    {props.rating} ({props.reviews} reviews)
                </div>
            </div>
        </div>
    )
}

export const Task = (props) => {
    return (
        <div className="card">
            <div className="card__illustration">
                <img src={props.illustration} alt=""/>
            </div>

            <div className="card__info">
                <h4>{props.title}</h4>

                <p>{props.theme}</p>
            </div>

            <div className="card__progress progess">
                <div className="progress__header">
                    <h4>Progress</h4>

                    <p>{props.progress}%</p>
                </div>
                
                <progress value={props.progress} max="100"></progress>
            </div>

            <div className="card__row">
                <div className="card__timeout">
                    {props.daysLeft} Days Left
                </div>

                <ul className="card__likes">
                    {props.followers.map((follower,index) => {
                        return <li key={index}>
                            <img src={follower} alt=""/>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}