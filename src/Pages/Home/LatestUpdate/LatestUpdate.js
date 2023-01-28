import React, { useEffect } from 'react';
import image1 from '../../../assets/images/updates/zambia.jpg';
import image2 from '../../../assets/images/updates/meerkats.jpg';
import image3 from '../../../assets/images/updates/Africa.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const LatestUpdate = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div className='my-12'>
            <h1 className="mb-3 text-3xl font-bold text-center text-white">Latest Updates</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-6xl mx-auto mt-8'>
                <div className="w-96" data-aos='zoom-in-right'>
                    <figure><img src={image1} alt="" className='w-11/12 ml-5' /></figure>
                    <div className="mt-5 ml-5">
                        <h2 className="text-2xl font-semibold">Visiting Zambia Forest</h2>
                        <p className='mt-4'>Zambia was amazing, spent time in Liuwa Plain, Kafue, <br /> Kasanka and Lower Zambezi National Parks. Interaction with animals was amazing.</p>
                    </div>
                </div>
                <div className="w-96 " data-aos='flip-left'>
                    <figure><img src={image2} alt="" className='w-11/12 ml-5' /></figure>
                    <div className="mt-4 ml-5">
                        <h2 className="text-2xl font-semibold">Makgadikgadi Pans Region</h2>
                        <p className='mt-4'>These wild meerkats have been habituated to humans so it possible to get close to them. Sometimes they will use people as convenient lookout-posts!</p>
                    </div>
                </div>
                <div className="w-96" data-aos='zoom-in-left'>
                    <figure><img src={image3} alt="" className='w-11/12 ml-5' /></figure>
                    <div className="mt-4 ml-5">
                        <h2 className="text-2xl font-semibold">Visiting African Forest</h2>
                        <p className='mt-4'>Africa's forests are some of the natural wonders of the world. I'm constantly amazed by the unique forest ecosystems on the continent.</p>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <button className="btn btn-error mt-4 px-10">View All</button>
            </div>
        </div>
    );
};

export default LatestUpdate;