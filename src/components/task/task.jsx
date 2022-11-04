import React from 'react';

import Header from '../common/header/header.jsx';
import {Slider2 as Slider} from '../slider/slider.jsx';
import {Task as TaskCard} from '../common/cards/cards.jsx'
import './task.sass';

const Task =  () => {
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
            {
                id: 4,
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
                id: 5,
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
                id: 6,
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
                id: 7,
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
        <div className="task">
            <Header title="Explore task" className="task__header" action={true} search={true} placeholder="Search task"/>

            <Slider size={4} className='grid__slider' title="Time limit" collection={collectTasks()}/>

            <Slider size={4} className='grid__slider' title="new task" collection={collectTasks()}/>
        </div>
    )
}

export default Task;