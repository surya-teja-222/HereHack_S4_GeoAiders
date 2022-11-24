import React from "react";
import ReactDOM from "react-dom/client";
import FourOFour from "./components/404";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import App from "./App";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
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
