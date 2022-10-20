import React from 'react';
import Sidemenu from '../sidemenu/sidemenu.jsx'; 
import Dashboard from '../dashboard/dashboard.jsx';
import {useOutlet} from 'react-router-dom';
import './root.sass';
import './root-mobile.sass';

const Root = () => {
    const showDashboard = () => {
        const element = useOutlet();
        if(element == null){
            return <Dashboard />
        }else{
            return element
        }
    }

    return(
        <div className="root">
            <Sidemenu className="root__sidemenu" />
            {showDashboard()}
        </div>
    )
}

export default Root;