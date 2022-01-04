import { TextArea } from 'carbon-components-react';
import React from 'react';
import { Entries } from '../../App';

const LandingPage = () => (
  <>
    <div>LANDING PAGE</div>
    <TextArea labelText="Question 1" placeholder="Your answer here..." />
    <br />
    <TextArea labelText="Question 2" placeholder="Your answer here..." />
    <br />
    <TextArea labelText="Question 3" placeholder="Your answer here..." />
    <br />
    <div>
      <h3>Database data:</h3>
      <Entries />
    </div>
  </>
);

export default LandingPage;
