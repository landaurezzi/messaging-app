import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import Constants from 'expo-constants';

const firebaseConfig = {
    apiKey: "AIzaSyCCusCMKrnqmRgfBwg_J58261nsw_zyB2U",
    authDomain: "chatapp-c23e9.firebaseapp.com",
    projectId: "chatapp-c23e9",
    storageBucket: "chatapp-c23e9.appspot.com",
    messagingSenderId: "216417483579",
    appId: "1:216417483579:web:fe29e8c851645c9f22951e"
  };
  
  // Initialize Firebase
  initializeApp(firebaseConfig);
  export const auth = getAuth();
  export const database = getFirestore();