import React from 'react';
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
    onDelete
  } = props;

  const ColoredChipedStyled = withStyles((theme) => ({
    root: {
      color: color,
      backgroundColor: bgColor,
      '&:hover': {
        backgroundColor: hoverColor,
      },
    },
    icon: {
      color: iconColor || theme.colorPrimary,
      backgroundColor: iconBgColor || theme.colorPrimary
    },
    iconSmall: {
      color: iconColor || theme.colorPrimary,
      backgroundColor: iconBgColor || theme.colorPrimary
    },
    deleteIcon: {
      color: deleteIconColor || theme.colorPrimary,
      backgroundColor : deleteIconBgColor || theme.colorPrimary
    }
  }))(Chip);

  return (<React.Fragment>
    <ColoredChipedStyled
      deleteIcon={deleteIcon}
      size={size}
      label={label}
      style={{color: "#ddddd"}}
      onDelete={onDelete}
    />
  </React.Fragment>);
};

export default ChipStyled;