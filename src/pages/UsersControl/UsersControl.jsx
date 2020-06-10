import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
import ThemeButton from '../_common/forms/ThemeButton';
import Layout from '../_layout/Layout';
import TableList from '../../components/TableList/TableList';
import ApiService from './ApiServiceFake';

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
  smallTitle: {
    fontWeight: 'normal',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.54)',
  },
}));

const acessos = ApiService.getAccessRequests();

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

          <TableList className={classes.table} list={acessos} />

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
