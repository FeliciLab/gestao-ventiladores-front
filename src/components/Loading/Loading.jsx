import React, { useContext } from 'react';
import {
  Backdrop,
  LinearProgress,
  makeStyles,
  Typography,
} from '@material-ui/core/styles';
import LoadingContext from '../../contexts/LoadingContext';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const Loading = () => {
  const classes = useStyles();
  const { loading, setLoading } = useContext(LoadingContext);

  const { open, progress, message } = loading;

  return (
    <Backdrop
      className={classes.backdrop}
      open={open}
      onClick={() => setLoading({ ...loading, open: false })}>
      <LinearProgress variant="determinate" value={progress} />
      <Typography variant="h6">{message || 'Carregando...'}</Typography>
    </Backdrop>
  );
};

export default Loading;
