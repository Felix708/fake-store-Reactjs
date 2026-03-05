import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Products from "../pages/Products";
import Template from "../Template";
import Profiles from "../pages/Profiles";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import CategoryProducts from "../pages/CategoryProducts";
import CartCheckout from "../pages/CartCheckout";
import { Auth } from "../middleware/Auth";

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
                path: "/products/category/:categoryId",
                element: <CategoryProducts />,
            },
            {
                path: "/profiles",
                element: <Profiles />,
            },
            {
                path: "/login",
                element: <Login />,
            },
        ]
    },
    // kelompok halaman yg boleh diakses setelah login
    {
        path: "/",
        element: <Template />,
        // mendaftarkan middleware, mengecek middleware (blm muncul tampilan)
        loader: Auth,
        children: [
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/checkout",
                element: <CartCheckout />,
            },
        ]
    }
]);