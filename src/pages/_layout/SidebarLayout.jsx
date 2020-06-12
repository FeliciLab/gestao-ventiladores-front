import React from 'react';
import PropTypes from 'prop-types';
import grey from '@material-ui/core/colors/grey';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Sidebar from './Sidebar';

const useStyle = makeStyles(() => ({
  layout: {
    background: grey[100],
    display: 'flex',
    justifyContent: 'space-between',
    minHeight: '100vh',
    height: '100%',
  },
  content: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
}));

const SidebarLayout = ({ children }) => {
  const classes = useStyle();
  return (
    <div className={classes.layout}>
      <Sidebar />
      <main className={classes.content}>{children}</main>
    </div>
  );
};

SidebarLayout.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default SidebarLayout;
