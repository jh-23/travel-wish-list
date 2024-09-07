import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <header className="bg-gradient-to-r from-blue-600 to-indigo-500 shadow-lg">
        <nav className="container mx-auto flex justify-between items-center p-6">
          <div className="text-white text-3xl font-bold">Travel Wish List App</div>
          <ul className="flex space-x-6">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive
                    ? 'text-white border-b-2 border-white pb-1'
                    : 'text-gray-200 hover:text-white transition duration-300'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/destinations"
                className={({ isActive }) =>
                  isActive
                    ? 'text-white border-b-2 border-white pb-1'
                    : 'text-gray-200 hover:text-white transition duration-300'
                }
              >
                All Destinations
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/newdestinationform"
                className={({ isActive }) =>
                  isActive
                    ? 'text-white border-b-2 border-white pb-1'
                    : 'text-gray-200 hover:text-white transition duration-300'
                }
              >
                Create Destination
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/newactivityform"
                className={({ isActive }) =>
                  isActive
                    ? 'text-white border-b-2 border-white pb-1'
                    : 'text-gray-200 hover:text-white transition duration-300'
                }
              >
                Create Activity
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/createactivitydestination"
                className={({ isActive }) =>
                  isActive
                    ? 'text-white border-b-2 border-white pb-1'
                    : 'text-gray-200 hover:text-white transition duration-300'
                }
              >
                Create Activity Destination
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/addtowishlist"
                className={({ isActive }) =>
                  isActive
                    ? 'text-white border-b-2 border-white pb-1'
                    : 'text-gray-200 hover:text-white transition duration-300'
                }
              >
                Travel Wish List
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/logout"
                className={({ isActive }) =>
                  isActive
                    ? 'text-white border-b-2 border-white pb-1'
                    : 'text-gray-200 hover:text-white transition duration-300'
                }
              >
                Logout
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;