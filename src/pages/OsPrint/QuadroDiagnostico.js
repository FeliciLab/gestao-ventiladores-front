import React from 'react'
import Grid from "@material-ui/core/Grid";

export default function QuadroDiagnosticos (props) {
  return (
    <Grid container>
      <Grid item xs={12}>
        <div className={'title-board-blank'}>
          {props.titulo || ''}
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className={'board-blank'}>
          {props.text || ''}
        </div>
      </Grid>
    </Grid>
  )
}