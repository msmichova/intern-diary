import React from 'react';
import { auth } from '../../firebase';

const LandingPage = () => {
  const user = auth.currentUser;
  console.log(user);
  return (
    <>
      {user ? (
        <h1>Welcome to Intern Diary, {user.displayName}!</h1>
      ) : (
        <>
          <h1>Welcome to Intern Diary!</h1>{' '}
          <p>Please log in for better experience.</p>
        </>
      )}
    </>
  );
};

export default LandingPage;
