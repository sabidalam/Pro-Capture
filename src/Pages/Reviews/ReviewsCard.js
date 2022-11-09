import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import img from '../../assets/images/avater.jpg';
import { Link } from 'react-router-dom';

const ReviewsCard = ({ review, handleDelete }) => {
    const { user } = useContext(AuthContext);
    const { _id, serviceName, reviewer, message, photoURL } = review;
    return (
        <div>
            <div className="card w-80 mx-auto bg-base-100 border-2 border-gray-400">
                <div className="card-body">
                    <p className='font-semibold'>Review For {serviceName}</p>
                    <p className='text-xl my-3 text-center'>"{message}"</p>
                    <div className='flex content-around items-center'>
                        <div>
                            {
                                photoURL ?
                                    <div className="avatar">
                                        <div className="w-8 rounded-full">
                                            <img src={photoURL} alt='' />
                                        </div>
                                    </div>
                                    :
                                    <div className="avatar">
                                        <div className="w-8 rounded-full">
                                            <img src={img} alt='' />
                                        </div>
                                    </div>
                            }
                        </div>
                        <p className='font-bold mb-3 ml-3'>{reviewer}</p>
                    </div>
                    <div className="card-actions justify-end mt-3">
                        <Link to={`/updateReview/${_id}`}><button className="btn btn-accent btn-sm">Edit Review</button></Link>
                        <button onClick={() => handleDelete(_id)} className="btn btn-error btn-sm">Delete Review</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewsCard;