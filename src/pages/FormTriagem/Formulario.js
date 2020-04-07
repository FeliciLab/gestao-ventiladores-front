import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SaveIcon from "@material-ui/icons/Save";
import CadastroEquipamento from "./CadastroEquipamento";
import RelacaoDeMaterial from "./RelacaoDeMaterial";

export default function Formulario() {
  const classes = useStyles();

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
          <CadastroEquipamento />
        </Paper>

        <Paper className={classes.paper}>
          <RelacaoDeMaterial />
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
