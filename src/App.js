import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import { Button, Content } from 'carbon-components-react';
import withFirebaseAuth from 'react-with-firebase-auth';
import firebase from 'firebase/app';
import 'firebase/auth';
import styledComponents from 'styled-components';
import PropTypes from 'prop-types';
import { auth } from './firebase';
import TutorialHeader from './components/TutorialHeader';
import LandingPage from './content/LandingPage';
import EntriesPage from './content/EntriesPage';
import QuestionsPage from './content/QuestionsPage';

const StyledFooter = styledComponents.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
`;

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
      /** @type {firebase.auth.OAuthCredential} */
      const { credential } = result;
      console.log({ result });

      // OAuth access and id tokens can also be retrieved:
      // const { accessToken } = credential;
      // const { idToken } = credential;
    })
    .catch((error) => {
      // Handle error.
    });
};

class App extends Component {
  render() {
    const { user, signOut, signInWithGoogle } = this.props;
    return (
      <>
        <TutorialHeader user={user} />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/questions" component={QuestionsPage} />
            <Route path="/entries" component={EntriesPage} />
          </Switch>
        </Content>
        <StyledFooter>
          {user ? (
            <Button type="button" onClick={signOut}>
              Sign out
            </Button>
          ) : (
            <>
              <Button type="button" onClick={signInWithGoogle}>
                Sign in with Google
              </Button>
              <Button type="button" kind="tertiary" onClick={micosoftLogin}>
                Sign in with Microsoft
              </Button>
            </>
          )}
        </StyledFooter>
      </>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);

App.propTypes = {
  user: PropTypes.object,
  signOut: PropTypes.func,
  signInWithGoogle: PropTypes.func,
};
