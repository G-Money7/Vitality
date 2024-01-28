import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { getFirestore } from 'firebase/firestore';
// import router from './router';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1wwlMFIVVNiMcQqtgDWztSfxz0Q1dcOk",
    authDomain: "final-project-b16af.firebaseapp.com",
    projectId: "final-project-b16af",
    storageBucket: "final-project-b16af.appspot.com",
    messagingSenderId: "853604315420",
    appId: "1:853604315420:web:66ce6e3ded63021e59cad9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


firebase.initializeApp(firebaseConfig);
createApp(App).mount('#app')
