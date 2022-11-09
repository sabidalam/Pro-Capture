import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import ReviewsCard from './ReviewsCard';

const Reviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])
    return (
        <div>
            <p className='text-3xl font-semibold text-orange-600 text-center'>My Reviews</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto my-10'>
                {
                    reviews.map(review => <ReviewsCard
                        key={review._id}
                        review={review}>
                    </ReviewsCard>)
                }
            </div>

        </div>
    );
};

export default Reviews;