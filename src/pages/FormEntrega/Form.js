import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SaveIcon from "@material-ui/icons/Save";
import BuscarEquipamento from "./BuscarEquipamento";
import DadosDestinatario from "./DadosDestinatario";
import DadosResponsavel from "./DadosResponsavel";
import DadosResponsavelTransporte from "./DadosResponsavelTransporte";


export default function FormScreening() {
  const classes = useStyles();
  //   const [equipamento, setEquipamento] = React.useState(Equipamento({}));
  //   const [triagem, setTriagem] = React.useState(EquipamentoTriagem({triagem: equipamento.triagem}));
  //   const [acessorios, setAcessorios] = React.useState([...listaFormAcessorios(triagem.acessorios), '']);

  //   function atualizarEquipamento (value) {
  //     const equip = Object.assign(equipamento, value);
  //     setEquipamento(equip);
  //   }

  //   function atualizarTriagem (value) {
  //     const triag = Object.assign(triagem, value);
  //     setTriagem(triag);
  //     atualizarEquipamento({triagem: triag});
  //   }

  //   function atualizarAcessorios (value) {
  //     setAcessorios(value);
  //     atualizarTriagem({acessorios: value});
  //   }

  //   function salvarEquipamento () {
  //     salvarTriagem(equipamento);
  //   }

  return (
    <React.Fragment>
      <CssBaseline />

      <main className={classes.layout}>
        <div
          style={{
            display: "flex",
            height: 100,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div style={{alignSelf: "center"}}>
            <Typography style={{fontSize: 20, fontWeight: "bold"}}>
              Triagem do Equipamento
            </Typography>
            <Typography style={{fontSize: 14}}>
              Após o recebimento, o cadastro do equipamento deverá ser
              realizado. Para isso, preencha os campos abaixo:
            </Typography>
          </div>
          <div style={{alignSelf: "center"}}>
            <Button
              //   onClick={salvarEquipamento}
              variant="contained"
              style={{
                backgroundColor: "#ff9800",
                borderRadius: 20,
                color: "#fff",
              }}
              startIcon={<SaveIcon />}
            >
              Salvar
            </Button>
          </div>
        </div>

        <Paper className={classes.paper}>
          <BuscarEquipamento
          // atualizarTriagem={atualizarTriagem}
          // atualizarEquipamento={atualizarEquipamento}
          // equipamento={equipamento}
          // triagem={triagem}
          />
        </Paper>

        <Paper className={classes.paper}>
          <DadosDestinatario />
        </Paper>

        <Paper className={classes.paper}>
          <DadosResponsavel />
        </Paper>

        <Paper className={classes.paper}>
          <DadosResponsavelTransporte />
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
