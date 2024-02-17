import React, { Children, useEffect } from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, updateEmail, updatePassword, sendEmailVerification} from 'firebase/auth';
import auth from '../firebase';

const AuthContext = React.createContext()
export function useAuth(){
    return useContext(AuthContext);
}
export default function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);


    async function signup(email, password){
        return await createUserWithEmailAndPassword(auth, email, password);
    }

    async function login(email,password){
        return await signInWithEmailAndPassword(auth, email, password);
    }

    async function logout(){
        return await auth.signOut()
    }

    async function resetPassword(email){
        return await sendPasswordResetEmail(auth,email);
    }

    async function emailUpdate(email){
        return await updateEmail(currentUser, email);
    }

    async function passwordUpdate(password){
        return await updatePassword(currentUser, password);
    }

    async function emailVerification(email){
        return await sendEmailVerification(email);
    }


    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false)
        })
        return ()=>{unsubscribe};
    },[])


    const value = {
        currentUser,
        signup,
        login,
        logout,
        emailUpdate,
        passwordUpdate,
        resetPassword,
        emailVerification
    }

    return (
    <AuthContext.Provider value={ value }>
        {!loading && children }
    </AuthContext.Provider>
  )
}