import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Backdrop,
  Box,
  CircularProgress,
  Grid,
  Typography,
} from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import LoadingContext from '../../contexts/LoadingContext';

const CustomCircularProgress = withStyles(() => ({
  root: {
    color: '#fff',
  },
}))(CircularProgress);

const CircularProgressWithLabel = (props) => {
  return (
    <Box position="relative" display="inline-flex">
      <CustomCircularProgress variant="static" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" style={{ color: 'white' }}>
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
};

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const Loading = () => {
  const classes = useStyles();
  const { openLoading, progressLoading, messageLoading } = useContext(LoadingContext);

  return (
    <Backdrop
      className={classes.backdrop}
      open={openLoading}
      onClick={() => false}
    >
      <Grid container direction="column" justify="center" alignContent="center">
        <Grid item style={{ textAlign: 'center' }}>
          <CircularProgressWithLabel
            value={
              progressLoading <= 100
                ? progressLoading
                : 100
            }
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">
            {messageLoading || 'Carregando...'}
          </Typography>
        </Grid>
      </Grid>
    </Backdrop>
  );
};

export default Loading;
