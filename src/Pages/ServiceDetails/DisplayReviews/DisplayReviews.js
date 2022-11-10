import React from 'react';
import img from '../../../assets/images/avater.jpg';

const DisplayReviews = ({ review }) => {
    const { message, photoURL, reviewer } = review;
    return (
        <div>
            <div className="card w-80 h-52 bg-base-100 border-2 border-gray-400">
                <div className="card-body">
                    <p className='text-xl my-3 text-center'>"{message}"</p>
                    <div className='flex content-evenly items-center'>
                        <div>
                            {
                                photoURL ?
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src={photoURL} alt='' />
                                        </div>
                                    </div>
                                    :
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src={img} alt='' />
                                        </div>
                                    </div>
                            }
                        </div>
                        <span className='font-bold mb-3 ml-2'>{reviewer}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayReviews;