import React, { useContext } from 'react';
import { Context } from './Context';
import { useNavigate } from 'react-router-dom';

function Logout() {

    const { user, setUser, setUsername, setPassword } = useContext(Context);
    const navigate = useNavigate();

    function handleLogoutClick() {
        console.log("Logout button clicked")
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser(null)
                setUsername("")
                setPassword("")
                navigate('/login')
            }
        })
    }



    return(
        <div class="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://etimg.etb2bimg.com/photo/94676301.cms')" }}>
            <h1 class="text-2xl font-bold text-orange-500">Hope to see you back again soon at the Travel Wish List App!  </h1>
            <button onClick={() => handleLogoutClick()} class="bg-indigo-500 text-white py-1 px-2 hover:bg-indigo-700 transition-colors">Logout</button>
        </div>
    )
}

export default Logout;