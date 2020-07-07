import React from 'react';
import PropTypes from 'prop-types';
import { TableHead } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import withStyles from '@material-ui/core/styles/withStyles';

const StyledTableCell = withStyles(() => ({
  body: {
    minWidth: '50px',
  },
}))(TableCell);

const HeaderTableLayout = ({
  headerData,
  checkAllRow,
  hasActions,
  amountChecked,
  amount,
}) => (
  <TableHead>
    <TableRow>
      <TableCell padding="checkbox" align="center">
        <Checkbox
          indeterminate={amountChecked > 0 && amountChecked < amount}
          checked={amount > 0 && amountChecked === amount}
          onChange={() => checkAllRow(amountChecked > 0)}
        />
      </TableCell>
      {headerData.map((item) => (
        <StyledTableCell key={item.id} align="left" padding="default">
          {item.name}
        </StyledTableCell>
      ))}
      {hasActions ? (
        <StyledTableCell align="right">Ações</StyledTableCell>
      ) : (
        <></>
      )}
    </TableRow>
  </TableHead>
);

HeaderTableLayout.defaultProps = {
  amountChecked: 0,
  amount: 0,
  hasActions: false,
};

HeaderTableLayout.propTypes = {
  headerData: PropTypes.instanceOf(Array).isRequired,
  checkAllRow: PropTypes.func.isRequired,
  hasActions: PropTypes.bool,
  amountChecked: PropTypes.number,
  amount: PropTypes.number,
};

export default HeaderTableLayout;
