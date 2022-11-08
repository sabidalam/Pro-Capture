import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServicesCard from '../SharedPage/ServicesCard/ServicesCard';

const AllServices = () => {
    const services = useLoaderData();
    return (
        <div className='my-14'>
            <div className='text-center'>
                <h1 className='font-bold text-2xl text-orange-600'>Services Area</h1>
                <p className='w-1/2 mx-auto mt-3'>Simply Clicked and Simply Better I Can Gives You The Visible Difference</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto my-10'>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}>
                    </ServicesCard>)
                }

            </div>
        </div>
    );
};

export default AllServices;