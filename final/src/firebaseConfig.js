// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
export { db };