import React, { useEffect } from 'react';
import image1 from '../../../assets/images/about/about.jpg';
import image2 from '../../../assets/images/about/about2.jpg';
import image3 from '../../../assets/images/about/about3.jpg';
import image4 from '../../../assets/images/about/about4.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 3000 });
    }, []);
    return (
        <div className=''>
            <h1 className="mb-3 text-3xl py-12 font-bold text-center text-white">About Me</h1>
            <div className="hero max-w-5xl mx-auto">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8 lg:mr-5'>
                        <img src={image1} className=" w-full h-full rounded-lg shadow-2xl" alt='' data-aos="zoom-in" />
                        <img src={image2} className=" w-full h-full rounded-lg shadow-2xl" alt='' data-aos="zoom-in" />
                        <img src={image3} className=" w-full h-full rounded-lg shadow-2xl" alt='' data-aos="zoom-in" />
                        <img src={image4} className=" w-full h-full rounded-lg shadow-2xl" alt='' data-aos="zoom-in" />
                    </div>
                    <div className='lg:w-1/2 mb-10' data-aos='fade-left'>
                        <h1 className="text-4xl font-bold">Passion to Capture <br /> From The Sky to Ground</h1>
                        <p className='mt-5'>Technology has helped me to capture images of wildlife in new ways. In particular, remote-control cameras and camera traps have allowed me to get my camera closer to my subjects than ever before. Here are some of my favourite resulting images from across Africa.</p>
                        <p className='mt-5'>You can find out more about the devices used to get these images here. </p>
                        <button className="btn btn-error mt-4">Get More Info</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;