import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBE6gEas0UHh5fcnGrNBm-FOZlb_QSEbWg",
    authDomain: "japanese-course-9a005.firebaseapp.com",
    databaseURL: "https://japanese-course-9a005.firebaseio.com",
    projectId: "japanese-course-9a005",
    storageBucket: "japanese-course-9a005.appspot.com",
    messagingSenderId: "970236101184",
    appId: "1:970236101184:web:2d3afa5a58b647dd3755a5",
    measurementId: "G-NHGT3Z3QEZ"
  };

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const firebaseAuth = firebase.auth();
