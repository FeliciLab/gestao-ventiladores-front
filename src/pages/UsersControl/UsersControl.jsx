import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../_layout/Layout';

const useStyle = makeStyles(() => ({
  containerHeader: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const acessos = [
  {
    ordem: '001',
    nome: 'José Francisco Lima',
    unidade: 'HGF',
    idSaude: '021458',
    dataSolicitacao: '08/10/2020',
  },
  {
    ordem: '002',
    nome: 'Fulana da Silva',
    unidade: 'HGF',
    idSaude: '034458',
    dataSolicitacao: '10/11/2020',
  },
  {
    ordem: '002',
    nome: 'Cicrana da Silva',
    unidade: 'HGF',
    idSaude: '034477',
    dataSolicitacao: '11/09/2020',
  },
];

const UsersControl = () => {
  const classes = useStyle();

  return (
    <Layout>
      <Container>
        <div className={classes.containerHeader}>
          <h1>Fila de Solicitação de acesso</h1>
          <button type="submit">Enviar convite</button>
        </div>

        <Paper>
          <div className={classes.containerHeader}>
            <h2>Selecione os itens para conceder acesso</h2>
            <button type="submit">Conceder acesso aos usuários</button>
          </div>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Checkbox
                      indeterminate={numSelected > 0 && numSelected < rowCount}
                      checked={rowCount > 0 && numSelected === rowCount}
                      onChange={onSelectAllClick}
                      inputProps={{ 'aria-label': 'select all desserts' }}
                    />
                  </TableCell>
                  <TableCell>t</TableCell>
                  <TableCell>a</TableCell>
                  <TableCell>t</TableCell>
                  <TableCell>u</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>t</TableCell>
                  <TableCell>a</TableCell>
                  <TableCell>t</TableCell>
                  <TableCell>u</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <h2>Itens selecionados</h2>
          <div className={classes.containerHeader}>
            <div>
              <div>x flag</div>
            </div>
            <button type="submit">Conceder acesso aos usuários</button>
          </div>
        </Paper>
      </Container>
    </Layout>
  );
};

UsersControl.propTypes = {};

export default UsersControl;
