import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddReview from "../Pages/AddReview/AddReview";
import AllServices from "../Pages/AllServices/AllServices";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRouter from "./PrivateRouter";
import img from '../assets/images/404error.jpg';
import Reviews from "../Pages/Reviews/Reviews";

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
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/addReview/:id',
                element: <PrivateRouter><AddReview></AddReview></PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/reviews',
                element: <Reviews></Reviews>
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
    },
    {
        path: '*',
        element:
            <div className="text-center">
                <img src={img} alt="" className="w-1/2 mx-auto" />
                <h3 className='text-3xl'>The route you are searching is not available!!!</h3>
                <h3 className='text-3xl'>Please try for a valid route!!!</h3>
            </div>
    }

])

export default router;