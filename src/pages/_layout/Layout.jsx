import React from 'react';
import PropTypes from 'prop-types';
import grey from '@material-ui/core/colors/grey';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Header from './Header';
import Footer from './Footer';


const useStyle = makeStyles(() => ({
  layout: {
    background: grey[100],
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '100vh',
    height: '100%',
  },
}));

const Layout = (props) => {
  const classes = useStyle();
  const { children } = props;
  return (
    <div className={classes.layout}>
      <Header />
      {children}
      <Footer />
    </div>

  );
};

Layout.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Layout;
