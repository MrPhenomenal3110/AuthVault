import React, { Children, useEffect } from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import auth from '../firebase';

const AuthContext = React.createContext()
export function useAuth(){
    return useContext(AuthContext);
}
export default function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();


    async function signup(email, password){
        return await createUserWithEmailAndPassword(auth,email, password);
    }
    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
        })
        return unsubscribe;
    },[])


    const value = {
        currentUser,
        signup
    }

    return (
    <AuthContext.Provider value={ value }>
        { children }
    </AuthContext.Provider>
  )
}