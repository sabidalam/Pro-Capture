import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import img from '../../assets/images/avater.jpg';

const ReviewsCard = ({ review }) => {
    const { user } = useContext(AuthContext);
    const { reviewer, message, photoURL } = review;
    return (
        <div>
            <div className="card w-80 mx-auto bg-base-100 border-2 border-gray-400">
                <div className="card-body">
                    <p>Review: "{message}"</p>
                    <div className='flex content-around items-center'>
                        <div>
                            {
                                photoURL ?
                                    <div className="avatar">
                                        <div className="w-16 rounded-full">
                                            <img src={photoURL} alt='' />
                                        </div>
                                    </div>
                                    :
                                    <div className="avatar">
                                        <div className="w-16 rounded-full">
                                            <img src={img} alt='' />
                                        </div>
                                    </div>
                            }
                        </div>
                        <p className='text-xl font-bold mb-3'>{reviewer}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-error btn-sm">Delete Review</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewsCard;