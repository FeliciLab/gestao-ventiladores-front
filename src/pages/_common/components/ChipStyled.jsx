import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { Chip } from '@material-ui/core';


const ChipStyled = (props) => {
  const {
    color,
    bgColor,
    hoverColor,
    deleteIcon,
    deleteIconColor,
    deleteIconBgColor,
    iconBgColor,
    iconColor,
    size,
    label,
    onDelete,
  } = props;

  const ColoredChipedStyled = withStyles((theme) => ({
    root: {
      color,
      backgroundColor: bgColor,
      '&:hover': {
        backgroundColor: hoverColor,
      },
    },
    icon: {
      color: iconColor && iconColor !== ''
        ? iconColor
        : theme.colorPrimary,
      backgroundColor: iconBgColor && iconBgColor !== ''
        ? iconBgColor
        : theme.colorPrimary,
    },
    iconSmall: {
      color: iconColor && iconColor !== ''
        ? iconColor
        : theme.colorPrimary,
      backgroundColor: iconBgColor && iconBgColor !== ''
        ? iconBgColor
        : theme.colorPrimary,
    },
    deleteIcon: {
      color: deleteIconColor && deleteIconColor !== ''
        ? deleteIconColor
        : theme.colorPrimary,
      backgroundColor: deleteIconBgColor && deleteIconBgColor !== ''
        ? deleteIconBgColor
        : theme.colorPrimary,
    },
  }))(Chip);

  return (
    <>
      <ColoredChipedStyled
        deleteIcon={deleteIcon}
        size={size}
        label={label}
        style={{ color: '#ddddd' }}
        onDelete={onDelete}
      />
    </>
  );
};

ChipStyled.defaultProps = {
  deleteIcon: (<></>),
  deleteIconColor: '',
  deleteIconBgColor: '',
  onDelete: () => false,
  iconBgColor: '',
  iconColor: '',
  hoverColor: '',
};

ChipStyled.propTypes = {
  color: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
  hoverColor: PropTypes.string,
  deleteIcon: PropTypes.instanceOf(Object),
  deleteIconColor: PropTypes.string,
  deleteIconBgColor: PropTypes.string,
  iconBgColor: PropTypes.string,
  iconColor: PropTypes.string,
};

export default ChipStyled;
