import React, { useContext } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import image from '../../assets/images/login/login.jpg';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../component/Hooks/useTitle';

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const location = useLocation();
    const navigate = useNavigate();
    useTitle('Login');

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
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
                        navigate(from, { replace: true });
                    })


            })
            .catch(err => console.error(err));

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
                        navigate(from, { replace: true });
                    })


            })
            .catch(err => console.error(err))
    };

    return (
        <div>
            <div className="hero my-8 max-w-5xl mx-auto">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center w-1/2 mx-auto lg:mr-24 lg:mb-8">
                        <img src={image} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm border-2 border-gray-400 bg-base-100">
                        <Form onSubmit={handleLogin} className="card-body">
                            <h1 className="text-4xl text-center font-bold">Login!</h1>
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
                                <label className="label">
                                    <Link to='' className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-error">Login</button>
                            </div>
                            <div>
                                <p className='text-center font-bold text-gray-600'>Or SignIn With</p>
                                <div className='form-control text-center mt-5'>
                                    <button onClick={handleGoogleSignIn} className="btn btn-outline btn-accent"><FcGoogle className='text-xl mr-2' />Google</button>
                                </div>
                                <p className='text-center text-gray-600 mt-5'>New to this website? <Link className='font-semibold text-orange-400' to='/signUp'>Sign Up</Link></p>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;