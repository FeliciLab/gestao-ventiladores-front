import React from 'react';
import PropTypes from 'prop-types';
import { TableCell, TableRow } from '@material-ui/core';

const getKeys = (item) => Object.keys(item);

const TableItem = ({ item, children }) => (
  <TableRow>
    <TableCell>{children}</TableCell>
    {getKeys(item).map((key) => (
      <TableCell>{item[key]}</TableCell>
    ))}
  </TableRow>
);

TableItem.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
  children: PropTypes.instanceOf(Object).isRequired,
};

export default TableItem;
