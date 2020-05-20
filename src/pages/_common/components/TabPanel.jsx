import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';


const TabPanel = (props) => {
  const {
    children,
    value,
    index,
  } = props;

  return (
    <div hidden={value !== index}>
      <Grid container>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default TabPanel;
