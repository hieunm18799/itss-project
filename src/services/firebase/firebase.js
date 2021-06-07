import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAhJ1Km2Cf7Ddy9YA4XdNSspwpPBzV__iM",
    authDomain: "itss-elearning-web.firebaseapp.com",
    projectId: "itss-elearning-web",
    storageBucket: "itss-elearning-web.appspot.com",
    messagingSenderId: "863244737757",
    appId: "1:863244737757:web:4fc1104578ab6e56544f34"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const firebaseAuth = firebase.auth();
