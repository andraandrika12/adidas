import { createBrowserRouter } from "react-router-dom";
import Homepage from "../views/Homepage";
import Room from "../views/Room";
import Detail from "../views/Detail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage/>
    },
    {
        path: "/products/:categoryId",
        element: <Room/> 
    },
    {
        path: "/products-detail/:slug/:id",
        element: <Detail/> 
    }
])

export default router