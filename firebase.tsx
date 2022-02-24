// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAG2YtOWSTBmEL4T-U4P7jbLBUhqtAzd7c",
    authDomain: "twitterclone-3c6a6.firebaseapp.com",
    projectId: "twitterclone-3c6a6",
    storageBucket: "twitterclone-3c6a6.appspot.com",
    messagingSenderId: "12362262107",
    appId: "1:12362262107:web:c17383d38ecf0133c3c17e"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()
export { app, db, storage }