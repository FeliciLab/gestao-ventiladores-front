import React from 'react';
import PropTypes from 'prop-types';
import grey from '@material-ui/core/colors/grey';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import AlertPopUp from '../../components/AlertPopUp/AlertPopUp';
import Loading from '../../components/Loading/Loading';

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

export const AlertContext = React.createContext({});

const Layout = (props) => {
  const classes = useStyle();
  const { children, ...opt } = props;
  const theme = useTheme();

  return (
    <div className={classes.layout} {...opt}>
      <Header />
      <div style={{ paddingBottom: theme.spacing(5) }}>{children}</div>
      <Footer />
      <AlertPopUp />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Layout;
