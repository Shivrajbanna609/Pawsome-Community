import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SiteNavbar() {
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
        <>
            <div className='bg-slate-500 w-full h-0'>
                .
            </div>
            <nav className={`fixed top-0 left-0 w-full bg-white shadow-lg z-10 transition-all duration-300 ${visible ? '' : 'transform -translate-y-full'}`}>
                <div className="wrapper container flex items-center justify-between py-4">
                    <div className="logo">
                        <img width="60px" src={require('../../assets/PC_logo.png')} alt="Logo" />
                    </div>
                    <input type="radio" name="slider" id="menu-btn" />
                    <input type="radio" name="slider" id="close-btn" />
                    <ul className="nav-links hidden md:flex flex-1 justify-center items-center">
                        <label htmlFor="close-btn" className="btn close-btn">
                            <img width="20px" src={require("../../assets/close.png")} alt="Close" />
                        </label>
                        <li className='mr-5'>
                            <Link to="/">Home</Link>
                        </li>
                        <li className='mr-5'>
                            <Link to="/pet">Pet</Link>
                        </li>
                        <li className='mr-5'>
                            <Link to="/chat">Chat</Link>
                        </li>
                        <li className='mr-5'>
                            <Link to="/about-us">About Us</Link>
                        </li>
                    </ul>

                    <div className='flex items-center'>
                        <div className='m-3 cursor-pointer'>
                            <img width="28px" src={require('../../assets/loupe.png')} alt="Search" />
                        </div>
                        <div className='m-3 cursor-pointer'>
                            <Link to="/login"><img width="28px" src={require('../../assets/user.png')} alt="User" /></Link>
                        </div>
                        {/* <div className='m-3 cursor-pointer'>
                            <img width="28px" src={require('../assets/heart.png')} alt="Favorites" />
                        </div>
                        <div className='m-3 cursor-pointer'>
                            <img width="28px" src={require('../assets/parcel.png')} alt="Parcel" />
                        </div> */}
                    </div>

                    <label htmlFor="menu-btn" className="btn menu-btn md:hidden">
                        <img width="30px" src={require("../../assets/menu.png")} alt="Menu" />
                    </label>

                </div>
            </nav>
        </>
    );
}

export default SiteNavbar;
