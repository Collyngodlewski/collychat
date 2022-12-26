import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyC61nFdzk1AjHV_RDlY2Rh3EOmjnzJLztg",
    authDomain: "collychat-cbe20.firebaseapp.com",
    projectId: "collychat-cbe20",
    storageBucket: "collychat-cbe20.appspot.com",
    messagingSenderId: "1025843342651",
    appId: "1:1025843342651:web:9ed6b8a71bebc9f41a9b1e"
  }).auth();