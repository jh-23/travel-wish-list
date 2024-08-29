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
                    All Destinations
                    </NavLink>
                    <NavLink
                    to="/newdestinationform"
                    className="nav-link">
                    Create Destination
                    </NavLink>
                    <NavLink
                    to="/newactivityform"
                    className="nav-link">
                    Create Activity
                    </NavLink>
                    <NavLink
                    to="/createactivitydestination"
                    className="nav-link">
                    Create Activity Destination
                    </NavLink>
                    <NavLink
                    to="/addtowishlist"
                    className="nav-link">
                    Travel Wish List 
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