import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from '../../../assets/images/banner/banner1.jpg'
import banner2 from '../../../assets/images/banner/banner2.jpg'
import banner3 from '../../../assets/images/banner/banner3.jpg'
import './Banner.css';


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {
    return (
        <div className='relative'>
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                speed={1000}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <div className='relative' style={{ height: '500px' }} >
                    <SwiperSlide>
                        <div className='carousel-img'>
                            <img src={banner3} alt="" style={{ height: '500px', width: '2000px' }} />
                        </div>
                        <div className="absolute transform -translate-y-1/2 lg:left-24 top-1/3 lg:top-1/2">
                            <h1 className='text-4xl text-white text-center lg:text-left font-bold mb-5'>
                                Living The Dream of <br />Capturing <br />
                                Awesome Moments
                            </h1>
                            <p className='text-white text-center lg:text-left mx-8 lg:mx-0 mb-4'>My Experience Ranges From Studio Photography <br /> To Nature and Wildlife Photography</p>
                            <div className="text-center lg:text-left">
                                <button className="btn btn-error mr-5">Discover More</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='carousel-img'>
                            <img src={banner1} alt="" style={{ height: '500px', width: '2000px' }} />
                        </div>
                        <div className="absolute transform -translate-y-1/2 lg:left-204 top-1/4">
                            <h1 className='text-4xl text-gray-400 text-center font-bold mb-12'>
                                "Capturing Moments Into Memories"
                            </h1>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='carousel-img'>
                            <img src={banner2} alt="" style={{ height: '500px', width: '2000px' }} />
                        </div>
                        <div className="absolute transform -translate-y-1/2 lg:left-24 top-1/3 lg:top-1/2">
                            <h1 className='text-4xl text-white text-center lg:text-left font-bold mb-5'>
                                Nature always wears <br /> the colors of the spirit
                            </h1>
                            <p className='text-white text-center lg:text-left mx-8 lg:mx-0 mb-4'>My Experience Ranges From Studio Photography <br /> To Nature and Wildlife Photography</p>
                            <div className="text-center lg:text-left">
                                <button className="btn btn-error mr-5">Discover More</button>
                            </div>
                        </div>
                    </SwiperSlide>
                </div>

            </Swiper>
        </div>
    );
};

export default Banner;