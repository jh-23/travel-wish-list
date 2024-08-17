import App from "./App";
import Destinations from "./Destinations";
import Home from "./Home";
import LoginForm from "./LoginForm";
import Logout from "./Logout";
import Activities from "../Activities";

const routes = [

    {
        path: "/",
        element: <App />
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/destinations",
        element: <Destinations />
    },
    {
        path:"/login",
        element: <LoginForm />
    },
    {
        path: "/logout",
        element: <Logout />
    },
    {
        path:"/activities",
        element: <Activities />
    }

]

export default routes;
