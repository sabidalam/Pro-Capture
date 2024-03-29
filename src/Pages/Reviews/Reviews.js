import React, { useContext, useState, useEffect } from 'react';
import useTitle from '../../component/Hooks/useTitle';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import ReviewsCard from './ReviewsCard';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigation } from 'react-router-dom';

const Reviews = () => {
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useTitle('My Reviews');
    const navigation = useNavigation();


    useEffect(() => {
        fetch(`https://pro-capture-server.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('proCapture-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => setReviews(data))
    }, [user?.email, logOut]);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete this order?')
        if (proceed) {
            fetch(`https://pro-capture-server.vercel.app/reviews/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('proCapture-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast('Deleted Successfully', {
                            position: 'top-center'
                        });
                        const remaining = reviews.filter(review => review._id !== id);
                        setReviews(remaining);
                    }
                })
        }

    };

    if (navigation.state === 'loading') {
        return <div className='text-center my-5'>
            <button className="btn btn-error loading">loading</button>
        </div>
    };

    if (reviews.length === 0) {
        return <div className='text-center my-12'>
            <h1 className='text-error text-3xl font-bold'>No Reviews were added</h1>
        </div>
    }
    return (
        <div>
            <p className='text-3xl font-semibold text-white text-center mt-5'>My Reviews</p>
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

