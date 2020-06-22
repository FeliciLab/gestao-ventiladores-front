import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  label: {
    display: 'flex',
    padding: 16,
    opacity: '0.5',
    boxSizing: 'border-box',
    color: 'white',
    textDecoration: 'none',
    fontSize: 18,
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

const MenuItem = ({ item }) => {
  const classes = useStyles();

  const requiredKeys = ['label', 'path', 'icon'];
  // eslint-disable-next-line no-prototype-builtins
  const propsMissed = requiredKeys.find((key) => !item.hasOwnProperty(key));
  if (propsMissed) {
    throw new Error(`MenuItem component require ${propsMissed} as props`);
  }
  const { label, path, icon } = item;

  return (
    <NavLink
      to={path}
      activeClassName={classes.activeLabel}
      // eslint-disable-next-line react/jsx-closing-bracket-location
      className={classes.label}>
      <span>{icon}</span>
      <span>{label}</span>
    </NavLink>
  );
};

MenuItem.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
};

export default MenuItem;
