import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBh_C7W_P1MeZRBxrpgva7sRBZ0xYLgFwg",
  authDomain: "linked-in-clone-77f2c.firebaseapp.com",
  projectId: "linked-in-clone-77f2c",
  storageBucket: "linked-in-clone-77f2c.appspot.com",
  messagingSenderId: "210487401834",
  appId: "1:210487401834:web:0561b07658a6351ae4d913"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
