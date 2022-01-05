import { Button, Form, TextArea } from 'carbon-components-react';
import React, { useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { db } from '../../firebase';

function Entries() {
  // const dummy = useRef();
  const entriesRef = db.collection('entries');
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

const LandingPage = () => {
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection('entries')
      .add({
        answer1,
        answer2,
        answer3,
      })
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });

    setAnswer1('');
    setAnswer2('');
    setAnswer3('');
  };

  return (
    <>
      <div>LANDING PAGE</div>
      <Form onSubmit={handleSubmit}>
        <TextArea
          labelText="Question 1"
          placeholder="Your answer here..."
          value={answer1}
          onChange={(e) => setAnswer1(e.target.value)}
        />
        <br />
        <TextArea
          labelText="Question 2"
          placeholder="Your answer here..."
          value={answer2}
          onChange={(e) => setAnswer2(e.target.value)}
        />
        <br />
        <TextArea
          labelText="Question 3"
          placeholder="Your answer here..."
          value={answer3}
          onChange={(e) => setAnswer3(e.target.value)}
        />
        <br />
        <Button type="submit">Submit</Button>
      </Form>
      <div>
        <h3>Database data:</h3>
        <Entries />
      </div>
    </>
  );
};

export default LandingPage;
