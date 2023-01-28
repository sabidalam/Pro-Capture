import React, { useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicesCard = ({ service }) => {
    const { _id, img, title, ratings, price, description } = service;

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div className="card w-80 mx-auto bg-base-100 border-2 border-gray-100" data-aos="flip-left">
            <PhotoProvider
                speed={() => 800}
                easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
            >
                <PhotoView src={img}>
                    <figure className='px-6 pt-6'><img className='rounded-xl' src={img} style={{ objectFit: 'cover' }} alt="" /></figure>
                </PhotoView>
            </PhotoProvider>
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