import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ContextProvider } from "./components/Context";
import "./index.css";
import routes from './components/routes.js';

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
    <ContextProvider>
        <RouterProvider router={router} />
    </ContextProvider>
);
