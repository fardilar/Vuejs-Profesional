import firebase, { firestore } from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBJIim79-6oMeLguy-bC6NEQXIt8_6RQSE",
    authDomain: "auth-7639e.firebaseapp.com",
    databaseURL: "https://auth-7639e.firebaseio.com",
    projectId: "auth-7639e",
    storageBucket: "auth-7639e.appspot.com",
    messagingSenderId: "129952830026",
    appId: "1:129952830026:web:e786ef29e26c937e4dccb3"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export {db, auth}