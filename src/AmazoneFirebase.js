import * as firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAmw_o9IJ7DiSQ1d1jZwKFaGPA24CtXq68",
    authDomain: "e-clone-46c05.firebaseapp.com",
    databaseURL: "https://e-clone-46c05.firebaseio.com",
    projectId: "e-clone-46c05",
    storageBucket: "e-clone-46c05.appspot.com",
    messagingSenderId: "228836144455",
    appId: "1:228836144455:web:7c904a947aa509a7fb0862",
    measurementId: "G-E0FLEX5L2Y",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };