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
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
import ThemeButton from '../_common/forms/ThemeButton';
import Layout from '../_layout/Layout';

const useStyle = makeStyles(() => ({
  page: {
    padding: '55px 0px',
  },
  pageHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paperSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'normal',
    textTransform: 'uppercase',
    color: 'rgba(0, 0, 0, 0.87)',
  },
  paper: {
    marginTop: 55,
    padding: 10,
  },
  paperSectionTitle: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#BDBDBD',
    marginLeft: 20,
  },
  table: {
    marginTop: 20,
    marginBottom: 20,
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
  smallTitle: {
    fontWeight: 'normal',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.54)',
  },
}));
const labels = ['Ordem', 'Nome', 'Unidade', 'ID Saúde', 'Data de Solicitação'];

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

const createTableHeader = (tableLabels) => (
  <TableHead>
    <TableRow>
      <TableCell>
        <Checkbox
        // indeterminate={numSelected > 0 && numSelected < rowCount}
        // checked={rowCount > 0 && numSelected === rowCount}
        // onChange={onSelectAllClick}
        // inputProps={{ 'aria-label': 'select all desserts' }}
        // eslint-disable-next-line react/jsx-closing-bracket-location
        />
      </TableCell>
      {tableLabels.map((label) => (
        <TableCell key={label.toLocaleUpperCase()}>{label}</TableCell>
      ))}
    </TableRow>
  </TableHead>
);

const createTableBody = (data) => (
  <TableBody>
    {data.map((item) => (
      <TableRow key={item.idSaude}>
        <TableCell>
          <Checkbox
            // eslint-disable-next-line no-console
            onChange={() => console.log(item.idSaude)}
            inputProps={{ 'aria-label': 'select item' }}
            // eslint-disable-next-line react/jsx-closing-bracket-location
          />
        </TableCell>
        <TableCell>{item.ordem}</TableCell>
        <TableCell>{item.nome}</TableCell>
        <TableCell>{item.unidade}</TableCell>
        <TableCell>{item.idSaude}</TableCell>
        <TableCell>{item.dataSolicitacao}</TableCell>
      </TableRow>
    ))}
  </TableBody>
);

const UsersControl = () => {
  const classes = useStyle();

  return (
    <Layout>
      <Container className={classes.page}>
        <div className={classes.pageHeader}>
          <h1 className={classes.title}>Fila de Solicitação de acesso</h1>
          <ThemeButton
            startIcon={<SendIcon />}
            // eslint-disable-next-line no-console
            onClick={() => console.log('Clicou em enviar')}>
            Enviar convite
          </ThemeButton>
        </div>

        <Paper className={classes.paper}>
          <div className={classes.paperSection}>
            <h2 className={classes.paperSectionTitle}>
              Selecione os itens para conceder acesso
            </h2>
            <Button disabled variant="outlined">
              Conceder acesso aos usuários
            </Button>
          </div>

          <TableContainer className={classes.table}>
            <Table>
              {createTableHeader(labels)}
              {createTableBody(acessos)}
            </Table>
          </TableContainer>

          <h2 className={classes.smallTitle}>Itens selecionados</h2>
          <div className={classes.paperSection}>
            <div>
              <div>
                <Chip
                  icon={<DoneIcon />}
                  label="001"
                  // onDelete={data.label === 'React' ? undefined : handleDelete(data)}
                  className={classes.chip}
                />
              </div>
            </div>
            <Button disabled variant="outlined">
              Conceder acesso aos usuários
            </Button>
          </div>
        </Paper>
      </Container>
    </Layout>
  );
};

UsersControl.propTypes = {};

export default UsersControl;
