import React from 'react'
import { useRef, useState } from 'react';
import { useAuth } from '../context/AuthContext'
import { NavLink, useNavigate } from 'react-router-dom';

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();
        setLoading(true);
        setError('')
        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
        } catch (e) {
            console.error('Authentication Error:', e.message);
            if(e.message === 'Firebase: Error (auth/invalid-credential).'){
                setError('Invalid e-mail or incorrect password. Check your password or create an account.');
                
            }
            else{
                setError('Failed to sign in. Please try again later.');
            }
            setLoading(false)
            return;
            
        }
        setLoading(false);
        navigate("/");
    }

  return (
    <div className='w-full h-full flex flex-row justify-center items-center bg-gradient-to-t from-cyan-300 to-violet-400'>
        <img className='bg-white p-0 md:p-6 shadow-2xl rounded-l-3xl z-10 w-0 h-0 sm:w-auto sm:h-3/4 mx-0 sm:-mx-2' src="./signup.webp" alt="" />
        <div className='w-3/4 h-fit sm:w-1/2 sm:h-3/4 p-4 flex flex-col justify-around items-center shadow-2xl bg-blue-50 sm:rounded-r-3xl rounded-3xl'>
            <div className='w-full h-full flex flex-col rounded-3xl sm:rounded-r-3xl justify-center items-center'>
            <br />
                <h1 className='text-xl sm:text-3xl font-mono'><i className="mx-4 fa-solid fa-right-to-bracket fa-xl text-violet-500"></i>Login</h1>
                <br />
                {error && <span className='text-red-600 m-4 bg-red-300 max-w-sm px-4 p-y-2 rounded'>{error}</span>}
                <form onSubmit={handleSubmit} className='flex flex-col justify-around items-center w-3/4' action="">
                    <label className='text-left text-xl w-full' htmlFor="">E-mail<span className='m-2 text-red-600'>*</span></label>
                    <input className='p-4 m-4 w-full' ref={emailRef} type="email" name="email" id="email" placeholder='e-mail' required/>
                    <label className='text-left text-xl w-full' htmlFor="">Password<span className='m-2 text-red-600'>*</span></label>
                    <input className='p-4 m-4 w-full' ref={passwordRef} type="password" name="password" id="password" placeholder='Enter a new password' required/>
                    <button disabled={loading} className='cursor-pointer rounded-xl bg-gradient-to-t from-violet-600 to-cyan-700 text-white py-4 px-8 hover:bg-blue-600 hover:shadow-xl duration-300'>
                        Login
                    </button>
                </form>
                <br />
                <div>
                    <span className='text-blue-700 underline'><NavLink to="/forgot-password" className='cursor-pointer'>Forgot password ?</NavLink></span>
                </div>
                <br />
                <div>
                    Need an account ? <span className='text-blue-700 underline'><NavLink to="/signup" className='cursor-pointer'>Sign Up</NavLink></span>
                </div>
            </div>
        </div>
        
    </div>
  )
}