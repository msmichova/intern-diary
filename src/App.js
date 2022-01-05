import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import { Button, Content } from 'carbon-components-react';

// import { initializeApp } from 'firebase/app';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { getFirestore, doc, getDoc, collection } from 'firebase/firestore';

import TutorialHeader from './components/TutorialHeader';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

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
    return (
      <>
        <TutorialHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
