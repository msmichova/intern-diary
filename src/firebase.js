import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: 'AIzaSyBofzgGY8U6Htz2Nn5VpoASsmBp3st6bKg',
  authDomain: 'intern-diary.firebaseapp.com',
  projectId: 'intern-diary',
  storageBucket: 'intern-diary.appspot.com',
  messagingSenderId: '524723505945',
  appId: '1:524723505945:web:173dd0877a43cc9bfb9388',
  measurementId: 'G-VGTPRL3Y91',
});

const auth = firebase.auth();
const db = firebase.firestore();
const analytics = firebase.analytics();

export { db, auth, analytics };
