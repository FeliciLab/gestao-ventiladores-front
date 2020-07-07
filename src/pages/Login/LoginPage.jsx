import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SidebarLayout from '../_layout/SidebarLayout';
import LoginMessage from './LoginMessage';
import LoginForm from './LoginForm';

const useStyles = makeStyles(() => ({
  loginContainer: {
    width: '446px',
    margin: 'auto',
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  const [currentStage, setCurrentStage] = useState('message');
  const stages = {
    message: (
      <LoginMessage
        handleClick={() => {
          setCurrentStage('form');
        }}
      />
    ),
    form: <LoginForm />,
  };
  return (
    <SidebarLayout>
      <div className={classes.loginContainer}>{stages[currentStage]}</div>
    </SidebarLayout>
  );
};

export default LoginPage;
