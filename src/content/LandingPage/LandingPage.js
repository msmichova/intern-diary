/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import { FlashFilled16 } from '@carbon/icons-react';
import {
  Button,
  Form,
  TextArea,
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from 'carbon-components-react';
import React, { useState, useEffect } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { db, auth } from '../../firebase';

const LandingPage = () => {
  // const { user, signOut, signInWithGoogle } = props;
  // console.log({ user });

  const user = auth.currentUser;
  const userEmail = user?.email != null ? user.email : '';
  console.log({ user });

  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');

  const [isInvalid1, setIsInvalid1] = useState(false);
  const [isInvalid2, setIsInvalid2] = useState(false);
  const [isInvalid3, setIsInvalid3] = useState(false);

  const isValid = (answer1, answer2, answer3) => {
    answer1 === '' ? setIsInvalid1(true) : setIsInvalid1(false);
    answer2 === '' ? setIsInvalid2(true) : setIsInvalid2(false);
    answer3 === '' ? setIsInvalid3(true) : setIsInvalid3(false);

    if (!isInvalid1 || !isInvalid2 || !isInvalid3) {
      console.log({ answer1, answer2, answer3 });
      console.log({ isInvalid1, isInvalid2, isInvalid3 });
      console.log('INVALID');
      return false;
    }
    console.log('VALID');
    return true;
  };

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
  // };

  const admin = 'msmichova1@gmail.com';

  // TODO: fix linting
  const [rows] =
    userEmail === admin
      ? useCollectionData(db.collection('entries'), { idField: 'id' })
      : useCollectionData(
          db.collection('entries').where('userEmail', '==', userEmail),
          { idField: 'id' }
        );
  console.log(rows);

  const headers = [
    {
      key: 'answer1',
      header: 'Answer 1',
    },
    {
      key: 'answer2',
      header: 'Answer 2',
    },
    {
      key: 'answer3',
      header: 'Answer 3',
    },
  ];

  return (
    <>
      <div>LANDING PAGE</div>
      <Form onSubmit={handleSubmit}>
        <TextArea
          labelText="Question 1"
          placeholder="Your answer here..."
          value={answer1}
          onChange={(e) => setAnswer1(e.target.value)}
          invalid={isInvalid1}
          invalidText="Please answer this question."
        />
        <br />
        <TextArea
          labelText="Question 2"
          placeholder="Your answer here..."
          value={answer2}
          onChange={(e) => setAnswer2(e.target.value)}
          invalid={isInvalid2}
          invalidText="Please answer this question."
        />
        <br />
        <TextArea
          labelText="Question 3"
          placeholder="Your answer here..."
          value={answer3}
          onChange={(e) => setAnswer3(e.target.value)}
          invalid={isInvalid3}
          invalidText="Please answer this question."
        />
        <br />
        <Button type="submit">Submit</Button>
      </Form>
      <br />
      <div>
        <h3>Database data:</h3>
        {rows && (
          <DataTable rows={rows} headers={headers}>
            {({
              rows,
              headers,
              getTableProps,
              getHeaderProps,
              getRowProps,
            }) => (
              <Table {...getTableProps()}>
                <TableHead>
                  <TableRow>
                    {headers.map((header) => (
                      <TableHeader {...getHeaderProps({ header })}>
                        {header.header}
                      </TableHeader>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow {...getRowProps({ row })}>
                      {row.cells.map((cell) => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </DataTable>
        )}
      </div>
    </>
  );
};

export default LandingPage;
