import React from 'react';
import PropTypes from 'prop-types';
import orange from '@material-ui/core/colors/orange';
import SvgIcon from '@material-ui/core/SvgIcon';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';


const ThemeButton = (props) => {
  const {
    children,
    variant,
    onClick,
    startIcon,
    color,
    bgColor,
    hoverColor,
    borderColor,
    type,
    size,
  } = props;

  const ColorButton = withStyles(() => ({
    root: {
      borderRadius: 20,
      color: color && color !== '' ? color : 'white',
      backgroundColor: bgColor && bgColor !== '' ? bgColor : orange[600],
      border: variant === 'outlined' ? `solid 1 px ${borderColor}` : 'none',
      borderColor: variant === 'outlined' ? `${borderColor}` : 'none',
      '&:hover': {
        backgroundColor: hoverColor && hoverColor !== '' ? hoverColor : orange[800],
        color: color && color !== '' ? color : 'white',
      },
    },
  }))(Button);

  return (
    <ColorButton
      type={type}
      size={size}
      variant={variant}
      onClick={onClick}
      startIcon={startIcon}
    >
      {children}
    </ColorButton>
  );
};

ThemeButton.defaultProps = {
  onClick: () => console.log('No Action'),
  startIcon: <SvgIcon />,
  type: 'button',
  size: 'large',
  variant: 'contained',
  color: '',
  bgColor: '',
  hoverColor: '',
  borderColor: '',
};

ThemeButton.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.string,
  onClick: PropTypes.func,
  startIcon: PropTypes.instanceOf(Object),
  color: PropTypes.string,
  bgColor: PropTypes.string,
  hoverColor: PropTypes.string,
  borderColor: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
};

export default ThemeButton;
