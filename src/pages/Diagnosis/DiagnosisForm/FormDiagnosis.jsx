import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CadastroDiagnostico from './CadastroDiagnostico';
import HeaderFormPage from './HeaderFormPage';
import CadastroItens from './CreateNewItem';
import FormRegisteredItems from './FormRegisteredItems';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const FormDiagnosis = (props) => {
  const classes = useStyles();
  const { register, errors } = useForm({ mode: 'onBlur', reValidateMode: 'onChange' });
  const {
    serviceOrder,
    updateServiceForm,
  } = props;

  const updateServiceOrderDiagnosis = (value) => {
    const diagnosis = { ...serviceOrder.diagnostico, ...value };
    updateServiceForm({ diagnostico: diagnosis });
  };

  const addNewItem = (item) => {
    const items = serviceOrder.diagnostico && serviceOrder.diagnostico.itens
      ? serviceOrder.diagnostico.itens.slice()
      : [];

    items.push(item);
    updateServiceOrderDiagnosis({ itens: items });
  };

  const updateItemsFromTable = (value, index, field) => {
    const items = serviceOrder.diagnostico.itens;
    items[index][field] = value;
    updateServiceOrderDiagnosis({ itens: items });
  };

  const getServiceOrderItems = () => (serviceOrder && serviceOrder.diagnostico
  && serviceOrder.diagnostico.itens
    ? serviceOrder.diagnostico.itens
    : []);

  return (
    <>
      <CssBaseline />

      <Container>
        <HeaderFormPage serviceOrderNumber={serviceOrder.numero_ordem_servico} />

        <Paper className={classes.paper}>
          <CadastroDiagnostico
            register={register}
            errors={errors}
            diagnosis={serviceOrder && serviceOrder.diagnostico ? serviceOrder.diagnostico : {}}
            updateDiagnosis={updateServiceOrderDiagnosis}
          />
        </Paper>

        <Paper className={classes.paper}>
          <CadastroItens addNewItem={addNewItem} />
        </Paper>

        <Paper className={classes.paper}>
          <Typography
            variant="h6"
            gutterBottom
            component="h6"
          >
            2.1 PEÇAS E ACESSÓRIOS CADASTRADOS
          </Typography>
          <FormRegisteredItems
            items={getServiceOrderItems()}
            updateItemsFromTable={updateItemsFromTable}
          />
        </Paper>
      </Container>
    </>
  );
};

FormDiagnosis.propTypes = {
  serviceOrder: PropTypes.instanceOf(Object).isRequired,
  updateServiceForm: PropTypes.func.isRequired,
};

export default FormDiagnosis;
