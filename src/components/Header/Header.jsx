import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { green } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
  appBar: {
    background: green[500],
  },
  toolbar: {
    height: 240,
    maxWidth: 1200,
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'start',
  },
  text: {
    paddingTop: 20,
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  appBarFooter: {
    background: '#2e7d32',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '100%',
    '& > div': {
      width: 1232,
      margin: 'auto',
      '& a': {
        color: 'white',
        textDecoration: 'none',
        fontSize: 18,
      },
    },
  },
  label: {
    display: 'flex',
    padding: 16,
    opacity: '0.5',
    boxSizing: 'border-box',
    '& span': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingRight: 5,
      textTransform: 'uppercase',
    },
  },
  activeLabel: {
    borderBottom: '4px solid white',
    opacity: 1,
    paddingBottom: 12,
  },
}));

const Header = ({ menuRoutes }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.text} noWrap>
            <p>CENTRAL</p>
            <p>DE</p>
            <p>VENTILADORES</p>
          </Typography>
        </Toolbar>

        <Container className={classes.appBarFooter}>
          <Grid container spacing={4}>
            {menuRoutes.map((item) => (
              <NavLink
                to={item.path}
                activeClassName={classes.activeLabel}
                className={classes.label}>
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            ))}
          </Grid>
        </Container>
      </AppBar>
    </>
  );
};

Header.propTypes = {
  menuRoutes: PropTypes.instanceOf(Array).isRequired,
};

export default Header;
