import React from 'react'
import green from '@material-ui/core/colors/green'
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  planodefundo: {
    backgroundColor: green[500],
    width: '100%',
    padding: '1rem',
    color: 'white',
    fontWeight: 'bolder',
    textTransform: 'capitalize',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    marginBottom: '2.5rem'
  },
  texto: {
    fontSize: '14pt'
  }
}));

export default function Cabecalho (props) {
  const classes = useStyles();
  return (
    <div className={classes.planodefundo}>
      <Grid container justify={'space-between'}>
        <Grid item xs="auto">
          <Typography align={"left"} className={classes.texto}><strong>CENTRAL<br/>DE<br/>VENTILADORES</strong></Typography>
        </Grid>
        <Grid item xs="auto">
          <Typography className={classes.texto} align={"left"}><strong>Nº:</strong> {props.numero === '' ? '---' : props.numero}</Typography>
          <Typography className={classes.texto} align={"left"}><strong>{props.datahora.split(' ')[0]}</strong> {props.datahora.split(' ')[1]}</Typography>
          <Typography className={classes.texto} align={"left"}><strong>Página</strong> {props.pagina}</Typography>
        </Grid>
      </Grid>
    </div>
  )
}