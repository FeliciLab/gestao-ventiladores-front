import React from 'react';
import PropTypes from 'prop-types';
import { TableBody } from '@material-ui/core';
import TableItem from '../TableItem/TableItem';

const TableListBody = ({ list, children }) => (
  <TableBody>
    {list.map((item) => (
      <TableItem key={item} item={item}>
        {children}
      </TableItem>
    ))}
  </TableBody>
);

TableListBody.propTypes = {
  list: PropTypes.instanceOf(Object).isRequired,
  children: PropTypes.instanceOf(Object).isRequired,
};

export default TableListBody;
