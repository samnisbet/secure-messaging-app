
// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}
const auth = firebase.auth();
const db = getDatabase(app);

// TODO: Replace with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6_8U3VCHM0voZziIfhnod-Ik0qyZVSlU",
    authDomain: "messagingapp-dbfd0.firebaseapp.com",
    databaseURL: "https://messagingapp-dbfd0-default-rtdb.firebaseio.com",
    projectId: "messagingapp-dbfd0",
    storageBucket: "messagingapp-dbfd0.appspot.com",
    messagingSenderId: "911010586840",
    appId: "1:911010586840:web:f9f83382048dd2a1ec77ad"
  };
  
  // Get a reference to the database service
  const database = getDatabase(app);

  export default firebaseConfig;
  export { auth };