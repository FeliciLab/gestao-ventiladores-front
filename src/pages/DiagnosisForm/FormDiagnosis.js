import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import CadastroDiagnostico from "./CadastroDiagnostico";
import Container from "@material-ui/core/Container";
import HeaderFormPage from "./HeaderFormPage";
import {ServiceOrder} from "../../models/serviceOrder";
import CadastroItens from "./CreateNewItem";
import FormRegisteredItems from "./FormRegisteredItems";
import {updateServiceOrderRequest} from "../../modelServices/serviceOrderService";
import Alert from "@material-ui/lab/Alert";
import {useHistory} from 'react-router-dom';

const FormDiagnosis = (props) => {
  const history = useHistory();
  const classes = useStyles();
  useEffect(() => {
    setServiceOrder(props.serviceOrder);
  }, [props]);

  const [serviceOrder, setServiceOrder] = useState(ServiceOrder());
  const [errorsFound, setErrorsFound] = useState(false);

  function updateServiceOrderDiagnosis (value) {
    const diagnosis = Object.assign({}, serviceOrder.diagnostico, value);
    setServiceOrder(Object.assign({}, serviceOrder, {diagnostico: diagnosis}));
  }

  function addNewItem (item) {
    const items = serviceOrder.diagnostico.itens.slice();
    items.push(item);
    updateServiceOrderDiagnosis({itens: items});
  };

  function updateItemsFromTable (value, index, field) {
    const items = serviceOrder.diagnostico.itens.slice().map((item, idx) => {
      if (idx === index) {
        item[field] = value;
      }

      return item;
    });

    updateServiceOrderDiagnosis({itens: items});
  };

  async function saveForm () {
    try {
      await updateServiceOrderRequest(Object.assign({}, serviceOrder, {status: 'diagnostico'}));
      history.push({pathname: '/diagnosticos'})
    } catch (e) {
      console.log('erro ao salvar ordem de serviço', e);
      setErrorsFound(true);
      setTimeout(() => {
        setErrorsFound(false);
      }, 2000);
    }
  };

  return (
    <React.Fragment>
      <CssBaseline/>

      <Container>
        <HeaderFormPage
          serviceOrderNumber={serviceOrder.numero_ordem_servico}
          saveForm={saveForm}
        />

        <div style={{display: errorsFound ? 'block' : 'none'}}>
          <Alert variant="filled" severity={'error'}>Não é possível salvar o formulário. Verifique os campos.</Alert>
        </div>

        <Paper className={classes.paper}>
          <CadastroDiagnostico
            diagnosis={serviceOrder && serviceOrder.diagnostico ? serviceOrder.diagnostico : {}}
            updateDiagnosis={updateServiceOrderDiagnosis}
          />
        </Paper>

        <Paper className={classes.paper}>
          <CadastroItens addNewItem={addNewItem}/>
        </Paper>

        <Paper className={classes.paper}>
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