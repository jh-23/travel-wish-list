import App from "./App";
import Destinations from "./Destinations";
import Home from "./Home";
import LoginForm from "./LoginForm";

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
    }

]

export default routes;
