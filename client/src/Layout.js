import React, { useEffect, useContext} from 'react';
import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';
import { Context } from './components/Context';
import { useNavigate } from 'react-router-dom';

function Layout() {

    const { user } = useContext(Context);

    const navigate = useNavigate();

    useEffect(() => {
        if(!user) {
            navigate('/login')
        }
    })

    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    );
}

export default Layout;