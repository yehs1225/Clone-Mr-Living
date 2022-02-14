import {initializeApp} from 'firebase/app';
import { getAuth,} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import firebase from "firebase/app";
require('firebase/firestore')
require('firebase/auth')

const firebaseConfig = {

  apiKey: "AIzaSyC6Ysu1phRc8vdjAPUWcTGlPuv45pzMa5c",

  authDomain: "mr-living-clone.firebaseapp.com",

  projectId: "mr-living-clone",

  storageBucket: "mr-living-clone.appspot.com",

  messagingSenderId: "824924936054",

  appId: "1:824924936054:web:76506ea1efe154f2824c57",

  measurementId: "G-EYHY8NHN70"

};

  const app  = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);

  export {db,auth};