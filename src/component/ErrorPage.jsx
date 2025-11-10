import React from 'react';
import Error from '../assets/App-Error.png'
import { useNavigate } from 'react-router-dom';
const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className='text-center flex flex-col items-center space-y-12'>
            <img className='w-1/3' src={Error} alt="" />
            <h2 className='text-7xl font-bold'>Ooops, Page not found</h2>
            <button onClick={() => navigate(-1)} className="btn bg-linear-to-r from-indigo-500 to-blue-500 text-white border-none hover:from-indigo-600 hover:to-blue-600 flex items-center gap-2">
                Go Back
            </button>
        </div>
    );
};

export default ErrorPage;