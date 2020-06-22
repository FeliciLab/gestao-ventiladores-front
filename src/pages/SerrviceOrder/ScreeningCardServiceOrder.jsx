import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import AccessoriesTablePagination from './AccesoriesTablePagination';
import PhotoModal from '../../components/PhotoModal/PhotoModal';
import {
  baseImageURI,
  hasPhoto,
  hasPhotoAfter,
  hasPhotoBefore,
} from '../../utils/serviceOrderUtils';

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
        {hasPhoto(item) ? (
          <Grid item xs={12} className={classes.rowItem}>
            <Grid container spacing={4}>
              {hasPhotoBefore(item) ? (
                <Grid item xs={6} style={{ height: '227' }}>
                  <PhotoModal
                    src={`${baseImageURI(item)}/foto_antes_limpeza.jpeg`}
                    alt="Foto antes da limpeza"
                  />
                </Grid>
              ) : (
                <></>
              )}
              {hasPhotoAfter(item) ? (
                <Grid item xs={6} style={{ height: '227px' }}>
                  <PhotoModal
                    src={`${baseImageURI(item)}/foto_apos_limpeza.jpeg`}
                    alt="Foto após da limpeza"
                  />
                </Grid>
              ) : (
                <></>
              )}
            </Grid>
          </Grid>
        ) : (
          <></>
        )}
      </Grid>
    </>
  );
};

ScreeningCardServiceOrder.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
};

export default ScreeningCardServiceOrder;
