import App from "./App";
import Destinations from "./Destinations";
import Home from "./Home";
import LoginForm from "./LoginForm";
import Logout from "./Logout";
import Activities from "../Activities";
import NewDestinationForm from "./NewDestinationForm";
import NewActivityForm from "../NewActivityForm";
import AddToWishList from "./WishList";
import EditActivityCard from "./EditActivityCard";
import CreateActivityDestination from "./CreateActivityDestination";
import Layout from "../Layout";

const routes = [

    {
        path: "/",
        element: <Layout />,
        children: [
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
            },
            {
                path: "/newdestinationform",
                element: <NewDestinationForm />
            },
            {
                path: "/newactivityform",
                element: <NewActivityForm />
            },
            {
                path: "/addtowishlist",
                element: <AddToWishList />
            },
            {
                path: "/editactivitycard/:id",
                element: <EditActivityCard />
            },
            {
                path: "/createactivitydestination",
                element: <CreateActivityDestination />
            }
        ]
    },


]

export default routes;
