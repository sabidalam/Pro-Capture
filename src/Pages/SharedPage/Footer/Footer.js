import React from 'react';
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
                    <a className="link link-hover">Photography</a>
                    <a className="link link-hover">Shots</a>
                    <a className="link link-hover">Editing</a>
                    <a className="link link-hover">Filming</a>
                </div>
                <div className='mt-6'>
                    <span className="footer-title text-dark">Explore</span>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Service</a>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">About</a>
                </div>
                <div className='mt-6'>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>

        </div>
    );
};

export default Footer;