import React from 'react'
import Typography from "@material-ui/core/Typography";
import {Grid} from "@material-ui/core";

export default function TituloOrdemServico (props) {
  const osnumber = (!props || !props.equipamento) ? '' : new Date(Date.parse(props.equipamento.timestamp)).getTime()
  return (
    <Grid container justify='center'>
      <Grid item xs="auto">
        <Typography variant="h5" component="h5">ORDEM DE SERVIÇO: {osnumber}</Typography>
      </Grid>
    </Grid>
  )
}