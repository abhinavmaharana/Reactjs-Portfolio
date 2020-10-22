import firebase from "firebase/app"; // doing import firebase from 'firebase' or import * as firebase from firebase is not good practice.
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import Axios from "axios";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHx5pCFU9F2gn9FTQdEx15wE3vjaiUoo0",
  authDomain: "amportfolio-7a800.firebaseapp.com",
  databaseURL: "https://amportfolio-7a800.firebaseio.com",
  projectId: "amportfolio-7a800",
  storageBucket: "amportfolio-7a800.appspot.com",
  messagingSenderId: "231045991382",
  appId: "1:231045991382:web:ec9fc59d7b2f33dd733277",
  measurementId: "G-PEMESHKWK5",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { Axios, db };
