import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Paper, Table, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import { grey } from '@material-ui/core/colors';


const greyColor = grey[300];

const StyledTableCell = withStyles(() => ({
  head: {
    backgroundColor: greyColor,
    fontWeight: 'bolder',
    border: 1,
    borderColor: greyColor,
    borderStyle: 'solid',
    paddingTop: '3px',
    paddingBottom: '3px',
    // height: '10px',
    textAlign: 'center',
  },
  body: {
    fontSize: '12pt',
  },
}))(TableCell);

const StyledTd = withStyles(() => ({
  body: {
    border: 1,
    borderColor: greyColor,
    borderStyle: 'solid',
    paddingTop: '3px',
    paddingBottom: '3px',
    // height: '10px',
    fontSize: '12pt',
  },
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
  },
});

const TabelaAcessorios = (props) => {
  const classes = useStyles();

  const {
    equipamento,
  } = props;

  if (!equipamento) {
    return (<></>);
  }

  const acessorios = equipamento.triagem.acessorios || [];
  const rows = [...acessorios];

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
              <StyledTableCell>Descrição</StyledTableCell>
              <StyledTableCell>Acompanha</StyledTableCell>
              <StyledTableCell>Qtde</StyledTableCell>
              <StyledTableCell>Estado de Conservação</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              rows.map((row) => (
                <TableRow key={`${row.descricao}_${new Date()}`}>
                  <StyledTd
                    component="th"
                    scope="row"
                  >
                    {row.descricao}
                  </StyledTd>
                  <StyledTd>{row.acompanha === true ? 'Sim' : '-'}</StyledTd>
                  <StyledTd>{row.quantidade || ''}</StyledTd>
                  <StyledTd>{row.estado_de_conservacao || ''}</StyledTd>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

TabelaAcessorios.propTypes = {
  equipamento: PropTypes.shape({
    triagem: PropTypes.shape({
      acessorios: PropTypes.instanceOf(Array),
    }),
  }).isRequired,
};

export default TabelaAcessorios;
