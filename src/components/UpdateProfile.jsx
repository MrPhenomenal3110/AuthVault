import React from 'react'
import { useRef, useState } from 'react';
import { useAuth } from '../context/AuthContext'
import { NavLink } from 'react-router-dom';

export default function ForgotPassword() {
    const emailRef = useRef();
    const { resetPassword } = useAuth();
    const [error, setError] = useState('');
    const [message, setMessage] = useState();
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e){
        e.preventDefault();
        setLoading(true);
        setError('')
        try {
            setError('');
            setLoading(true);
            await resetPassword(emailRef.current.value);
            setMessage('Check your inbox for further instructions !');
        } catch (e) {
            console.error('Authentication Error:', e.message);
            setError('Failed to reset password. It can happen if your email is incorrect or not registered previously. Try creating a new account or try again later.');
        }
        setLoading(false);
    }

  return (
    <div className='w-full h-full flex flex-row justify-center items-center bg-gradient-to-t from-cyan-300 to-blue-700'>
        <img className='bg-white p-0 md:p-6 shadow-2xl rounded-l-3xl z-10 w-0 h-0 sm:w-auto sm:h-3/4 mx-0 sm:-mx-2' src="./update-profile.jpg" alt="" />
        <div className='h-3/4 sm:w-1/3 p-4 flex flex-col justify-around items-center shadow-2xl bg-blue-100 rounded-3xl sm:rounded-r-3xl sm:-mx-2'>
            <div className='w-full h-full flex flex-col rounded-3xl sm:rounded-r-3xl justify-center items-center'>
            <br />
                <h1 className='text-xl sm:text-xl w-max font-mono'><i className="mx-4 fa-solid fa-key fa-xl"></i>Update Password</h1>
                <br />
                {message && <span className='text-green-600 bg-green-200 px-4 p-y-2 rounded'><b>{message}</b></span>}
                {error && <span className='text-red-600 m-4 bg-red-300 max-w-sm px-4 p-y-2 rounded'>{error}</span>}
                <form onSubmit={handleSubmit} className='flex flex-col justify-around items-center w-3/4' action="">
                    <label className='text-left text-xl w-full' htmlFor="">E-mail<span className='m-2 text-red-600'>*</span></label>
                    <input className='p-4 m-4 w-full' ref={emailRef} type="email" name="email" id="email" placeholder='e-mail' required/>
                    <button disabled={loading} className='m-4 cursor-pointer rounded-xl bg-gradient-to-t from-blue-600 to-violet-600 text-white py-4 px-8 hover:bg-blue-600 hover:shadow-xl duration-300'>
                        Reset Password
                    </button>
                    <div className='m-4'>
                        <span className='m-4 text-blue-700 underline'><NavLink to="/" className='cursor-pointer'>Cancel</NavLink></span>
                    </div>
                </form>
                <br />
            </div>
        </div>
        
    </div>
  )
}