import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSingOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))

    }
    const navItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/services'>Services</Link></li>
        <li className='font-semibold'><Link to='/faq'>FAQ</Link></li>
        {
            user?.uid &&
            <>
                <li className='font-semibold'><Link to='/reviews'>My-Reviews</Link></li>
                <li className='font-semibold'><Link to='/addService'>Add Service</Link></li>
            </>
        }
    </>
    return (
        <div className='border-b-2'>
            <div className="max-w-5xl mx-auto navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to='/'><img src={logo} alt="" style={{ height: '80px' }} /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.uid ?
                            <>
                                <Link to=''>
                                    {
                                        user?.photoURL ?
                                            <img
                                                className='mr-3 rounded-full'
                                                src={user?.photoURL}
                                                style={{ height: '30px' }}
                                                alt=''>
                                            </img>
                                            :
                                            <FaUser className='mr-3'></FaUser>
                                    }
                                </Link>
                                <button onClick={handleSingOut} className="btn btn-sm btn-error normal-case"><Link to='/login'>Logout</Link></button>
                            </>
                            :
                            <>
                                <Link className='font-semibold mr-3' to='/signUp'>SignUp</Link>
                                <Link className='font-semibold mr-3' to='/login'>Login</Link>
                            </>
                    }

                </div>
            </div>

        </div>
    );
};

export default Header;