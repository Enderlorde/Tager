import React from 'react'; //Подключаем реакт
import ReactDOM from 'react-dom/client'; //Подключаем пакет методов специфичных для клиента
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';

import './app.sass';

//импортируем компоненты страниц
import Tasks from './components/tasks/tasks.jsx';
import Mentors from './components/mentors/mentors.jsx';
import Message from './components/message/message.jsx';
import Settings from './components/settings/settings.jsx';
import Root from './components/root/root.jsx';

const app = ReactDOM.createRoot(document.querySelector('#app'));

const router = createBrowserRouter([
    //создаем список путей для browserRouter
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "mentors",
                element: <Mentors />,
            },
            {
                path: "tasks",
                element: <Tasks />,
            },
            {
                path: "message",
                element: <Message />,
            },
            {
                path: "settings",
                element: <Settings />,
            },
        ]
    },
    
]);

app.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);