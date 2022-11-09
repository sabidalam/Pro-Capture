import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const AddReview = () => {
    const { user } = useContext(AuthContext);
    const serviceData = useLoaderData();
    const { _id, title } = serviceData;


    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'unregistered';
        const photoURL = form.photoURL.value;
        const message = form.message.value;

        const review = {
            service: _id,
            serviceName: title,
            reviewer: name,
            email,
            photoURL,
            message
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('Review Added Successfully');
                    form.reset();
                }
            })
            .catch(err => console.error(err));
    }

    return (
        <div className='my-8'>
            <form onSubmit={handlePlaceOrder}>
                <h3 className='text-3xl text-center text-orange-600'>Add a Review for {title} Service</h3>
                <div className='grid grid-cols-1 gap-4 max-w-3xl mx-auto my-5 px-8'>
                    <input name='name' type="text" placeholder="Name" className="input input-bordered input-info w-full" required />
                    <input name='photoURL' type="text" placeholder="PhotoURL" className="input input-bordered input-info w-full" />
                    <input name='email' type="text" defaultValue={user?.email} placeholder="Email" className="input input-bordered input-info w-full" readOnly />
                    <textarea name='message' className="textarea textarea-info textarea-bordered h-24 w-full" placeholder="Write your review" required></textarea>
                </div>
                <div className='text-center'>
                    <button className="btn btn-error px-10">Submit</button>
                </div>
            </form>

        </div>
    );
};

export default AddReview;