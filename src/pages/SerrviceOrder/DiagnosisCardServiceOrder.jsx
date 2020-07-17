import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
} from '@material-ui/core';
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

  const diagItems = item && item.diagnosticos_itens
    ? item.diagnosticos_itens.map((data) => {
      const diagnosisItem = item.diagnostico.itens
        .find((acess) => acess._id === data.item_id);

      if (diagnosisItem) {
        return {
          ...data,
          quantidade: diagnosisItem.quantidade,
        };
      }

      return data;
    })
    : [];

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
            <strong>Itens:</strong>
          </Typography>
          <DiagnosisItemsTablePagination items={diagItems} />
        </Grid>
      </Grid>
    </>
  );
};

DiagnosisCardServiceOrder.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
};

export default DiagnosisCardServiceOrder;
