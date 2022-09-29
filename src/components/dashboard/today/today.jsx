import React from 'react';

import Calendar from './calendar/calendar.jsx';
import TaskToday from './taskToday/taskToday.jsx';

import './today.sass';

const Today = () => {
    return (
        <div className="today">
            <Calendar />
            <TaskToday />
        </div>
    )
}

export default Today;