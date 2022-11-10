import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../component/Hooks/useTitle';
import DisplayReviews from './DisplayReviews/DisplayReviews';
import AddReview from '../AddReview/AddReview';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const { _id, img, title, price, ratings, description } = service;
    useTitle('Service Details');

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [reviews, _id]);
    return (
        <div>
            <div className="hero bg-base-200 py-8">
                <div className="hero-content max-w-5xl mx-auto flex-col lg:flex-row">
                    <div className='lg:w-1/2 lg:mr-16 lg:mb-8'>
                        <img src={img} className="rounded-lg shadow-2xl" alt='' />
                    </div>
                    <div className='lg:w-1/2'>
                        <h1 className="text-3xl font-bold">{title}</h1>
                        <div className='mt-3'>
                            <p className='text-xl text-error font-semibold'>Price: ${price}</p>
                            <div className='flex items-center mt-3'>
                                <p className='text-xl font-semibold'>Rating:</p>
                                <FaStar className='mx-2 text-yellow-400'></FaStar>
                                <p className='text-xl font-semibold'>{ratings}</p>
                            </div>
                        </div>
                        <p className="py-6">Description: {description}</p>
                    </div>
                </div>
            </div>
            <div>
                <div className=" bg-black py-6">
                    <div className="text-center">
                        <div className="">
                            <p className='text-orange-600 text-xl font-semibold mb-5'>Reviews</p>
                            <h1 className="text-3xl text-white font-bold">What Client Say About<br /> {title} Service</h1>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto my-5'>
                                {
                                    reviews.map(review => <DisplayReviews
                                        key={review._id}
                                        review={review}>
                                    </DisplayReviews>)
                                }
                            </div>
                            {
                                user?.uid ?
                                    <AddReview></AddReview>
                                    // <Link to={`/addReview/${_id}`}><button className="btn btn-error">Add Your Review</button></Link>
                                    :
                                    <p className='text-center text-gray-400 mt-5'>Please Login to Add a Review <Link className='font-semibold text-xl text-orange-400' to='/login'>Login</Link></p>
                            }

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServiceDetails;