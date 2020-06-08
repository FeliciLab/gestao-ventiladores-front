import React from 'react';
import PropTypes from 'prop-types';
import { TableCell, TableRow, TableHead } from '@material-ui/core';

const TableHeader = ({ header, children }) => (
  <TableHead>
    <TableRow>
      <TableCell>{children}</TableCell>
      {header.map((key) => (
        <TableCell>{key}</TableCell>
      ))}
    </TableRow>
  </TableHead>
);

TableHeader.propTypes = {
  header: PropTypes.instanceOf(Array).isRequired,
  children: PropTypes.instanceOf(Object).isRequired,
};

export default TableHeader;
