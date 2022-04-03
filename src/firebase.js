import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB-BBF2FVejsRlFruqtU-J_lLY1JrEmuK0",
    authDomain: "hybridfinalproject-554b6.firebaseapp.com",
    projectId: "hybridfinalproject-554b6",
    storageBucket: "hybridfinalproject-554b6.appspot.com",
    messagingSenderId: "803220728202",
    appId: "1:803220728202:web:4b2c04c7b13f2880db4073",
    measurementId: "G-KRSMRMMRYD"
  };

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();