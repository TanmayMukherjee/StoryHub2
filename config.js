import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyBROGxex5IuBZFqZSBU3MsAYhi0M0vDwiM",
    authDomain: "storyhub-4e093.firebaseapp.com",
    databaseURL: "https://storyhub-4e093-default-rtdb.firebaseio.com",
    projectId: "storyhub-4e093",
    storageBucket: "storyhub-4e093.appspot.com",
    messagingSenderId: "670411193148",
    appId: "1:670411193148:web:e2f8160ba8605a2d5bfc39"
  };
  firebase.initializeApp(firebaseConfig); 
  export default firebase.firestore();