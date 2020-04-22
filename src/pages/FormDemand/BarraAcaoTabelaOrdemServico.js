import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import {lighten, makeStyles} from "@material-ui/core/styles";
import clsx from "clsx";
import {Redirect} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
    display: "flex",
    justifyContent: "space-between",
  },
  highlight: {
    color: theme.palette.primary.main,
    backgroundColor: lighten(theme.palette.primary.light, 0.85),
  },
  title: {
    flex: "1 1 100%",
  },
}));

export default function BarraAcaoTabelaOrdemServico(props) {
  const classes = useStyles();

  const [toPrint, setToPrint] = React.useState(false);

  function abrirImpressao(event) {
    event.preventDefault();
    setToPrint(true);
  }

  if (toPrint) {
    return (
      <Redirect
        push
        to={{
          pathname: "/makeDemandFile",
          state: {
            selecionados: props.dadosOriginais.filter((item) =>
              props.selecionados.find(
                (selecionado) => selecionado.id === item.id
              )
            ),
          },
        }}
      ></Redirect>
    );
  }
  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: props.selecionados.length > 0,
      })}
    >
      {props.selecionados.length > 0 ? (
        <Typography variant="subtitle1" component="div">
          {props.selecionados.length} Orde
          {props.selecionados.length > 1 ? "ns" : "m"} de Serviços selecionados
        </Typography>
      ) : (
        <Typography variant="subtitle1" component="div">
          Lista de Ordem de Serviços
        </Typography>
      )}

      {props.selecionados.length > 0 ? (
        <Tooltip title="Gerar Ordem Serviço">
          <Button onClick={(event) => abrirImpressao(event)} variant="outlined">
            Gerar arquivo de impressão
          </Button>
        </Tooltip>
      ) : (
        <Tooltip title="nenhuma ordem de serviço selecionada">
          <IndeterminateCheckBoxIcon></IndeterminateCheckBoxIcon>
        </Tooltip>
      )}
    </Toolbar>
  );
}
