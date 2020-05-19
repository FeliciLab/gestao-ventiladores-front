import React from 'react';
import { Grid } from '@material-ui/core';


export default function FooterPrint (props) {
  const {
    text,
    number,
    pageNumber
  } = props;

  return (<React.Fragment>
    <Grid container justify={'space-between'}>
      <Grid item xs={'auto'}>
        <span>{text}: </span>
        <strong>{number || '---'}</strong>
      </Grid>
      <Grid item xs={'auto'}>
        <span>Página: </span>
        <strong>{pageNumber || '--'}</strong>
      </Grid>
    </Grid>
  </React.Fragment>);
}