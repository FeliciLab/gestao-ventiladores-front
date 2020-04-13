import React from 'react'
import Typography from "@material-ui/core/Typography";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  texto: {
    fontSize: '16pt'
  }
}));

export default function TituloPagina (props) {
  const classes = useStyles();

  return (
    <Grid container justify='center'>
      <Grid item xs="auto">
        <Typography align={`center`} className={classes.texto}>{props.titulo}</Typography>
      </Grid>
    </Grid>
  )
}