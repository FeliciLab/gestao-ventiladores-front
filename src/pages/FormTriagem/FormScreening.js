import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import CadastroEquipamento from "./CadastroEquipamento";
import RelacaoDeMaterial from "./RelacaoDeMaterial";
import {ServiceOrder, ServiceOrderScreening} from "../../models/serviceOrder";
import {listaFormAcessorios} from "../../models/acessorio";
import TitleFormScreening from "./TitleFormScreening";
import {useHistory} from "react-router-dom";
import {saveNewEquipment, updateEquipment,} from "../../modelServices/equipamentoService";
import Alert from "@material-ui/lab/Alert";
import {Equipamento} from "../../models/equipamentos";
import {saveNewOrderService} from "../../modelServices/serviceOrderService";


export default function FormScreening () {
  const history = useHistory();

  const classes = useStyles();

  const [equipamento, setEquipamento] = React.useState(Equipamento({}))
  const [serviceOrder, setServiceOrder] = React.useState(ServiceOrder({}));
  const [screening, setScreening] = React.useState(ServiceOrderScreening({screening: equipamento.screening}));
  const [acessorios, setAcessorios] = React.useState([...listaFormAcessorios(screening.acessorios), '']);

  const [formErrors, setFormErrors] = React.useState({});
  const [errorsFound, setErrorsFound] = React.useState(false);

  function updateErrors (values) {
    const _formErrors = Object.assign({}, formErrors);
    for (let indexValue in values) {
      for (let index in _formErrors[indexValue]) _formErrors[indexValue][index] = false;
    }

    const errors = Object.assign(_formErrors, values);
    setFormErrors(errors);
  }

  function updateServiceOrder (value ) {
    const doc = Object.assign({}, serviceOrder, value);
    setServiceOrder(doc);
  }

  function atualizarEquipamento (value) {
    const equip = Object.assign(equipamento, value);
    setEquipamento(equip);
  }

  function atualizarTriagem (value) {
    const triag = Object.assign(screening, value);
    setScreening(triag);
    atualizarEquipamento({screening: triag});
  }

  function atualizarAcessorios (value) {
    setAcessorios(value);
    atualizarTriagem({acessorios: value});
  }

  function hasErrorsFound () {
    for (let indexForm in formErrors) {
      for (let index in formErrors[indexForm]) {
        if (formErrors[indexForm][index]) {
          setErrorsFound(true);
          return true;
        }
      }
    }

    setErrorsFound(false);
    return false;
  }

  async function saveDocuments () {
    if (hasErrorsFound()) return;
    let equipamentoId = ''

    try {
      if (equipamento._id === '') {
       await saveNewEquipment(equipamento)
       equipamentoId = equipamento._id
      } else {
        equipamentoId = await updateEquipment(equipamento)
      }
    } catch (e) {
      console.log('falha ao salvar equipamento', e)
      return false
    }

    setScreening({
      acessorios: acessorios.slice(0)
    })

    setServiceOrder({
      equipamento_id: equipamentoId,
      triagem: Object.assign({}, screening)
    })

    try {
      if (serviceOrder._id) {
        await updateServiceOrder(serviceOrder)
      } else {
        await saveNewOrderService(serviceOrder)
      }
    } catch (e) {
      console.log('falha ao salvar ordem de serviço', e)
      return false
    }


    return history.push({pathname: '/'});
  }

  return (
    <React.Fragment>
      <CssBaseline/>

      <main className={classes.layout}>
        <TitleFormScreening saveEquipment={saveDocuments}/>

        {errorsFound ?
          <Alert
            color={"error"}
            onClose={() => setErrorsFound(false)}
          >
            Não é possível salvar. Verifique o formulário e preencha os campos
            corretamente.
          </Alert>
          : ''}

        <Paper className={classes.paper}>
          <CadastroEquipamento
            updateErrors={updateErrors}
            atualizarTriagem={atualizarTriagem}
            atualizarEquipamento={atualizarEquipamento}
            updateServiceOrder={updateServiceOrder}
            equipamento={equipamento}
            screening={screening}
            serviceOrder={serviceOrder}
            serviceNumber={0}
          />
        </Paper>

        <Paper className={classes.paper}>
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
