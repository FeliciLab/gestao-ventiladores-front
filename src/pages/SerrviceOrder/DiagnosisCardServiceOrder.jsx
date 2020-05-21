import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import DiagnosisItemsTablePagination from './DiagnosisItemsTablePagination';


const useStyle = makeStyles(() => ({
  rowItem: {
    margin: '1rem 0rem',
  },
}));

const DiagnosisCardServiceOrder = (props) => {
  const classes = useStyle();
  const { item } = props;
  return (
    <>
      <Grid container alignItems="center" justify="center">
        <Grid item xs={12} className={classes.rowItem}>
          <Typography variant="h6">
            <strong>Diagnóstico:</strong>
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.rowItem}>
          <Typography variant="body1">
            <strong>Resutlado ténico:</strong>
          </Typography>
          <Typography variant="body2">
            {item.diagnostico.resultado_tecnico || '---'}
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.rowItem}>
          <Typography variant="body1">
            <strong>Demanda de serviços:</strong>
          </Typography>
          <Typography variant="body2">
            {item.diagnostico.demanda_servicos || '---'}
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.rowItem}>
          <Typography variant="body1">
            <strong>Observações:</strong>
          </Typography>
          <Typography variant="body2">
            {item.diagnostico.observacoes || '---'}
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.rowItem}>
          <Typography variant="body1">
            <strong>Acessórios:</strong>
          </Typography>
          <DiagnosisItemsTablePagination items={item.diagnostico.itens} />
        </Grid>
      </Grid>
    </>
  );
};

DiagnosisCardServiceOrder.propTypes = {
  item: PropTypes.shape({
    diagnostico: PropTypes.shape({
      resultado_tecnico: PropTypes.string,
      demanda_servicos: PropTypes.string,
      observacoes: PropTypes.string,
      itens: PropTypes.instanceOf(Array),
    }),
  }).isRequired,
};

export default DiagnosisCardServiceOrder;
