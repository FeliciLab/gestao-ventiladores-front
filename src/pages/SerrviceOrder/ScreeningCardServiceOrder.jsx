import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import AccessoriesTablePagination from './AccesoriesTablePagination';
import PhotoModal from '../../components/PhotoModal/PhotoModal';

const useStyle = makeStyles(() => ({
  rowItem: {
    margin: '1rem 0rem',
  },
}));

const ScreeningCardServiceOrder = (props) => {
  const classes = useStyle();
  const { item } = props;
  return (
    <>
      <Grid container alignItems="center" justify="center">
        <Grid item xs={12} className={classes.rowItem}>
          <Typography variant="h6">
            <strong>Triagem:</strong>
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.rowItem}>
          <Typography variant="body1">
            <strong>Acessórios:</strong>
          </Typography>
          <AccessoriesTablePagination items={item.triagem.acessorios} />
        </Grid>
        <Grid item xs={12} className={classes.rowItem}>
          <Grid container spacing={4}>
            <Grid item xs={6} style={{ height: '227' }}>
              <PhotoModal
                src="http://localhost:5000/v2/service_order/5ec2a9f4f4a96eb1dc54efd1/foto_antes_limpeza.jpeg"
                alt="Foto antes da limpeza"
              />
            </Grid>
            <Grid item xs={6} style={{ height: '227px' }}>
              <PhotoModal
                src="http://localhost:5000/v2/service_order/5ec2a9f4f4a96eb1dc54efd1/foto_apos_limpeza.jpeg"
                alt="Foto após da limpeza"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

ScreeningCardServiceOrder.propTypes = {
  item: PropTypes.shape({
    triagem: PropTypes.shape({
      acessorios: PropTypes.instanceOf(Array),
    }),
  }).isRequired,
};

export default ScreeningCardServiceOrder;
