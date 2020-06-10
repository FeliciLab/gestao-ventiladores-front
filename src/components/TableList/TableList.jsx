import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import TableBody from '../TableListBody/TableListBody';
import TableHead from '../TableListHead/TableListHead';

const useStyle = makeStyles(() => ({
  table: {
    margin: '20px 0',
    '& th': {
      padding: 0,
      fontWeight: 'bold',
    },
    '& td': {
      padding: 0,
    },
    '& span': {
      color: 'rgba(0, 0, 0, 0.87)',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
      },
    },
  },
}));

// const getHeader = (list) => list.shift();
// const getBody = (list) => {
//   list.shift();
//   return list;
// };

const TableList = ({ list }) => {
  const classes = useStyle();
  return (
    <TableContainer>
      <Table className={classes.table}>
        <TableHead header={list.labels}>
          <Checkbox
            // eslint-disable-next-line no-console
            onChange={() => console.log('')}
            inputProps={{ 'aria-label': 'select all' }}
          />
        </TableHead>
        <TableBody list={list.data}>
          <Checkbox
            // eslint-disable-next-line no-console
            onChange={() => console.log('')}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableBody>
      </Table>
    </TableContainer>
  );
};

TableList.propTypes = {
  list: PropTypes.instanceOf(Array).isRequired,
};

export default TableList;
