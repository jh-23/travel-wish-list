import { NavLink } from 'react-router-dom';
import "./NavBar.css"

function NavBar() {


    return(
        <div>
            <header>
                <nav>
                    <NavLink
                    to="/home"
                    className='nav-link'
                    >
                    Home
                    </NavLink>
                    <NavLink
                    to="/destinations"
                    className='nav-link'
                    >
                    Destinations
                    </NavLink>
                    <NavLink
                    to="/activities"
                    className='nav-link'>
                    Activities
                    </NavLink>
                    <NavLink
                    to="/newdestinationform"
                    className="nav-link">
                    New Destination
                    </NavLink>
                    <NavLink
                    to="/newactivityform"
                    className="nav-link">
                    New Activity
                    </NavLink>
                    <NavLink
                    to="/logout"
                    className="nav-link">
                    Logout
                    </NavLink>
                </nav>
            </header>
        </div>
    )

}

export default NavBar;