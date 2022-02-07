import * as firebase from 'firebase';
import { getAuth,} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import {getStorage,ref} from 'firebase/storage';

import { initializeApp } from "firebase/app";

const firebaseConfig = {

  apiKey: "AIzaSyC6Ysu1phRc8vdjAPUWcTGlPuv45pzMa5c",

  authDomain: "mr-living-clone.firebaseapp.com",

  projectId: "mr-living-clone",

  storageBucket: "mr-living-clone.appspot.com",

  messagingSenderId: "824924936054",

  appId: "1:824924936054:web:76506ea1efe154f2824c57",

  measurementId: "G-EYHY8NHN70"

};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage();

export {auth,db,storage};