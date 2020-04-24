import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import CadastroEquipamento from "./CadastroEquipamento";
import RelacaoDeMaterial from "./RelacaoDeMaterial";
import {ServiceOrder, ServiceOrderScreening} from "../../../models/serviceOrder";
import {listaFormAcessorios} from "../../../models/acessorio";
import TitleFormScreening from "./TitleFormScreening";
import {useHistory} from "react-router-dom";
import {deleteEquipmentRequest, saveNewEquipment, updateEquipment,} from "../../../modelServices/equipamentoService";
import Alert from "@material-ui/lab/Alert";
import {Equipamento} from "../../../models/equipamentos";
import {saveNewOrderService, updateServiceOrderRequest} from "../../../modelServices/serviceOrderService";
import {useForm} from "react-hook-form";


export default function FormScreening () {
  const history = useHistory();

  const {register, errors, triggerValidation} = useForm({mode: 'onBlur', reValidateMode: 'onChange'});

  const classes = useStyles();

  const [equipamento, setEquipamento] = React.useState(Equipamento({}));
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

  function updateServiceOrder (value) {
    const doc = Object.assign({}, serviceOrder);
    setServiceOrder(Object.assign({}, doc, value));
  }

  function atualizarEquipamento (value) {
    let _equip = JSON.parse(JSON.stringify(equipamento));
    const equip = Object.assign({}, _equip, value);
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

  function showErrorBar () {
    setErrorsFound(true);
    setTimeout(() => {
      setErrorsFound(false);
    }, 10000);
  }

  async function saveDocuments () {
    await triggerValidation();
    if (Object.keys(errors).length > 0) {
      showErrorBar()
      return;
    }

    let equipamentoId = '';

    try {
      if (equipamento._id && equipamento._id !== '') {
        await updateEquipment(equipamento);
        equipamentoId = equipamento._id;
      } else {
        const equip = await saveNewEquipment(equipamento);
        equipamentoId = equip._id;
      }
      console.log('equipamento OK');
    } catch (e) {
      console.log('falha ao salvar equipamento', e);
      return false;
    }

    const screen = Object.assign({}, screening, {acessorios: acessorios.filter(item => item !== '')});
    const order = Object.assign({},
      serviceOrder,
      {triagem: screen},
      {equipamento_id: equipamentoId}
    );

    try {
      if (order._id && order._id !== '') {
        await updateServiceOrderRequest(Object.assign(order, {status: 'triagem'}));
      } else {
        await saveNewOrderService(Object.assign(order, {status: 'triagem'}));
      }
    } catch (e) {
      deleteEquipmentRequest(equipamentoId)
      showErrorBar()
      console.log('falha ao salvar ordem de serviço', e);
      return false;
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
            register={register}
            errors={errors}
            updateErrors={updateErrors}
            atualizarTriagem={atualizarTriagem}
            atualizarEquipamento={atualizarEquipamento}
            updateServiceOrder={updateServiceOrder}
            equipamento={equipamento}
            screening={screening}
            serviceOrder={serviceOrder}
          />
        </Paper>

        <Paper className={classes.paper}>
          <RelacaoDeMaterial acessorios={acessorios} atualizarAcessorios={atualizarAcessorios}/>
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
