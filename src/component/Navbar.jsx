import React from 'react';
import logo from '../assets/logo.png'
import github from '../assets/github.svg'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const link = <>
        <Link to="/">Home</Link>
        <Link to="/my-apps">Apps</Link>
        <Link to="/installations">Installations</Link>

    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 space-x-4 p-2 shadow bg-base-100 rounded-box w-52">
                        {link}
                    </ul>
                </div>
                <Link to="/" className='flex justify-center items-center'>
                    <img className='w-12' src={logo} alt="" />
                    <p className='text-xl font-bold text-violet-600 mr-4'>HERO.IO</p>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-4 font-bold text-gray-600">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">
                <a href="https://github.com/Amran13" target="_blank">
                    <button className="btn bg-linear-to-r from-indigo-500 to-blue-500 text-white border-none hover:from-indigo-600 hover:to-blue-600 flex items-center gap-2">
                        <img src={github} alt="" />
                        Contribute
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Navbar;