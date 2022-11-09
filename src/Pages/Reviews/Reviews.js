import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Reviews = ({ service }) => {
    const { user } = useContext(AuthContext);
    const { _id, title } = service;
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname;

    const handleAddReview = () => {
        if (user?.uid) {
            navigate(from, { replace: true });
        } else {
            return alert('please login')
        }

    }
    return (
        <div>
            <div className="hero bg-black py-6">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <p className='text-orange-600 text-xl font-semibold mb-5'>Reviews</p>
                        <h1 className="text-3xl text-white font-bold">What Client Say About My {title} Service</h1>
                        <p className="py-6"></p>
                        <Link to={`/addReview/${_id}`}><button onClick={handleAddReview} className="btn btn-error">Add Your Review</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;