import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB-az4TQDdG1g8VLfQOOadVj6tYSyKJFRw",
    authDomain: "olive-3ea8f.firebaseapp.com",
    projectId: "olive-3ea8f",
    storageBucket: "olive-3ea8f.appspot.com",
    messagingSenderId: "871758479451",
    appId: "1:871758479451:web:965394de5323cd1b64ff7e",
    measurementId: "G-JZSZBFBMND"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
