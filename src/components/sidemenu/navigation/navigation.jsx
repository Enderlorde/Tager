import React from 'react';
import { NavLink, Link } from 'react-router-dom'; //импортируем компонент ссылок для роутера

import './navigation.sass'; //Подключаем стили

const Navigation = () => {
    return(
        <nav className="navigation">
            <ul className="navigation__menu">
                <li>
                    <Link children="true" to="/">overview</Link>
                </li>

                <li>
                    <NavLink to="/tasks">tasks</NavLink>
                </li>

                <li>
                    <NavLink to="/mentors">mentors</NavLink>
                </li>

                <li>
                    <NavLink to="/message">message</NavLink>
                </li>

                <li>
                    <NavLink to="/settings">settings</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;