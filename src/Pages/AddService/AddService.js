import React from 'react';

const AddService = () => {

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img = form.img.value;
        const description = form.description.value;

        const service = {
            title,
            img,
            description
        }

        fetch('http://localhost:5000/services', {
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
                    alert('Your Service Added Successfully');
                    form.reset();
                }
            })
            .catch(err => console.error(err));

    }
    return (
        <div className='my-8'>
            <h2 className='text-3xl text-center text-orange-600 font-semibold'>Add A Service</h2>
            <form onSubmit={handleAddService}>
                <div className='grid grid-cols-1 gap-4 max-w-3xl mx-auto my-5 px-8'>
                    <input name='title' type="text" placeholder="Title" className="input input-bordered input-info w-full" required />
                    <input name='img' type="text" placeholder="ImgURL" className="input input-bordered input-info w-full" />
                    <textarea name='description' className="textarea textarea-info textarea-bordered h-24 w-full" placeholder="Write your review" required></textarea>
                </div>
                <div className='text-center'>
                    <button className="btn btn-error px-10">Add</button>
                </div>
            </form>
        </div>
    );
};

export default AddService;