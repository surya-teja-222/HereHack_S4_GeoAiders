import React from "react";
import ReactDOM from "react-dom/client";
import FourOFour from "./components/404";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import App from "./App";
import "./index.css";
import Search from "./containers/search";
import HouseResPrice from "./containers/houseResPrice";
import LandResPrice from "./containers/landResPrice";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <FourOFour />,
    },
    {
        path: "/land-price",
        element: <Search type="land" />,
        errorElement: <FourOFour />,
    },
    {
        path: "/house-price",
        element: <Search type="house" />,
        errorElement: <FourOFour />,
    },
    {
        path: "/house-results",
        element: <HouseResPrice />,
        errorElement: <FourOFour />,
    },
    {
        path: "/land-results",
        element: <LandResPrice />,
        errorElement: <FourOFour />,
    },
    {
        path: "/404",
        element: (
            <FourOFour
                error="Redirected to 404"
                statusCode={200}
                errorMessage="Contact Developer"
            />
        ),
        errorElement: <FourOFour />,
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
