import React from 'react';

import Today from './today/today.jsx';
import Slider from './slider/slider.jsx';
import {Mentor as MentorCard, Task as TaskCard} from './cards/cards.jsx';
import {RadialBarChart, RadialBar, PolarAngleAxis} from 'recharts';

import NotificationIcon from '../../static/images/action/notification_icon.svg';

import './dashboard.sass';

const Dashboard =  () => {
    const data = [
        {
            name: 'a',
            uv: 45,
            pv: 100,
            fill: '#546FFF'
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
            }
        ]
        
        const Template = MentorCard;

        const collection = mentors.map((data) => {
            return <Template 
                key={data.id}
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
        ]
        
        const Template = TaskCard;

        const collection = tasks.map((data) => {
            return <Template
                key={data.id}
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
            <div className="dashboard__wrapper">
                <div className="wrapper__row row">
                    <div className="row__hi">
                        <h3>Hi, User!</h3>

                        Let's finish you task today!
                    </div>

                    <div className="row__action action">
                        <button><NotificationIcon /></button>

                        <img className="action__avatar" src="https://via.placeholder.com/200" alt=""/>
                    </div>
                </div>
                
                <div className="wrapper__row row">
                    <div className="row__patient patient">
                        <div className="patient__title">Running task</div>

                        <div className="patient__used">65</div>

                        <div className="patient__meter meter">
                            <RadialBarChart 
                                width={68}
                                height={68}
                                innerRadius={31}
                                outerRadius={34}
                                data={data}
                                startAngle={450}
                                endAngle={90}
                                margin={{ top: 0, right: 18, bottom: 0, left: 0}}
                            >
                                                           
                                <RadialBar 
                                  background 
                                  dataKey='uv'
                                  angleAxisId={0}
                                  data={data}
                                />

                                <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />

                            </RadialBarChart>

                            <div className="meter__info">
                            <span>100</span> <br/>
                            Task
                        </div>                  
                        </div>

                        
                    </div>

                    <div className="row__activity activity">
                        <div className="activity__header">
                            <h4>Activity</h4>

                            <select name="date" id="dateSelect">
                                <option value="day">Today</option>

                                <option value="wk">This Week</option>

                                <option value="mt">This Month</option>

                                <option value="yh">This Year</option>
                            </select>
                        </div>
                    </div>
                </div>

                <Slider className="dashboard__slider" title="Monthly mentors" collection={collectMentors()} />

                <Slider className="dashboard__slider" title="Upcoming task" collection={collectTasks()}/>

            </div>
            <Today className="dashboard__today" />
        </div>
    )
}

export default Dashboard;