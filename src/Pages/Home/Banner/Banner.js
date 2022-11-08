import React from 'react';
import img from '../../../assets/images/banner.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className="relative" style={{ height: '540px' }}>
            <div className='banner-img w-full'>
                <img src={img} className="" alt="" style={{ height: '540px', width: '1270px' }} />
            </div>
            <div className="absolute transform -translate-y-1/2 lg:left-24 top-1/3 ml-4">
                <h1 className='text-4xl font-bold text-white mb-12'>Living The Dream of <br />Capturing <br />
                    Awesome Moments</h1>
            </div>
            <div className="absolute  transform -translate-y-1/2 lg:left-24 top-1/2 mt-4 ml-4 lg:mt-0">
                <p className='text-white w-1/2'>My Experience Ranges From Studio Photography To Nature and Wildlife Photography</p>
            </div>
            <div className="absolute flex justify-around transform -translate-y-1/3 lg:left-24 top-2/3 mt-4 ml-4 lg:mt-0">
                <button className="btn btn-error mr-5">Discover More</button>
            </div>
        </div>
    );
};

export default Banner;