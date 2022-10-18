import React from 'react';
import {Outlet} from 'react-router-dom';
import NavBar from '../NavBar';

export default function Dogs() {

    return(
     
        <div>
            <h1>Click on them for more info.</h1>
            <NavBar/>
            <Outlet />
        </div>
    )
}