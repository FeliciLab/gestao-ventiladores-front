import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Input, makeStyles } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import ThemeButton from '../_common/forms/ThemeButton';

const useStyles = makeStyles(() => ({
  container: {
    height: '145px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  placeholder: {
    fontSize: '1rem',
    lineHeight: '1.5rem',
  },
  loginTitle: {
    fontSize: '1.3rem',
  },
}));

const LoginForm = () => {
  const { container, placeholder, loginTitle } = useStyles();
  const [userInfo, setUserInfo] = useState({ password: '' });
  const history = useHistory();

  const submitPassword = (event) => {
    event.preventDefault();
    if (userInfo.password === 'centralsalvavidas') {
      sessionStorage.setItem('isUserLogged', true);
      history.push('/');
    }
    setUserInfo({ password: '' });
  };

  return (
    <form onSubmit={(e) => submitPassword(e)} className={container}>
      <h2 className={loginTitle}>Fazer login</h2>
      <Input
        autoFocus
        required
        type="password"
        placeholder="Código de acesso"
        className={placeholder}
        value={userInfo.password}
        onChange={(e) => {
          setUserInfo({ password: e.target.value });
        }}
        fullWidth
      />
      <ThemeButton type="submit" startIcon={<SendIcon />}>
        Entrar
      </ThemeButton>
    </form>
  );
};

export default LoginForm;
