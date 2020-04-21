import React from 'react';
import Grid from "@material-ui/core/Grid";

export default function TabPanel (props) {
  const { children, value, index, ...other } = props;
  return (
    <div hidden={value !== index}>
      <Grid container {...other}>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </div>
  )
}