import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import SignUp from '../components/SignUp/SignUp';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>

        </div>
    );
};

export default Main;