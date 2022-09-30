import React from 'react';

import Greetings from './greetings/greetings.jsx';
import Patient from './patient/patient.jsx';
import Activity from './activity/activity.jsx';
import Today from './today/today.jsx';
import Slider from './slider/slider.jsx';
import {Mentor as MentorCard, Task as TaskCard} from './cards/cards.jsx';
import NotificationIcon from '../../static/images/action/notification_icon.svg';

import './dashboard.sass';

const Dashboard =  () => {
    const lcData = [
    {
        "name": "S",
        "uv": 1,
        "pv": 2400,
        "amt": 2400
    },
    {
        "name": "M",
        "uv": 2,
        "pv": 1398,
        "amt": 2210
    },
    {
        "name": "T",
        "uv": 1,
        "pv": 9800,
        "amt": 2290
    },
    {
        "name": "W",
        "uv": 3,
        "pv": 3908,
        "amt": 2000
    },
    {
        "name": "T",
        "uv": 2,
        "pv": 4800,
        "amt": 2181
    },
    {
        "name": "F",
        "uv": 3,
        "pv": 3800,
        "amt": 2500
    },
    {
        "name": "S",
        "uv": 2,
        "pv": 4300,
        "amt": 2100
    }
    ]

    const collectMentors = () => {
        //TODO: совместить две функции
        const mentors = [
            {
                id: 0,
                avatar: 'https://via.placeholder.com/200',
                name: 'Curious George',
                accupation: 'UI/UX Designer',
                tasks: ['1', '2', '3'],
                rating: [5, 2, 3, 5, 2, 4],
            },

            {
                id: 1,
                avatar: 'https://via.placeholder.com/200',
                name: 'Abraham Lincoln',
                accupation: '3D Design',
                tasks: ['1', '3'],
                rating: [5, 5, 5, 5, 3, 4],
            },
            {
                id: 2,
                avatar: 'https://via.placeholder.com/200',
                name: 'Mr. Bean',
                accupation: 'Game Designer',
                tasks: ['1', '2', '3', '4'],
                rating: [5, 2, 2, 3, 2, 4],
            },

            {
                id: 3,
                avatar: 'https://via.placeholder.com/200',
                name: 'John Carmack',
                accupation: 'God',
                tasks: ['1', '3'],
                rating: [5, 5, 5, 5, 3, 4],
            }
        ]
        
        const Template = MentorCard;

        const collection = mentors.map((data) => {
            return <Template 
                avatar={data.avatar}
                name={data.name} 
                occupation={data.accupation} 
                tasks={data.tasks.length} 
                rating={
                    // TODO: вынести в отдельные функции
                    data.rating.reduce((prev, curr)=>prev+curr)/data.rating.length
                } 
                reviews={data.rating.length} />
        })

        return collection
    }

    const collectTasks = () => {
        //TODO: совместить две функции
        const tasks = [
            {
                id: 0,
                illustration: 'https://via.placeholder.com/200',
                title: 'Creating Mobile App Design',
                theme: 'UI/UX Design',
                steps: [
                    {
                        name: 'first',
                        status: 'complete',
                        isComplete: true,
                    },
                    {
                        name: 'second',
                        status: 'complete',
                        isComplete: true,
                    },
                    {
                        name: 'third',
                        status: 'hold',
                        isComplete: false,
                    }
                ],
                expDate: new Date('Dec 25, 2022'),
                followers: [1, 234, 4, 231],
            },

            {
                id: 1,
                illustration: 'https://via.placeholder.com/200',
                title: 'Creating Perfect Website',
                theme: 'Web Developer',
                steps: [
                    {
                        name: 'first',
                        status: 'complete',
                        isComplete: true,
                    },
                    {
                        name: 'second',
                        status: 'incomplete',
                        isComplete: false,
                    },
                    {
                        name: 'third',
                        status: 'ongoing',
                        isComplete: false,
                    }
                ],
                expDate: new Date('Dec 20, 2022'),
                followers: [1, 234, 8, 4, 231],
            },
            {
                id: 2,
                illustration: 'https://via.placeholder.com/200',
                title: 'Creating Mobile App Design',
                theme: 'UI/UX Design',
                steps: [
                    {
                        name: 'first',
                        status: 'complete',
                        isComplete: true,
                    },
                    {
                        name: 'second',
                        status: 'complete',
                        isComplete: true,
                    },
                    {
                        name: 'third',
                        status: 'hold',
                        isComplete: false,
                    }
                ],
                expDate: new Date('Dec 25, 2022'),
                followers: [1, 234, 4, 231],
            },

            {
                id: 3,
                illustration: 'https://via.placeholder.com/200',
                title: 'Creating Perfect Website',
                theme: 'Web Developer',
                steps: [
                    {
                        name: 'first',
                        status: 'complete',
                        isComplete: true,
                    },
                    {
                        name: 'second',
                        status: 'incomplete',
                        isComplete: false,
                    },
                    {
                        name: 'third',
                        status: 'ongoing',
                        isComplete: false,
                    }
                ],
                expDate: new Date('Dec 20, 2022'),
                followers: [1, 234, 8, 4, 231],
            },
        ]
        
        const Template = TaskCard;

        const collection = tasks.map((data) => {
            return <Template
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
        })

        return collection
    } 

    return(
        <div className="dashboard">
            <div className="dashboard__general grid">
                <div className="grid__row">
                    <Greetings username="User" tagline="Let's finish you task today!" />

                    <div className="action">
                        <button className="action__notification"><NotificationIcon /></button>

                        <img className="action__avatar" src="https://via.placeholder.com/200" alt="user avatar"/>
                    </div>
                </div>
                
                <div className="grid__row grid__row_centered">
                    <Patient title='Running task' used={65} max={100} units='task' />

                    <Activity title='Activity' data={lcData}/>
                </div>

                <Slider className='grid__slider' title="Monthly mentors" collection={collectMentors()} />

                <Slider className='grid__slider' title="Upcoming task" collection={collectTasks()}/>

            </div>
            
            <Today className="dashboard__today" />
        </div>
    )
}

export default Dashboard;