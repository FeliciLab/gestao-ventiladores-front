import React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import Toolbar from '@material-ui/core/Toolbar';
import { lighten, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
    display: 'flex',
    justifyContent: 'space-between'
  },
  highlight: {
    color: theme.palette.primary.main,
    backgroundColor: lighten(theme.palette.primary.light, 0.85),
  },
  title: {
    flex: '1 1 100%',
  },
}));

export default function TableActionBar (props) {
  const [doAction, setDoAction] = React.useState(false);

  function startAction (event) {
    event.preventDefault();
    setDoAction(true);
  }

  if (doAction) {
    return props.action;
  }
  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: props.selecionados.length > 0,
      })}
    >
      {
        props.selecionados.length > 0 ? (
          <Typography
            variant="subtitle1"
            component="div"
          >
            {props.selecionados.length} Orde{props.selecionados.length > 1 ? 'ns' : 'm'} de Serviços selecionados
          </Typography>
        ) : (
          <Typography
            variant="subtitle1"
            component="div"
          >
            Lista de Ordem de Serviços
          </Typography>
        )
      }

      {
        props.selecionados.length > 0 ? (
          <Tooltip title="Gerar Ordem Serviço">
            <Button
              onClick={(event) => abrirImpressao(event)}
              variant="outlined"
            >Gerar arquivo de impressão</Button>
          </Tooltip>
        ) : (
          <Tooltip title="nenhuma ordem de serviço selecionada">
            <IndeterminateCheckBoxIcon></IndeterminateCheckBoxIcon>
          </Tooltip>
        )
      }

    </Toolbar>
  );
}