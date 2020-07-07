import React from 'react';
import PropTypes from 'prop-types';
import grey from '@material-ui/core/colors/grey';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {
  Container,
  Grid,
} from '@material-ui/core';
import Sidebar from './Sidebar';

const useStyle = makeStyles(() => ({
  layout: {
    background: grey[100],
  },
  content: {
    width: 'calc(100% - 520px)',
  },
}));

const SidebarLayout = ({ children }) => {
  const { layout, content } = useStyle();
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
      className={layout}
    >
      <Grid item>
        <Sidebar />
      </Grid>
      <Grid item className={content}>
        <Container>{children}</Container>
      </Grid>
    </Grid>
  );
};

SidebarLayout.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default SidebarLayout;
