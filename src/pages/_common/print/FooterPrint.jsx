import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';


const FooterPrint = (props) => {
  const {
    text,
    number,
    pageNumber,
  } = props;

  return (
    <>
      <Grid container justify="space-between">
        <Grid item>
          <span>{text}</span>
          :
          <strong>{number || '---'}</strong>
        </Grid>
        <Grid item>
          <span>Página: </span>
          <strong>{pageNumber || '--'}</strong>
        </Grid>
      </Grid>
    </>
  );
};

FooterPrint.propTypes = {
  text: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  pageNumber: PropTypes.string.isRequired,
};

export default FooterPrint;
