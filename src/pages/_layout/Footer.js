import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";


export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.appBar}>
      <div className={classes.info}>
        <div className={classes.coluna}>
          <Typography className={classes.title} noWrap>
            Recebimento
          </Typography>
          <Typography className={classes.text} noWrap>
            Cadastro
          </Typography>
          <Typography className={classes.text} noWrap>
            Material
          </Typography>
        </div>

        <div className={classes.coluna}>
          <Typography className={classes.title} noWrap>
            Triagem
          </Typography>
          <Typography className={classes.text} noWrap>
            Origem
          </Typography>
          <Typography className={classes.text} noWrap>
            Modelo
          </Typography>
          <Typography className={classes.text} noWrap>
            Situação
          </Typography>
          <Typography className={classes.text} noWrap>
            Acessórios
          </Typography>
        </div>

        <div className={classes.coluna}>
          <Typography className={classes.title} noWrap>
            Diagnóstico
          </Typography>
          <Typography className={classes.text} noWrap>
            Ckecklist
          </Typography>
          <Typography className={classes.text} noWrap>
            Equipamentos
          </Typography>
          <Typography className={classes.text} noWrap>
            Observações
          </Typography>
        </div>

        <div className={classes.coluna}>
          <Typography className={classes.title} noWrap>
            Avaliação
          </Typography>
          <Typography className={classes.text} noWrap>
            Peças
          </Typography>
          <Typography className={classes.text} noWrap>
            Acessórios
          </Typography>
        </div>

        <div className={classes.coluna}>
          <Typography className={classes.title} noWrap>
            Manuntenção
          </Typography>
          <Typography className={classes.text} noWrap>
            Checklist
          </Typography>
          <Typography className={classes.text} noWrap>
            Equipamento
          </Typography>
          <Typography className={classes.text} noWrap>
            Observações
          </Typography>
        </div>
      </div>
      <div style={{alignSelf: "center"}}>
        <Typography className={classes.text} noWrap>
          © 2017 - 2020 – GOVERNO DO ESTADO DO CEARÁ. TODOS OS DIREITOS
          RESERVADOS - v0.5.0
        </Typography>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: "flex",
    position: "relative",
    height: 280,
    background: green[800],
    flexDirection: "column",
  },
  info: {
    marginTop: 50,
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    width: "auto",
    height: 200,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(1200 + theme.spacing(2) * 2)]: {
      width: 1200,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  title: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  text: {
    fontSize: 14,
    color: "#fff",
  },

  coluna: {
    display: "flex",
    flexDirection: "column",
  },
}));
