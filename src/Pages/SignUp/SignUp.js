import React, { useContext } from 'react';
import { Form, Link, useNavigate } from 'react-router-dom';
import image from '../../assets/images/login/login.jpg';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';
import useTitle from '../../component/Hooks/useTitle';

const SignUp = () => {
    const { createUser, googleSignIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    useTitle('SignUp');

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                const currentUser = { email: user.email }
                console.log(currentUser);
                fetch('https://pro-capture-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('proCapture-token', data.token);
                        navigate('/');
                    })
            })
            .catch(err => console.error(err))
    };

    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                const currentUser = { email: user.email }
                console.log(currentUser);
                fetch('https://pro-capture-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('proCapture-token', data.token);
                        navigate('/');
                    })
            })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <div className="hero my-8 max-w-5xl mx-auto">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center w-1/2 mx-auto lg:mr-24 lg:mb-8">
                        <img src={image} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm border-2 border-gray-400 bg-base-100">
                        <Form onSubmit={handleSignUp} className="card-body">
                            <h1 className="text-4xl text-center font-bold">Sign-Up!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-error">Sign-Up</button>
                            </div>
                            <div>
                                <p className='text-center font-bold text-gray-600'>Or SignIn With</p>
                                <div className='form-control text-center mt-5'>
                                    <button onClick={handleGoogleSignIn} className="btn btn-outline btn-accent"><FcGoogle className='text-xl mr-2' />Google</button>
                                </div>
                                <p className='text-center text-gray-600 mt-5'>Already Have an Account? <Link className='font-semibold text-orange-400' to='/login'>Login</Link></p>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;