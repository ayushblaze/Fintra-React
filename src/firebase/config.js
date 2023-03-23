import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBcalJKsLFikP5MnjN4HtTee8ST3QY5U8w",
  authDomain: "money-master-83e11.firebaseapp.com",
  projectId: "money-master-83e11",
  storageBucket: "money-master-83e11.appspot.com",
  messagingSenderId: "392998533208",
  appId: "1:392998533208:web:f902ea5c19ca4f008b322d"
};

// Initializing Firebase
firebase.initializeApp(firebaseConfig);

// Initializing Services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
