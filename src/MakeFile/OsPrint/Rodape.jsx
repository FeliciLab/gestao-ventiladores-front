import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';


const useStyle = makeStyles(() => ({
  rodape: {
    width: '100%',
    fontSize: '20px',
    marginTop: '5px',
  },
}));

const Rodape = (props) => {
  const classes = useStyle();
  const {
    numero,
    pagina,
  } = props;
  return (
    <div className={classes.rodape}>
      <Grid container justify="space-between">
        <Grid item xs="auto">
          <span>OS Nº: </span>
          <strong>{numero || '---'}</strong>
        </Grid>
        <Grid item xs="auto">
          <span>Página: </span>
          <strong>{pagina || '--'}</strong>
        </Grid>
      </Grid>
    </div>
  );
};

Rodape.propTypes = {
  numero: PropTypes.string.isRequired,
  pagina: PropTypes.string.isRequired,
};

export default Rodape;
