import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

const useClass = makeStyles(() => ({
  texto: {
    color: grey[900],
    fontSize: '12pt',
    fontWeight: 'bold',
    paddingTop: '8px',
    paddingBottom: '8px',
  }
}));
export default function SubtituloPagina (props) {
  const classes = useClass();
  return (
    <Typography className={classes.texto}><strong>{props.texto}</strong></Typography>
  )

}