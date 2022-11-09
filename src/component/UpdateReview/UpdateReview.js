import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const UpdateReview = () => {
    const { user } = useContext(AuthContext);
    const storedReview = useLoaderData();
    const { _id, serviceName, service, reviewer, photoURL, message, email } = storedReview;
    const [reviews, setReviews] = useState(storedReview);

    const handleUpdateReview = (event) => {
        event.preventDefault();
        console.log(reviews);
        fetch(`http://localhost:5000/reviews/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('Review Updated Successfully');
                    // const remaining = reviews.filter(review => review._id !== _id);
                    // const updated = reviews.find(review => review._id === _id);
                    // const newReviews = [updated, ...remaining];
                    // setReviews(newReviews);
                }
            })
            .catch(err => console.error(err));
    }

    const handleInputChange = event => {
        const review = {
            service: service._id,
            serviceName: service.title,
            reviewer,
            email,
            photoURL,
            message
        }
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...reviews };
        newReview[field] = value;
        setReviews(newReview);

    }
    return (
        <div className='my-8'>
            <form onSubmit={handleUpdateReview}>
                <h3 className='text-3xl text-center text-orange-600'>Update {serviceName} Review</h3>
                <div className='grid grid-cols-1 gap-4 max-w-3xl mx-auto my-5 px-8'>
                    <input onChange={handleInputChange} name='reviewer' type="text" defaultValue={reviewer} placeholder="Name" className="input input-bordered input-info w-full" required />
                    <input onChange={handleInputChange} name='photoURL' type="text" defaultValue={photoURL} placeholder="PhotoURL" className="input input-bordered input-info w-full" />
                    <input onChange={handleInputChange} name='email' type="text" defaultValue={user?.email} placeholder="Email" className="input input-bordered input-info w-full" readOnly />
                    <textarea onChange={handleInputChange} name='message' defaultValue={message} className="textarea textarea-info textarea-bordered h-24 w-full" placeholder="Write your review" required></textarea>
                </div>
                <div className='text-center'>
                    <button className="btn btn-error px-10">Update</button>
                </div>
            </form>

        </div>


    );
};

export default UpdateReview;