import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Our web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxTcH_I0DHvjAgzezwhJJMQ_I-oEkQA5U",
  authDomain: "linkedin-clone-1112a.firebaseapp.com",
  projectId: "linkedin-clone-1112a",
  storageBucket: "linkedin-clone-1112a.appspot.com",
  messagingSenderId: "55896190304",
  appId: "1:55896190304:web:61c45b1ea77d160665c205"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
