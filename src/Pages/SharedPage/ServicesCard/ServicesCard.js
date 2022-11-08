import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    const { _id, img, title, ratings, price, description } = service;
    return (
        <div className="card w-80 mx-auto bg-base-100 border-2 border-gray-100">
            <figure className='px-6 pt-6'><img className='rounded-xl' src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className='flex content-between items-center'>
                    <p className='text-xl font-semibold text-orange-600'>Price: ${price}</p>
                    <div className='flex items-center'>
                        <FaStar className='mr-2 text-yellow-400'></FaStar>
                        <p className='text-xl font-semibold'>{ratings}</p>
                    </div>
                </div>
                <p>
                    {
                        description.length > 100 ?
                            <>{description.slice(0, 100) + '...'}</>
                            :
                            <p>{description}</p>
                    }
                </p>
                <Link to={`/serviceDetails/${_id}`}><button className='btn btn-outline btn-error btn-sm'>View Details</button></Link>
            </div>
        </div>
    );
};

export default ServicesCard;