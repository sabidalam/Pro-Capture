import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import Reviews from '../Reviews/Reviews';

const ServiceDetails = () => {
    const service = useLoaderData();
    const { img, title, price, ratings, description } = service;
    return (
        <div>
            <div className="hero bg-base-200 py-8">
                <div className="hero-content max-w-5xl mx-auto flex-col lg:flex-row">
                    <div className='lg:w-1/2 lg:mr-16 lg:mb-8'>
                        <img src={img} className="rounded-lg shadow-2xl" alt='' />
                    </div>
                    <div className='lg:w-1/2'>
                        <h1 className="text-3xl font-bold">{title}</h1>
                        <div className='mt-3'>
                            <p className='text-xl text-error font-semibold'>Price: ${price}</p>
                            <div className='flex items-center mt-3'>
                                <p className='text-xl font-semibold'>Rating:</p>
                                <FaStar className='mx-2 text-yellow-400'></FaStar>
                                <p className='text-xl font-semibold'>{ratings}</p>
                            </div>
                        </div>
                        <p className="py-6">Description: {description}</p>
                    </div>
                </div>
            </div>
            <Reviews></Reviews>
        </div>
    );
};

export default ServiceDetails;