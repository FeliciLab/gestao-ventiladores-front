import React from "react";
import {grey} from "@material-ui/core/colors";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  quadro: {
    padding: '5px',
    minHeight: '35px',
    border: 1,
    borderStyle: 'solid',
    borderColor: grey[300]
  },
  quadroMarcacao: {
    height: '18px',
    width: '18px',
    border: 3,
    borderColor: grey[900],
    borderRadius: '0.3rem',
    borderStyle: 'solid'
  },
  texto: {
    marginLeft: '5px',
    fontSize: '11pt',
    fontWeight: 'bolder'
  },
  linha: {
    display: 'flex',
    justifyContent: 'start'
  }
}));

export default function LinhaChecklistClinico (props) {
  const classes = useStyles();
  return (
    <div className={classes.quadro}>
      <Grid container wrap={false}>
        <Grid item xs={12}>
          <div className={classes.linha}>
            <div className={classes.quadroMarcacao}></div>
            <Typography className={classes.texto}>{props.numero || '-'}. {props.texto || '-'}</Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}