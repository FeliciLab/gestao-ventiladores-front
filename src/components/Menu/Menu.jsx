import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import MenuItem from '../MenuItem/MenuItem';

const useStyles = makeStyles(() => ({
  mainMenu: {
    background: '#2e7d32',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
}));

const Menu = ({ menuRoutes }) => {
  const classes = useStyles();

  if (!menuRoutes) {
    throw new Error('Menu component require menuRoutes as props');
  }

  return (
    <nav className={classes.mainMenu}>
      <Container className={classes.container}>
        {menuRoutes.map((item) => (
          <MenuItem key={item.label.replace(' ', '-')} item={item} />
        ))}
      </Container>
    </nav>
  );
};

Menu.propTypes = { menuRoutes: PropTypes.instanceOf(Array).isRequired };

export default Menu;
