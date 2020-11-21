import * as firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA3-kSgWGXRVogfWwRA3GForPGfPAO_OnM",
    authDomain: "discord-db-a8e4b.firebaseapp.com",
    databaseURL: "https://discord-db-a8e4b.firebaseio.com",
    projectId: "discord-db-a8e4b",
    storageBucket: "discord-db-a8e4b.appspot.com",
    messagingSenderId: "997356284646",
    appId: "1:997356284646:web:258d27fbfe01c8a816e927",
    measurementId: "G-V0Q1G6QB1F",
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };

// const firebaseConfig = {
//     apiKey: "AIzaSyA3-kSgWGXRVogfWwRA3GForPGfPAO_OnM",
//     authDomain: "discord-db-a8e4b.firebaseapp.com",
//     databaseURL: "https://discord-db-a8e4b.firebaseio.com",
//     projectId: "discord-db-a8e4b",
//     storageBucket: "discord-db-a8e4b.appspot.com",
//     messagingSenderId: "997356284646",
//     appId: "1:997356284646:web:258d27fbfe01c8a816e927",
//     measurementId: "G-V0Q1G6QB1F",
// };