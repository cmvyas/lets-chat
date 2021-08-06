import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDIN4Odpbz9QkEbGcOMnwMd50fcHBoCqkI",
  authDomain: "let-schat-6b144.firebaseapp.com",
  projectId: "let-schat-6b144",
  storageBucket: "let-schat-6b144.appspot.com",
  messagingSenderId: "361513744619",
  appId: "1:361513744619:web:1d20432d0770fbc239e6ae",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
