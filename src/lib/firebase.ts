import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAmdwRp9s61bxZtvAfb0hzLNHJzauveAnI",
    authDomain: "wanzeller-app.firebaseapp.com",
    projectId: "wanzeller-app",
    storageBucket: "wanzeller-app.firebasestorage.app",
    messagingSenderId: "1038556115126",
    appId: "1:1038556115126:web:7bfd91fb6030175090b617"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { app, db };

