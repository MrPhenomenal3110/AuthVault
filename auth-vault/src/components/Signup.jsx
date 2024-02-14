import React from 'react'
import { useRef } from 'react';

function Signup() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

  return (
    <div className='w-full h-full flex justify-center items-center'>
        <div className='w-1/2 h-3/4 flex flex-col justify-around items-center rounded-3xl bg-blue-100'>
            <div className='w-full h-full flex flex-col bg-blue-100 rounded-3xl justify-center items-center shadow-2xl'>
            <br />
                <h1 className='text-3xl font-mono'><i className="mx-4 fa-solid fa-users"></i>Sign Up</h1>
                <br />
                <form className='flex flex-col justify-around items-center w-3/4' action="">
                    <label className='text-left text-xl w-full' htmlFor="">E-mail<span className='m-2 text-red-600'>*</span></label>
                    <input className='p-4 m-4 w-full' ref={emailRef} type="email" name="email" id="email" placeholder='e-mail' required/>
                    <label className='text-left text-xl w-full' htmlFor="">Password<span className='m-2 text-red-600'>*</span></label>
                    <input className='p-4 m-4 w-full' ref={passwordRef} type="password" name="password" id="password" placeholder='Enter a new password' required/>
                    <label className='text-left text-xl w-full' htmlFor="">Re-enter password<span className='m-2 text-red-600'>*</span></label>
                    <input className='p-4 m-4 w-full' ref={confirmPasswordRef} type="password" name="confirm-password" id="confirm-password" placeholder='Confirm password' required/>
                </form>
                <button className='rounded-xl bg-blue-500 text-white py-4 px-8 hover:bg-blue-600 hover:shadow-xl duration-300'>
                    Sign Up
                </button>
                <br />
                <div>
                    Already have an account ? <span className='text-blue-700 underline'><a className='cursor-pointer '>Log In</a></span>
                </div>
                <br />
            </div>
        </div>
        
    </div>
  )
}

export default Signup;