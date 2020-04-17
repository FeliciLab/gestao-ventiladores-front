import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import CadastroEquipamento from "./CadastroEquipamento";
import RelacaoDeMaterial from "./RelacaoDeMaterial";
import {Equipamento, EquipamentoTriagem} from "../../models/equipamentos";
import {listaFormAcessorios} from "../../models/acessorio";
import TitleFormScreening from "./TitleFormScreening";
import {useHistory} from "react-router-dom";
import {saveNewScreening, updateScreening} from "../../modelServices/equipamentoService";
import Alert from "@material-ui/lab/Alert";


export default function FormScreening () {
  const history = useHistory();

  const classes = useStyles();

  const [equipamento, setEquipamento] = React.useState(Equipamento({}));
  const [triagem, setTriagem] = React.useState(EquipamentoTriagem({triagem: equipamento.triagem}));
  const [acessorios, setAcessorios] = React.useState([...listaFormAcessorios(triagem.acessorios), '']);
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

  function atualizarEquipamento (value) {
    const equip = Object.assign(equipamento, value);
    setEquipamento(equip);
  }

  function atualizarTriagem (value) {
    const triag = Object.assign(triagem, value);
    setTriagem(triag);
    atualizarEquipamento({triagem: triag});
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

  function salvarEquipamento () {
    if (hasErrorsFound()) return;
    if (equipamento._id) {
      return updateScreening(equipamento)
        .then(() => {
          history.push({pathname: '/'});
        });
    }

    return saveNewScreening(equipamento)
      .then(() => {
        history.push({pathname: '/'});
      });

  }

  return (
    <React.Fragment>
      <CssBaseline/>

      <main className={classes.layout}>
        <TitleFormScreening saveEquipment={salvarEquipamento}/>

        {errorsFound ?
          <Alert color={"error"}>Não é possível salvar. Verifique o formulário e preencha os campos
            corretamente.</Alert>
          : ''}

        <Paper className={classes.paper}>
          <CadastroEquipamento
            updateErrors={updateErrors}
            atualizarTriagem={atualizarTriagem}
            atualizarEquipamento={atualizarEquipamento}
            equipamento={equipamento}
            triagem={triagem}
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
