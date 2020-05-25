import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';


const PercentChip = (props) => {
  const {
    percent,
    bgColor,
    color,
  } = props;

  const ColorChip = withStyles(() => ({
    root: {
      color,
      backgroundColor: bgColor,
      borderRadius: '20px',
      fontSize: 20,
    },
  }))(Chip);

  return <ColorChip label={`${percent}%`} />;
};

PercentChip.propTypes = {
  percent: PropTypes.number.isRequired,
  bgColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default PercentChip;
