import React from 'react';

import CategoryIcon from './images/category_icon.svg';
import SortIcon from './images/sort_icon.svg';
import './search.sass';

const Search = (props) => {
    return (
        <div className={props.className?`search ${props.className}`:`search`}>
            <div className="search__searching searching">
                <input type="text" name="searching" id="searching" className="searching__input"/>

                <button className="searching__icon"></button>
            </div>
            


            <ul className="search__filter filter">
                <li className="filter__item">
                    <CategoryIcon /> category
                </li>
                
                <li className="filter__item">
                    <SortIcon />sort by : deadline
                </li>
            </ul>
        </div>
    )
}

export default Search;