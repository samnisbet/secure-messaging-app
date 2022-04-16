// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, initializeFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage'

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

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(app);

export const auth = getAuth(app);
export const storage = getStorage(app)
export const db = initializeFirestore(app, getFirestore);