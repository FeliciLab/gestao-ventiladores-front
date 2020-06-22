import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Menu from '../Menu/Menu';
import MENU_ROUTES from '../Menu/MenuConfig';

const useStyles = makeStyles(() => ({
  header: {
    background: '#4CAF50',
  },
  container: {
    height: 190,
    marginTop: 50,
    paddingLeft: 10,
  },
  title: {
    textTransform: 'uppercase',
    fontSize: 24,
    lineHeight: 1.3,
    color: '#fff',
    fontWeight: 'bold',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <Container className={classes.container}>
        <h1 data-testid="title" className={classes.title}>
          {'central '}
          <br />
          {'de '}
          <br />
          {'ventiladores '}
        </h1>
      </Container>
      <Menu menuRoutes={MENU_ROUTES} />
    </header>
  );
};

export default Header;
