import React from 'react';
import PropTypes from 'prop-types';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core';
import ThemeButton from '../_common/forms/ThemeButton';

const useStyles = makeStyles(() => ({
  container: {
    height: '145px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
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
    <div className={classes.container}>
      <h2 className={classes.loginTitle}>Fazer login</h2>
      <p className={classes.message}>
        Para ter acesso à plataforma
        <strong> Central de Ventiladores</strong>, você precisará fazer seu
        login através do
        <strong> ID Saúde</strong>.
      </p>
      <ThemeButton startIcon={<SendIcon />} onClick={handleClick}>
        Login com ID Saúde
      </ThemeButton>
    </div>
  );
};

LoginMessage.propTypes = {
  handleClick: PropTypes.instanceOf(Object).isRequired,
};

export default LoginMessage;
