import { createBrowserRouter, redirect } from 'react-router-dom'
import Login from "../views/Login";
import Registeradmin from "../views/Registeradmin";
import Dashboard from "../views/Dashboard";
import Sidebar from '../components/Sidebar';
import Category from '../views/Category';
import Addproduct from '../views/Addproduct';
import Editproduct from '../views/Editproduct';
import Addcategory from '../views/Addcategory';
import Editcategory from '../views/Editcategory';
import Imagepage from '../views/Imagepage';



const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />,
        loader: () => {
            const access_token = localStorage.getItem("access_token");
            if (access_token) {
                throw redirect("/");
            }
            return null;
        },
    },
    {
        element: <Sidebar />,
        loader: () => {
            const access_token = localStorage.getItem("access_token");
            if (!access_token) {
                throw redirect("/login");
            }

            return null;
        },
        children: [
            {
                path: "/",
                element: <Dashboard />,
            },
            {
                path: "/add-product",
                element: <Addproduct />,
            },
            {
                path: "/galery-product/:id",
                element: <Imagepage />,
            },
            {
                path: "/edit-product/:productId",
                element: <Editproduct />,
            },
            {
                path: "/category",
                element: <Category />,
            },
            {
                path: "/add-category",
                element: <Addcategory />,
            },
            {
                path: "/edit-category/:categoryId",
                element: <Editcategory />,
            },
            {
                path: "/register",
                element: <Registeradmin />,
            },

        ],
    },
]);

export default router

