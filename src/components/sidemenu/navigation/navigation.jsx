import React, { useEffect,useRef } from 'react';
import { NavLink, Link } from 'react-router-dom'; //импортируем компонент ссылок для роутера

import './navigation.sass'; //Подключаем стили

import OverviewIcon from '../../../static/images/navigation/overview_icon.svg';
import TasksIcon from '../../../static/images/navigation/tasks_icon.svg';
import MentorsIcon from '../../../static/images/navigation/mentors_icon.svg';
import MessageIcon from '../../../static/images/navigation/message_icon.svg';
import SettingsIcon from '../../../static/images/navigation/settings_icon.svg';

const Navigation = () => {
    const listRef = useRef();

    useEffect(()=>{
        //перебираем все элементы меню, если находим дочерний a.active то вешаем класс active на сам элемент (обдумай другие варианты, возможно стоит сделать кастомный navlink)
        const menuItems = listRef.current.children;
        for (let item of menuItems){
            if([...item.children].find((menuItemElement) => menuItemElement['tagName'] === "A" && menuItemElement['className'] == 'active')){
                item.classList.add('active');
            }else{
                item.classList.remove('active');
            };
        }
    });

    const changeClassInRootLocation = () => {
        //Функция для подсветки пункта главной страницы в меню, переработать подход с меню позже
        return window.location.pathname === "/"?"active":"inactive"
    }

    return(
        <nav className="navigation">
            <ul className="navigation__menu" ref={listRef}>
                {/* Т.к. я хочу обращаться в css к соседнему элементу, необходимо чтобы он находился после активного*/}
                <li>
                    <Link className={changeClassInRootLocation()} to="/">overview</Link>
                    
                    <OverviewIcon />
                </li>

                <li>
                    <NavLink to="/tasks">tasks</NavLink>

                    <TasksIcon />
                </li>

                <li>
                    <NavLink to="/mentors">mentors</NavLink>

                    <MentorsIcon />
                </li>

                <li>
                    <NavLink to="/message">message</NavLink>

                    <MessageIcon />
                </li>

                <li>
                    <NavLink to="/settings">settings</NavLink>

                    <SettingsIcon />
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;