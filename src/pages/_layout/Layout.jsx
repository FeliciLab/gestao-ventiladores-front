import React from 'react';
import PropTypes from 'prop-types';
import grey from '@material-ui/core/colors/grey';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Menu from '../../components/Menu/Menu';

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
      <Menu />
      {children}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Layout;
