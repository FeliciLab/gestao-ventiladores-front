import React from 'react';
import PropTypes from 'prop-types';
import SendIcon from '@material-ui/icons/Send';
import {
  Grid,
  makeStyles,
} from '@material-ui/core';
import ThemeButton from '../_common/forms/ThemeButton';

const useStyles = makeStyles(() => ({
  container: {
    height: '145px',
  },
  message: {
    fontSize: '1.25rem',
    margin: '12px 0 24px 0',
    color: 'rgba(0, 0, 0, .54)',
  },
  loginTitle: {
    fontSize: '1.3rem',
  },
}));

const LoginMessage = ({ handleClick }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justify="space-between"
      alignItems="flex-start"
    >
      <h2 className={classes.loginTitle}>Fazer login</h2>
      <p className={classes.message}>
        Para ter acesso à plataforma
        <strong>Central de Ventiladores</strong>
        , você precisará fazer seu login
        através do
        <strong> ID Saúde</strong>
        .
      </p>
      <ThemeButton startIcon={<SendIcon />} onClick={handleClick}>
        Login com ID Saúde
      </ThemeButton>
    </Grid>
  );
};

LoginMessage.propTypes = {
  handleClick: PropTypes.instanceOf(Object).isRequired,
};

export default LoginMessage;
