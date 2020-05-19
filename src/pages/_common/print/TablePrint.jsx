import React from 'react';
import { grey } from '@material-ui/core/colors';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Paper, Table, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';


const TablePrint = (props) => {
  const classes = useStyles();

  const {headerTable, bodyData} = props;

  return (
    <div className={classes.quadro}>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense customized table"
        >
          <TableHead>
            <TableRow>
              {
                headerTable.map((item, index) => (
                  <StyledTableCell key={index}>{item.name}</StyledTableCell>
                ))
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {
              bodyData.map((row, index) => (
                <TableRow key={index}>
                  {
                    headerTable.map((head, index) => {
                        return (<StyledTd key={index}>
                          {row[head.id]}
                        </StyledTd>);
                      }
                    )
                  }
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

const greyColor = grey[300];

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: greyColor,
    fontWeight: 'bolder',
    border: 1,
    borderColor: greyColor,
    borderStyle: 'solid',
    paddingTop: '5px',
    paddingBottom: '5px',
    height: '24px',
  },
  body: {
    fontSize: 12
  },
}))(TableCell);

const StyledTd = withStyles(() => ({
  body: {
    border: 1,
    borderColor: greyColor,
    borderStyle: 'solid',
    paddingTop: '5px',
    paddingBottom: '5px',
    height: '24px',
    fontSize: 12,
    wordWrap: 'break-word'
  }
}))(TableCell);

const useStyles = makeStyles({
  table: {
    width: '100%',
    border: 1,
    borderColor: greyColor,
    borderStyle: 'solid',
  },
  quadro: {
    border: 1,
    borderColor: grey[900],
    borderStyle: 'solid',
    padding: '5px'
  }
});

export default TablePrint;