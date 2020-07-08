import React, {
  useContext,
  useState,
} from 'react';
import {
  Grid,
  Input,
  makeStyles,
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import ThemeButton from '../_common/forms/ThemeButton';
import AuthContext from '../../contexts/AuthContext';

const useStyles = makeStyles(() => ({
  container: {
    height: '145px',
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
  const { signIn } = useContext(AuthContext);

  const submitPassword = (event) => {
    event.preventDefault();
    signIn(userInfo.password);
    setUserInfo({ password: '' });
    console.log(sessionStorage);
  };

  return (
    <form onSubmit={(e) => submitPassword(e)}>
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="flex-start"
        className={container}>
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
        <ThemeButton type="submit" onClick={() => {}} startIcon={<SendIcon />}>
          Entrar
        </ThemeButton>
      </Grid>
    </form>
  );
};

export default LoginForm;
