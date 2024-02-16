import React from 'react'
import { useRef, useState } from 'react';
import { useAuth } from '../context/AuthContext'

function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const { signup, currentUser } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // async function handleSubmit(e){
    //     e.preventDefault();
    //     setLoading(true);
    //     if(passwordRef.current.value !== confirmPasswordRef.current.value){
    //         setLoading(false)
    //         return setError('Passwords do not match !')
    //     }
    //     try{
    //         setError('');
    //         await signup(emailRef.current.value, passwordRef.current.value);
    //     }catch{
    //         setError('Failed to create an account !');
    //     }
    //     setLoading(false);
    // }
    async function handleSubmit(e){
        e.preventDefault();
        setLoading(true);
        setError('')
        if(passwordRef.current.value !== confirmPasswordRef.current.value){
            setLoading(false)
            return setError('Passwords do not match !')
        }
        try {
            setError('');
            await signup(emailRef.current.value, passwordRef.current.value);
        } catch (e) {
            console.error('Authentication Error:', e.message);
            if(e.message === 'Firebase: Error (auth/email-already-in-use).'){
                setError('User Alredy exists. try logging in !')
            }
            else{
                setError('Failed to create an account. Please try again later.');
            }
        }
        setLoading(false);
    }

  return (
    <div className='w-full h-full flex flex-row justify-center items-center bg-gradient-to-t from-cyan-300 to-violet-400'>
        <img className='bg-white p-6 shadow-2xl rounded-l-3xl z-10 h-3/4 -mx-6' src="/signup.webp" alt="" />
        <div className='w-1/2 h-3/4 p-4 flex flex-col justify-around items-center shadow-2xl bg-blue-50 rounded-3xl'>
            <div className='w-full h-full flex flex-col rounded-3xl justify-center items-center'>
            <br />
                <h1 className='text-3xl font-mono'><i className="mx-4 fa-solid fa-users"></i>Sign Up</h1>
                <br />
                {error && <span className='text-red-600 bg-red-300 px-4 p-y-2 rounded'>{error}</span>}
                { JSON.stringify(currentUser.email) }
                <form onSubmit={handleSubmit} className='flex flex-col justify-around items-center w-3/4' action="">
                    <label className='text-left text-xl w-full' htmlFor="">E-mail<span className='m-2 text-red-600'>*</span></label>
                    <input className='p-4 m-4 w-full' ref={emailRef} type="email" name="email" id="email" placeholder='e-mail' required/>
                    <label className='text-left text-xl w-full' htmlFor="">Password<span className='m-2 text-red-600'>*</span></label>
                    <input className='p-4 m-4 w-full' ref={passwordRef} type="password" name="password" id="password" placeholder='Enter a new password' required/>
                    <label className='text-left text-xl w-full' htmlFor="">Re-enter password<span className='m-2 text-red-600'>*</span></label>
                    <input className='p-4 m-4 w-full' ref={confirmPasswordRef} type="password" name="confirm-password" id="confirm-password" placeholder='Confirm password' required/>
                    <button disabled={loading} className='cursor-pointer rounded-xl bg-gradient-to-t from-violet-600 to-cyan-700 text-white py-4 px-8 hover:bg-blue-600 hover:shadow-xl duration-300'>
                        Sign Up
                    </button>
                </form>
                <br />
                <div>
                    Already have an account ? <span className='text-blue-700 underline'><a className='cursor-pointer'>Log In</a></span>
                </div>
                <br />
            </div>
        </div>
        
    </div>
  )
}

export default Signup;