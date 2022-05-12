/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import { Button, Content } from 'carbon-components-react';
import withFirebaseAuth from 'react-with-firebase-auth';
import firebase from 'firebase/app';
import 'firebase/auth';
import { db, auth } from './firebase';

// import { initializeApp } from 'firebase/app';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { getFirestore, doc, getDoc, collection } from 'firebase/firestore';

import TutorialHeader from './components/TutorialHeader';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

// const firebaseApp = firebase.initializeApp(db);
const firebaseAppAuth = auth;
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
  microsoftProvider: new firebase.auth.OAuthProvider('microsoft.com'),
};

const micosoftLogin = () => {
  firebaseAppAuth
    .signInWithPopup(providers.microsoftProvider)
    .then((result) => {
      // IdP data available in result.additionalUserInfo.profile.
      // ...

      /** @type {firebase.auth.OAuthCredential} */
      const { credential } = result;

      // OAuth access and id tokens can also be retrieved:
      const { accessToken } = credential;
      const { idToken } = credential;
    })
    .catch((error) => {
      // Handle error.
    });
};

// const firebaseApp = initializeApp({
//   apiKey: 'AIzaSyBofzgGY8U6Htz2Nn5VpoASsmBp3st6bKg',
//   authDomain: 'intern-diary.firebaseapp.com',
//   projectId: 'intern-diary',
//   storageBucket: 'intern-diary.appspot.com',
//   messagingSenderId: '524723505945',
//   appId: '1:524723505945:web:173dd0877a43cc9bfb9388',
//   measurementId: 'G-VGTPRL3Y91',
// });
// const auth = getAuth(firebaseApp);
// onAuthStateChanged(auth, (user) => {
//   // Check for user status
// });

// const firestore = getFirestore();

class App extends Component {
  render() {
    const { user, signOut, signInWithGoogle, signInWithPopup } = this.props;
    return (
      <>
        <TutorialHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
          </Switch>
          {user ? <p>Hello, {user.displayName}</p> : <p>Please sign in.</p>}
          {user ? (
            <button type="button" onClick={signOut}>
              Sign out
            </button>
          ) : (
            <>
              <button type="button" onClick={signInWithGoogle}>
                Sign in with Google
              </button>
              <button type="button" onClick={micosoftLogin}>
                Sign in with Microsoft
              </button>
            </>
          )}
        </Content>
      </>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
