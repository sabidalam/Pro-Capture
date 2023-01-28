import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../Hooks/useTitle';

const UpdateReview = () => {
    const { user } = useContext(AuthContext);
    const storedReview = useLoaderData();
    console.log(storedReview);
    const { _id, serviceName, reviewer, photoURL, message } = storedReview;
    useTitle('Update Review');

    const handleUpdateReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.reviewer.value;
        const email = form.email.value;
        const image = form.image.value;
        const updatedMessage = form.message.value;

        const review = {
            id: _id,
            serviceName: serviceName,
            reviewer: name,
            image,
            email,
            updatedMessage
        }
        console.log(review);

        fetch(`https://pro-capture-server.vercel.app/reviews/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('Review Updated Successfully');
                    form.reset();
                }
            })
            .catch(err => console.error(err));
    }

    return (
        <div className='my-8'>
            <form onSubmit={handleUpdateReview}>
                <h3 className='text-3xl text-center text-orange-600'>Update {serviceName} Review</h3>
                <div className='grid grid-cols-1 gap-4 max-w-3xl mx-auto my-5 px-8'>
                    <input name='reviewer' type="text" defaultValue={reviewer} placeholder="Name" className="input input-bordered input-info w-full" readOnly />
                    <input name='image' type="text" defaultValue={photoURL} placeholder="PhotoURL" className="input input-bordered input-info w-full" />
                    <input name='email' type="text" defaultValue={user?.email} placeholder="Email" className="input input-bordered input-info w-full" readOnly />
                    <textarea name='message' defaultValue={message} className="textarea textarea-info textarea-bordered h-24 w-full" placeholder="Write your review" required></textarea>
                </div>
                <div className='text-center'>
                    <button className="btn btn-error px-10">Update</button>
                </div>
            </form>

        </div>


    );
};

export default UpdateReview;