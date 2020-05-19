import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';


const useStyle = makeStyles(() => ({
  rowItem: {
    margin: '1rem 0rem'
  }
}));

export default function CalibrationCardService (props) {
  const classes = useStyle();
  const {item} = props;

  return (<React.Fragment>
    <Grid container alignItems={"center"} justify={"center"}>
      <Grid item xs={12} className={classes.rowItem}>
        <Typography variant={"h6"}><strong>Calibragem:</strong></Typography>
      </Grid>
      <Grid item xs={12} className={classes.rowItem}>
        <Typography variant={"body1"}><strong>Status:</strong></Typography>
        <Typography variant={"body2"}>{item.calibragem.status || '---'}</Typography>
      </Grid>
    </Grid>
  </React.Fragment>);
}