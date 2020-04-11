import React from "react";
import {withStyles, makeStyles} from "@material-ui/core/styles";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
} from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import {grey} from "@material-ui/core/colors";

const greyColor = grey[300];

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: greyColor,
    fontWeight: "bolder",
    border: 1,
    borderColor: greyColor,
    borderStyle: "solid",
    paddingTop: "5px",
    paddingBottom: "5px",
    height: "24px",
    textAlign: "center",
  },
  body: {
    fontSize: 12,
  },
}))(TableCell);

const StyledTd = withStyles(() => ({
  body: {
    border: 1,
    borderColor: greyColor,
    borderStyle: "solid",
    paddingTop: "5px",
    paddingBottom: "5px",
    height: "24px",
    fontSize: 12,
  },
}))(TableCell);

const useStyles = makeStyles({
  table: {
    width: "100%",
    border: 1,
    borderColor: greyColor,
    borderStyle: "solid",
  },
  quadro: {
    border: 1,
    borderColor: grey[900],
    borderStyle: "solid",
    padding: "5px",
  },
});

export default function TabelaAcessoriso(props) {
  const classes = useStyles();
  console.log(props.equipamento);
  if (!props || !props.equipamento) return <div></div>;

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
              <StyledTableCell>item</StyledTableCell>
              <StyledTableCell>descrissao</StyledTableCell>
              <StyledTableCell>Qtde</StyledTableCell>
              <StyledTableCell>Fabricante</StyledTableCell>
              <StyledTableCell>fornecedor 1</StyledTableCell>
              <StyledTableCell>fornecedor 2</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <StyledTd component="th" scope="row">
                {props.equipamento.name}
              </StyledTd>
              <StyledTd>{props.equipamento.id}</StyledTd>
              <StyledTd>{props.equipamento.name}</StyledTd>
              <StyledTd>{props.equipamento.amount}</StyledTd>
              <StyledTd>{props.equipamento.type}</StyledTd>
              <StyledTd>{props.equipamento.provider}</StyledTd>
              <StyledTd>{props.equipamento.provider}</StyledTd>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
