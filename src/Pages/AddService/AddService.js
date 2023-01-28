import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../component/Hooks/useTitle';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AddService = () => {
    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img = form.img.value;
        const price = form.price.value;
        const description = form.description.value;

        const service = {
            title,
            img,
            price,
            description
        }

        fetch('https://pro-capture-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast('Your Service Added Successfully', {
                        position: 'top-center'
                    });
                    form.reset();
                }
            })
            .catch(err => console.error(err));
    }

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    useTitle('Add Service');

    return (
        <div className='my-8'>
            <h2 className='text-3xl text-center text-white font-semibold' data-aos='fade-right'>Add A Service For You</h2>
            <form onSubmit={handleAddService} data-aos='zoom-in'>
                <div className='grid grid-cols-1 gap-4 max-w-2xl mx-auto my-5 px-8'>
                    <input name='title' type="text" placeholder="Title" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" required />
                    <input name='img' type="text" placeholder="PhotoURL" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" required />
                    <input name='price' type='number' placeholder="Price" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" required />
                    <textarea name='description' className="textarea textarea-bordered h-24 w-full" placeholder="Write about your service" required></textarea>
                </div>
                <div className='text-center'>
                    <button className="btn btn-error px-10">Add</button>
                    <ToastContainer />
                </div>
            </form>
        </div>
    );
};

export default AddService;