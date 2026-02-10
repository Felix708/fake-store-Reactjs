import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Products from "../pages/Products";
import Template from "../Template";
import Profiles from "../pages/Profiles";
import Rangkings from "../pages/Rangkings";

export const router = createBrowserRouter([
    {
        // 
        path: "/",
        element: <Template />,
        // mengisi Outlet di Templates
        children: [
            {
                path: "/", //garis miring di url
                element: <App />, //tamp9ilan yang dimunculkan
            },
            {
                path: "/products",
                element: <Products />,
            },
            {
                path: "/profiles",
                element: <Profiles />,
            },
        ]
    },
]);