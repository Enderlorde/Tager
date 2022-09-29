import React from 'react';

import {Task as TaskCard} from '../../cards/cards.jsx';
import DotsIcon from './images/dots_icon.svg';

import './taskToday.sass';

const TaskToday = () => {
    const data = {
        id: 0,
        illustration: 'https://via.placeholder.com/200',
        title: 'Creating Awesome Mobile Apps',
        theme: 'UI/UX Designer',
        steps: [
            {
                id:'1',
                description: 'Understanding the tools in Figma',
                status: 'complete',
                isComplete: true,
            },
            {
                id:'2',
                description: 'Understand the basics of making designs',
                status: 'complete',
                isComplete: true,
            },
            {
                id:'3',
                description: 'Design a mobile application with figma',
                status: 'inComplete',
                isComplete: false,
            }
        ],
        expDate: new Date('Dec 25, 2022'),
        followers: [1, 234, 4, 231],
    };

    return(
        <div className="taskToday">
            <div className="taskToday__header">
                <h3>Task Today</h3>

                <button><DotsIcon /></button>
            </div>

            <TaskCard 
                className="taskToday__card"
                illustration={data.illustration}
                title={data.title}
                theme={data.theme}
                progress={
                    // TODO: вынести в отдельные функции
                    Math.ceil(data.steps.filter((step) => step.isComplete===true).length * 100 / data.steps.length)
                }
                daysLeft={function() {
                    // TODO: вынести в отдельные функции
                    const today = new Date();
                    return Math.ceil((data.expDate.getTime() - today.getTime())/(1000*3600*24))
                }()
                }
                followers={
                    function(){
                        //TODO: заменить на поиск аватаров пользователей
                        return data.followers.map((user) => "https://via.placeholder.com/200");
                    }()
                }
            />

            <hr />

            <div className="taskToday__detail detail">
                <div className="detail__header">
                    <h3>Detail Task</h3>

                    <p className='detail__theme'>UI/UX Designer</p>
                </div>
                
                <ul className="detail__content">
                    {data.steps.map((step, i) => {
                        return(
                            <li key={i} className="task">
                                <div className="task__number">
                                    {step.id}
                                </div>

                                <p className="task__description">
                                    {step.description}
                                </p>
                            </li>
                        )
                    })}
                    
                </ul>

                <button className="detail__spoiler">
                    Go To Detail
                </button>
            </div>
        </div>
    )
}

export default TaskToday;