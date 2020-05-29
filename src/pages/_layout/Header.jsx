import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
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
  currentLink: {
    borderBottom: '4px solid white',
    '& a': {
      opacity: 1,
    },
  },
  label: {
    display: 'flex',
    opacity: '0.5',
    '& span': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingRight: 5,
      textTransform: 'uppercase',
    },
  },
}));

const Header = ({ menuRoutes }) => {
  const classes = useStyles();

  const isCurrentLink = (item) => (window.location.pathname === item.path ? classes.currentLink : '');

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
              <Grid item key={item.path} className={isCurrentLink(item)}>
                <Link to={item.path} className={classes.label}>
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </Grid>
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
