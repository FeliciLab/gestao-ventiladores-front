import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import AccessoriesTablePagination from './AccesoriesTablePagination';


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
