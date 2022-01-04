import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import { Button, Content } from 'carbon-components-react';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

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
const firestore = firebase.firestore();
const analytics = firebase.analytics();

function Entries() {
  // const dummy = useRef();
  const entriesRef = firestore.collection('entries');
  const query = entriesRef.limit(25);

  const [entries] = useCollectionData(entriesRef, { idField: 'id' });

  console.log({ entriesRef });
  console.log({ entries });

  return (
    <>
      <div>
        {entries &&
          entries.map((entry) => (
            <div key={entry.id}>
              <p>{entry.answer1}</p>
              <p>{entry.answer2}</p>
              <p>{entry.answer3}</p>
            </div>
          ))}
      </div>
    </>
  );
}

class App extends Component {
  render() {
    return (
      <>
        <TutorialHeader />
        <Content>
          <Entries />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
          </Switch>
          <Button>Button</Button>
        </Content>
      </>
    );
  }
}

export default App;

export { Entries };
