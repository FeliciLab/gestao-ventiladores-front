import React, { useEffect, useState } from 'react';
import RelacaoDeMaterial from './RelacaoDeMaterial';
import { makeStyles } from '@material-ui/core/styles';
import { listaFormAcessorios } from '../../../models/acessorio';
import { ServiceOrderScreening } from '../../../models/serviceOrder';
import Equipamento from '../../../models/equipamentos';
import CadastroEquipamento from './CadastroEquipamento';
import TitleFormScreening from './TitleFormScreening';
import { CssBaseline, Grid, Paper, Typography } from '@material-ui/core';


export default function FormScreening (props) {
  const {
    register,
    errors,
    serviceOrder,
    updateFormModel,
    cleanServiceOrder,
    editingForm
  } = props;

  const classes = useStyles();

  const [blockEffect, setBlockEffect] = useState(false);

  const [serviceOrderForm, setServiceOrderForm] = useState({});
  const [formErrors, setFormErrors] = useState({});

  const [equipamento, setEquipamento] = useState({});
  const [screening, setScreening] = useState({});
  const [acessorios, setAcessorios] = useState([]);

  useEffect(handleEffect, [serviceOrderForm]);

  function handleEffect () {
    if (blockEffect) {
      return;
    }

    setServiceOrderForm(Object.assign({}, serviceOrder));

    if (!equipamento.hasOwnProperty('numero_de_serie')) {
      if (serviceOrder.equipamento) {
        setEquipamento(
          Object.assign(
            Equipamento({}),
            serviceOrder.equipamento[0]
          )
        );
      } else {
        setEquipamento(Object.assign({}, Equipamento({})))
      }
    }

    if (!screening.hasOwnProperty('acessorios')) {
      if ( serviceOrder.triagem) {
        setScreening(ServiceOrderScreening({triagem: serviceOrder.triagem}));
      } else {
        setScreening(ServiceOrderScreening({triagem: {}}))
      }
    }

    if (acessorios.length === 0) {
      if (serviceOrder.triagem && serviceOrder.triagem.acessorios) {
        setAcessorios(listaFormAcessorios(serviceOrder.triagem.acessorios));
      } else {
        setAcessorios(listaFormAcessorios([]));
      }
    }

    setBlockEffect(true);
  }

  function updateErrors (values) {
    const _formErrors = Object.assign({}, formErrors);
    for (let indexValue in values) {
      for (let index in _formErrors[indexValue]) {
        _formErrors[indexValue][index] = false;
      }
    }

    const errors = Object.assign(_formErrors, values);
    setFormErrors(errors);
  }

  function handleUpdateServiceOrder (value) {
    const doc = Object.assign({}, serviceOrderForm, value);
    setServiceOrderForm(doc);
    updateFormModel(doc);
  }

  function atualizarEquipamento (value) {
    const equip = Object.assign({}, equipamento, value);
    setEquipamento(equip);
    updateFormModel({equipamento: equip});
  }

  function atualizarTriagem (value) {
    const _screening = Object.assign(screening, value);
    setScreening(_screening);
    updateFormModel({triagem: _screening})
  }

  function atualizarAcessorios (value) {
    setAcessorios(value);
    atualizarTriagem({acessorios: value});
    const _screening = Object.assign({}, screening)
    screening.acessorios = value
    updateFormModel({triagem: _screening})
  }

  function cleanForm () {
    setEquipamento(Object.assign({}, Equipamento({})));
    setScreening({});
    setAcessorios(listaFormAcessorios([]));
    cleanServiceOrder();
  }

  if (!blockEffect) {
    return (<React.Fragment>
      Carregando...
    </React.Fragment>)
  }

  return (
    <React.Fragment>
      <CssBaseline/>

      <main className={classes.layout}>
        <TitleFormScreening cleanForm={cleanForm}/>

        <Paper className={classes.paper}>
          <CadastroEquipamento
            errors={errors}
            register={register}
            serviceOrder={serviceOrderForm}
            equipment={equipamento}
            screening={screening}
            updateErrors={updateErrors}
            updateEquipment={atualizarEquipamento}
            updateScreening={atualizarTriagem}
            updateServiceOrder={handleUpdateServiceOrder}
            editingForm={editingForm}
          />
        </Paper>

        <Paper className={classes.paper}>
          <Grid container justify={"space-between"} alignItems={"center"}>
            <Grid item xs={12} sm={7}>
              <Typography variant="h6" gutterBottom>
                2. Relação de Material / Acessórios Entregues
              </Typography>
            </Grid>
          </Grid>

          <RelacaoDeMaterial
            acessorios={acessorios}
            atualizarAcessorios={atualizarAcessorios}
          />
        </Paper>
      </main>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  divTextFooter: {
    height: 60,
    justifyContent: "space-evenly",
    display: "flex",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(1200 + theme.spacing(2) * 2)]: {
      width: 1200,
      marginLeft: "auto",
      marginRight: "auto",
    },
    flexDirection: "row",
  },

  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(1200 + theme.spacing(2) * 2)]: {
      width: 1200,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
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
