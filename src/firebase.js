import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAVzRf7jCHDhenKrqYZkHJkxPivjlpuvq0",
    authDomain: "authvault-development.firebaseapp.com",
    projectId: "authvault-development",
    storageBucket: "authvault-development.appspot.com",
    messagingSenderId: "300521468593",
    appId: "1:300521468593:web:b2d564a1265b7bcfa6a890"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;