import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const HeaderFormPage = (props) => {
  const { serviceOrderNumber } = props;
  return (
    <Grid container justify="space-between" style={{ marginTop: '3rem' }}>
      <Grid item xs={12} sm="auto">
        <Typography variant="h5" component="h5">
          Cadastro de Diagnóstico e Demanda por Insumos
        </Typography>
        <Typography variant="h6" component="h6">
          <strong>{`OS Nº: ${serviceOrderNumber || ''}`}</strong>
        </Typography>
      </Grid>
    </Grid>
  );
};

HeaderFormPage.propTypes = {
  serviceOrderNumber: PropTypes.string.isRequired,
};

export default HeaderFormPage;
