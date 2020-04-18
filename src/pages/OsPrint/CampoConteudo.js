import React from 'react';
import grey from '@material-ui/core/colors/grey';
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useClass = makeStyles(() => ({
  titulo: {
    color: grey[500],
    fontSize: '10pt'
  },
  texto: {
    color: grey[900],
    fontSize: '12pt'
  }
}));

export default function CampoConteudo (props) {
  const classes = useClass()
  return (
    <div>
      <Typography className={classes.titulo}>{props.titulo || '---'}</Typography>
      <Typography className={classes.texto}> {props.texto || '---'}</Typography>
    </div>
  )
};
