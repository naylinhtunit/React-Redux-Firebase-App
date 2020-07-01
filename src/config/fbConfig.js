import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA-jrwwHpLJNMc3_BxCWw5wborAhQksQaw",
    authDomain: "react-first-p.firebaseapp.com",
    databaseURL: "https://react-first-p.firebaseio.com",
    projectId: "react-first-p",
    storageBucket: "react-first-p.appspot.com",
    messagingSenderId: "64854377709"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase