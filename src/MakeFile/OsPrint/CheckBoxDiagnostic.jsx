import React from 'react';
import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(() => ({
  quadro: {
    padding: '5px',
    border: 1,
    borderStyle: 'solid',
    borderColor: grey[900],
    display: 'flex',
    justifyContent: 'space-around'
  }
}));
export default function CheckBoxDiagnostic (props) {
  const {items} = props
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.quadro}>
        <Grid container>
          {items.map((item, index) => (
            <Grid
              key={index}
              item
              xs={12}
            >

              <FormControlLabel
                control={<Checkbox name="checkedC"/>}
                label={item}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </React.Fragment>
  );
}