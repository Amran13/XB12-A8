import React from 'react';
import playStore from '../assets/play_store.svg'
import appleStore from '../assets/apple_store.svg'
import phoneImg from '../assets/hero.png'
const Header = () => {
    return (
        <div className='text-center'>
            <div className='space-y-2'>
                <h2 className='text-7xl font-bold'>We Build</h2>
                <h2 className='text-7xl font-bold'><span className='text-violet-700'>Productive </span>Apps</h2>
            </div>
            <p className='font-medium text-gray-500 mt-10 text-xl'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br></br> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='space-x-6 mt-8'>
                <button className='btn border rounded border-gray-300 px-6 py-2'>
                    <div className='flex items-center space-x-2'>
                        <img src={playStore} alt="play_store" />
                        <p className='text-gray-500 font-bold'>Google Play</p>
                    </div>
                </button>
                <button className='btn border rounded border-gray-300 px-6 py-2'>
                    <div className='flex items-center space-x-2'>
                        <img src={appleStore} alt="play_store" />
                        <p className='text-gray-500 font-bold'>Apple Store</p>
                    </div>
                </button>
            </div>
            <div className='flex justify-center mt-20'>
                <img src={phoneImg} alt="" />
            </div>
            <section className="bg-linear-to-r from-purple-600 to-indigo-500 py-16 text-white text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                    Trusted By Millions, Built For You
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                    {/* Total Downloads */}
                    <div className="space-y-2">
                        <h3 className="text-lg text-gray-200">Total Downloads</h3>
                        <p className="text-5xl font-extrabold">29.6M</p>
                        <p className="text-sm text-gray-300">21% More Than Last Month</p>
                    </div>

                    {/* Total Reviews */}
                    <div className="space-y-2">
                        <h3 className="text-lg text-gray-200">Total Reviews</h3>
                        <p className="text-5xl font-extrabold">906K</p>
                        <p className="text-sm text-gray-300">46% More Than Last Month</p>
                    </div>

                    {/* Active Apps */}
                    <div className="space-y-2">
                        <h3 className="text-lg text-gray-200">Active Apps</h3>
                        <p className="text-5xl font-extrabold">132+</p>
                        <p className="text-sm text-gray-300">31 More Will Launch</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Header;