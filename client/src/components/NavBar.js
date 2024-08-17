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
                    to="/activities"
                    className='nav-link'>
                    All Activities
                    </NavLink>
                    <NavLink
                    to="/newdestinationform"
                    className="nav-link">
                    Add Destination
                    </NavLink>
                    <NavLink
                    to="/newactivityform"
                    className="nav-link">
                    Add Activity
                    </NavLink>
                    <NavLink
                    to="/addtowishlist"
                    className="nav-link">
                    Destination/Activity Wish List 
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