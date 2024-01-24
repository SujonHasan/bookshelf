import { createBrowserRouter } from "react-router-dom";
import Books from "../book/Books";
import Registration from "../user/Registration";
import Login from "../user/Login";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <Books></Books>
    },
    {
        path: '/registration',
        element: <Registration></Registration>
    },
    {
        path: '/login',
        element: <Login></Login>
    }
])

export default Router