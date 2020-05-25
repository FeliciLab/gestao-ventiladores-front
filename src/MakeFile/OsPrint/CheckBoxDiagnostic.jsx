import React from 'react';
import PropTypes from 'prop-types';
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
    justifyContent: 'space-around',
  },
}));

const CheckBoxDiagnostic = (props) => {
  const classes = useStyles();
  const { items } = props;
  return (
    <>
      <div className={classes.quadro}>
        <Grid container>
          {items.map((item) => (
            <Grid
              key={item}
              item
              xs={12}
            >

              <FormControlLabel
                control={<Checkbox name="checkedC" />}
                label={item}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

CheckBoxDiagnostic.defaultProps = {
  items: [],
};

CheckBoxDiagnostic.propTypes = {
  items: PropTypes.instanceOf(Array),
};

export default CheckBoxDiagnostic;
