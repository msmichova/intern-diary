/* eslint-disable react-hooks/rules-of-hooks, no-unused-vars, no-shadow */

import React from 'react';
import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from 'carbon-components-react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { db, auth } from '../../firebase';

export default function EntriesPage() {
  const user = auth.currentUser;
  const userEmail = user?.email != null ? user.email : '';
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
      header: 'What did you work on today?',
    },
    {
      key: 'answer2',
      header: 'What are you planning to do tomorrow?',
    },
    {
      key: 'answer3',
      header: 'Have you had any issues?',
    },
  ];

  return (
    <div>
      {userEmail === admin ? (
        <h1>All Students' Diary Entries</h1>
      ) : (
        <h1>My Diary Entries</h1>
      )}
      <br />
      {!user && <p>Please log in to view diary entries</p>}
      <br />
      {user && rows && (
        <DataTable rows={rows} headers={headers}>
          {({ rows, headers, getTableProps, getHeaderProps, getRowProps }) => (
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
  );
}
