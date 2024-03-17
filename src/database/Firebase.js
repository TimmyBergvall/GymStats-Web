import firebase from 'firebase/compat/app'; // Byt till 'compat/app' för Firebase version 9
import 'firebase/compat/auth'; // Om du behöver använda Firebase Authentication
import 'firebase/compat/firestore'; // Om du behöver använda Firestore


const firebaseConfig = {
    apiKey: "AIzaSyB7gcq5Yq00H0-XlzwUAuaJqZ_08NqZFZY",
    authDomain: "gymstats-3ac7b.firebaseapp.com",
    projectId: "gymstats-3ac7b",
    storageBucket: "gymstats-3ac7b.appspot.com",
    messagingSenderId: "975763823939",
    appId: "1:975763823939:web:2fee9ed849865d7911e3f6",
    measurementId: "G-G7Z1Z8GDGV"
  };
  
  firebase.initializeApp(firebaseConfig);

  
  // Initialize Firebase Authentication and get a reference to the service
  export const auth = firebase.auth();
  
  export const firestore = firebase.firestore();