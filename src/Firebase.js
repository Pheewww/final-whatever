
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
const firebaseConfig = {
  apiKey: "AIzaSyBOCeZJldEqNkqgCP0iMHxgS2jo3MHELFk",
  authDomain: "second-423f0.firebaseapp.com",
  databaseURL: "https://second-423f0-default-rtdb.firebaseio.com",
  projectId: "second-423f0",
  storageBucket: "second-423f0.appspot.com",
  messagingSenderId: "765291219583",
  appId: "1:765291219583:web:5e934c70b2e0f977fb0d4a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const dataRef=firebase.database();
export default firebase