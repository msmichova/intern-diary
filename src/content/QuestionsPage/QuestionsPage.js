import { Button, Form, TextArea } from 'carbon-components-react';
import React, { useState } from 'react';
import { db, auth } from '../../firebase';

export default function QuestionsPage() {
  const user = auth.currentUser;
  const userEmail = user?.email != null ? user.email : '';

  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');

  //   const [isInvalid1, setIsInvalid1] = useState(false);
  //   const [isInvalid2, setIsInvalid2] = useState(false);
  //   const [isInvalid3, setIsInvalid3] = useState(false);

  //   const isValid = (answer1, answer2, answer3) => {
  //     answer1 === '' ? setIsInvalid1(true) : setIsInvalid1(false);
  //     answer2 === '' ? setIsInvalid2(true) : setIsInvalid2(false);
  //     answer3 === '' ? setIsInvalid3(true) : setIsInvalid3(false);

  //     if (!isInvalid1 || !isInvalid2 || !isInvalid3) {
  //       console.log({ answer1, answer2, answer3 });
  //       console.log({ isInvalid1, isInvalid2, isInvalid3 });
  //       console.log('INVALID');
  //       return false;
  //     }
  //     console.log('VALID');
  //     return true;
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (isValid(answer1, answer2, answer3)) {
    db.collection('entries')
      .add({
        answer1,
        answer2,
        answer3,
        userEmail,
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
      <h1>Submit a New Diary Entry</h1>
      <br />
      {user ? (
        <Form onSubmit={handleSubmit}>
          <TextArea
            labelText="What did you work on today?"
            placeholder="I worked on..."
            value={answer1}
            onChange={(e) => setAnswer1(e.target.value)}
            // invalid={isInvalid1}
            invalidText="Please answer this question."
          />
          <br />
          <TextArea
            labelText="What are you planning to do tomorrow?"
            placeholder="I will..."
            value={answer2}
            onChange={(e) => setAnswer2(e.target.value)}
            // invalid={isInvalid2}
            invalidText="Please answer this question."
          />
          <br />
          <TextArea
            labelText="Have you had any issues?"
            placeholder="I came across a..."
            value={answer3}
            onChange={(e) => setAnswer3(e.target.value)}
            // invalid={isInvalid3}
            invalidText="Please answer this question."
          />
          <br />
          <Button type="submit">Submit</Button>
        </Form>
      ) : (
        'Log in to submit a report'
      )}
    </>
  );
}
