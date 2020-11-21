import * as firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDJM01JK-G5VmNq__WKym51LCgfYD20v_A",
    authDomain: "twitter-clone-one-one.firebaseapp.com",
    databaseURL: "https://twitter-clone-one-one.firebaseio.com",
    projectId: "twitter-clone-one-one",
    storageBucket: "twitter-clone-one-one.appspot.com",
    messagingSenderId: "63948883961",
    appId: "1:63948883961:web:e23a54ffd76bf9bde31f28",
    measurementId: "G-EHRW56LMXG",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };
// export default db;