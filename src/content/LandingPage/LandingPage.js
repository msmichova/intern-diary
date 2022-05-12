/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
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
import React, { useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { db, auth } from '../../firebase';

const LandingPage = () => {
  // const { user, signOut, signInWithGoogle } = props;
  // console.log({ user });

  const user = auth.currentUser;
  const userEmail = user.email;
  console.log({ user });

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

  const [rows] = useCollectionData(
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
