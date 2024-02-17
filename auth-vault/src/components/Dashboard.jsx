import React, { useEffect, useState } from 'react'
import AuthProvider, { useAuth } from '../context/AuthContext'
import { NavLink, useNavigate } from 'react-router-dom';

export default function Dashboard() {

    const { currentUser } = useAuth();
    const [loading, setLoading] = useState();
    const [error, setError] = useState('');
    const { logout } = useAuth();
    const navigate = useNavigate();

    useEffect(()=>{
        if(!currentUser){
            navigate("/login");
        }
    })

    function handleLogout(){
        try{
            setError('');
            logout();
            navigate("/login");
        }catch{
            setError('Failed to logout !');
        }
    }

    function handleUpdate(){
        navigate('/update-profile');
    }

    const background = '/profile-bg.jpg'

    return (
    <AuthProvider>
        <div className='w-full h-full flex flex-row justify-center items-center bg-gradient-to-t from-cyan-300 to-violet-400' style={{ backgroundImage: `url(${background})` }}>
            <div className='h-full w-full flex justify-center items-center'>
                <div className='shadow-2xl z-10 bg-yellow-50 rounded-2xl p-4 h-max absolute top-1/4 w-3/4 max-w-md flex flex-col justify-between items-center'>
                    {error && <span className='text-red-600 m-4 bg-red-300 max-w-sm px-4 p-y-2 rounded'>{error}</span>}
                    <h2 className='text-3xl p-4 m-4'><strong>Profile</strong></h2>
                    <div className='flex flex-col items-center'>
                        <div className='text-lg p-4 m-2'>
                            <strong>Email : </strong>{currentUser && currentUser.email }
                        </div>
                        <button disabled={loading} onClick={handleUpdate}  className='m-4 cursor-pointer rounded-xl bg-gradient-to-t from-orange-600 to-yellow-500 text-white py-4 px-8 hover:bg-blue-600 hover:shadow-xl duration-300'>
                        Update password
                        </button>
                    </div>
                    <button disabled={loading} onClick={handleLogout} className='m-4 cursor-pointer rounded-xl bg-gradient-to-t from-red-600 to-orange-700 text-white py-4 px-8 hover:bg-blue-600 hover:shadow-xl duration-300'>
                        Log out
                    </button>

                </div>
            </div>
        </div>
    </AuthProvider>
    )
}
