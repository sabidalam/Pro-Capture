import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllServices from "../Pages/AllServices/AllServices";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <AllServices></AllServices>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/serviceDetails/:id',
                element: <PrivateRouter><ServiceDetails></ServiceDetails></PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
        ]
    }

])

export default router;