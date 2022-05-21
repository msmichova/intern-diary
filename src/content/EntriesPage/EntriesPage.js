/* eslint-disable no-nested-ternary */
/* eslint-disable no-shadow */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
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
    <div>
      <h3>
        {user
          ? userEmail === admin
            ? "All Students' Entries"
            : 'My Entries'
          : 'Please log in to view entries'}
        :
      </h3>
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
