import App from "./App";
import Destinations from "./Destinations";
import Home from "./Home";

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
    }
]

export default routes;
