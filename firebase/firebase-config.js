
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
// import "firebase/firestore";
// import { getAuth, createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6_8U3VCHM0voZziIfhnod-Ik0qyZVSlU",
    authDomain: "messagingapp-dbfd0.firebaseapp.com",
    databaseURL: "https://messagingapp-dbfd0-default-rtdb.firebaseio.com",
    projectId: "messagingapp-dbfd0",
    storageBucket: "messagingapp-dbfd0.appspot.com",
    messagingSenderId: "911010586840",
    appId: "1:911010586840:web:f9f83382048dd2a1ec77ad"
};

let app;

if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app();
}

const db = app.firestore();
const authentication = firebase.auth();

export {db, authentication};


// Initialize Firebase
// const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
// export const authentication = getAuth(app);
// export const db = app.firestore();