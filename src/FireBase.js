import firebase from 'firebase/app';
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDJOM6lqVRKtj8tESZ_j90AUDowFJVOGdY",
    authDomain: "botogram-8f06e.firebaseapp.com",
    projectId: "botogram-8f06e",
    storageBucket: "botogram-8f06e.appspot.com",
    messagingSenderId: "451984555832",
    appId: "1:451984555832:web:70443bac19ad549f7bcbcd"
}).auth();