import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-blue-200">
                <div>
                    <img src={logo} alt="" />
                    <p className='ml-5'>ProCapture.<br />Wedding Photography and Filming</p>
                </div>
                <div className='mt-6'>
                    <span className="footer-title">Services</span>
                    <Link to='' className="link link-hover">Photography</Link>
                    <Link to='' className="link link-hover">Shots</Link>
                    <Link to='' className="link link-hover">Editing</Link>
                    <Link to='' className="link link-hover">Filming</Link>
                </div>
                <div className='mt-6'>
                    <span className="footer-title text-dark">Explore</span>
                    <Link to='' className="link link-hover">Home</Link>
                    <Link to='' className="link link-hover">Services</Link>
                    <Link to='' className="link link-hover">Blog</Link>
                    <Link to='' className="link link-hover">About</Link>
                </div>
                <div className='mt-6'>
                    <span className="footer-title">Legal</span>
                    <Link to='' className="link link-hover">Terms of use</Link>
                    <Link to='' className="link link-hover">Privacy policy</Link>
                    <Link to='' className="link link-hover">Cookie policy</Link>
                </div>
            </footer>

        </div>
    );
};

export default Footer;