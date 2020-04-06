import React from 'react'
import {Grid} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyle = makeStyles(() => ({
  rodape: {
    width: '100%'
  }
}))

export default function Rodape(props) {
  const classes = useStyle()
  return (
    <div className={classes.rodape}>
      <Grid container justify={'space-between'}>
        <Grid item xs={'auto'}>
          <span>OS Nº: </span>
          <strong>{props.numero || '---'}</strong>
        </Grid>
        <Grid item xs={'auto'}>
          <span>Página: </span>
          <strong>{props.pagina || '--'}</strong>
        </Grid>
      </Grid>
    </div>
  )
}