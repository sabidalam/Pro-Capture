import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesCard from '../../SharedPage/ServicesCard/ServicesCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-14'>
            <div className='text-center'>
                <h1 className='font-bold text-2xl text-orange-600'>Services Area</h1>
                <p className='w-1/2 mx-auto mt-3'>Simply Clicked and Simply Better I Can Gives You The Visible Difference</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto my-10'>
                {
                    services.map(service => <ServicesCard
                        key={service.service_id}
                        service={service}>
                    </ServicesCard>)
                }

            </div>
            <div className='text-center'>
                <Link to='/services'><button className="btn btn-error">View All Services</button></Link>
            </div>
        </div>
    );
};

export default Services;