import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
  texto: {
    fontSize: '16pt',
  },
}));

const TituloPagina = (props) => {
  const classes = useStyles();

  const {
    titulo,
  } = props;

  return (
    <Grid container justify="center">
      <Grid item xs="auto">
        <Typography align="center" className={classes.texto}>
          {titulo}
        </Typography>
      </Grid>
    </Grid>
  );
};

TituloPagina.propTypes = {
  titulo: PropTypes.string.isRequired,
};

export default TituloPagina;
