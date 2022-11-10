import React, { useContext, useState, useEffect } from 'react';
import useTitle from '../../component/Hooks/useTitle';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import ReviewsCard from './ReviewsCard';

const Reviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email]);
    useTitle('My Reviews');
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete this order?')
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remaining = reviews.filter(review => review._id !== id);
                        setReviews(remaining);
                    }
                })
        }

    };
    if (reviews.length === 0) {
        return <div className='text-center my-12'>
            <h1 className='text-error text-3xl font-bold'>No Reviews were added</h1>
        </div>
    }
    return (
        <div>
            <p className='text-3xl font-semibold text-orange-600 text-center'>My Reviews</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto my-10'>
                {
                    reviews.map(review => <ReviewsCard
                        key={review._id}
                        review={review}
                        handleDelete={handleDelete}>
                    </ReviewsCard>)
                }
            </div>

        </div>
    );
};

export default Reviews;