import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import CadastroDiagnostico from './CadastroDiagnostico';
import Container from '@material-ui/core/Container';
import HeaderFormPage from './HeaderFormPage';
import CadastroItens from './CreateNewItem';
import FormRegisteredItems from './FormRegisteredItems';
import { useForm } from 'react-hook-form';
import Typography from '@material-ui/core/Typography';


const FormDiagnosis = (props) => {
  const {register, errors} = useForm({mode: 'onBlur', reValidateMode: 'onChange'});

  const classes = useStyles();

  const {
    serviceOrder,
    updateServiceForm
  } = props;

  function updateServiceOrderDiagnosis (value) {
    const diagnosis = Object.assign({}, serviceOrder.diagnostico, value);
    updateServiceForm({diagnostico: diagnosis});
  }

  function addNewItem (item) {
    const items = serviceOrder.diagnostico && serviceOrder.diagnostico.itens ?
      serviceOrder.diagnostico.itens.slice() : [];

    items.push(item);
    updateServiceOrderDiagnosis({itens: items});
  };

  function updateItemsFromTable (value, index, field) {
    const items = serviceOrder.diagnostico.itens;
    items[index][field] = value;
    updateServiceOrderDiagnosis({itens: items});
  };

  return (
    <React.Fragment>
      <CssBaseline/>

      <Container>
        <HeaderFormPage serviceOrderNumber={serviceOrder.numero_ordem_servico}/>

        <Paper className={classes.paper}>
          <CadastroDiagnostico
            register={register}
            errors={errors}
            diagnosis={serviceOrder && serviceOrder.diagnostico ? serviceOrder.diagnostico : {}}
            updateDiagnosis={updateServiceOrderDiagnosis}
          />
        </Paper>

        <Paper className={classes.paper}>
          <CadastroItens addNewItem={addNewItem}/>
        </Paper>

        <Paper className={classes.paper}>
          <Typography
            variant={"h6"}
            gutterBottom
            component={"h6"}
          >
            2.1 PEÇAS E ACESSÓRIOS CADASTRADOS
          </Typography>
          <FormRegisteredItems
            items={serviceOrder && serviceOrder.diagnostico && serviceOrder.diagnostico.itens ? serviceOrder.diagnostico.itens : []}
            updateItemsFromTable={updateItemsFromTable}
          />
        </Paper>
      </Container>
    </React.Fragment>
  );
};

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
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

export default FormDiagnosis;