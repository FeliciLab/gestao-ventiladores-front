import React from 'react';
import orange from "@material-ui/core/colors/orange";
import SvgIcon from "@material-ui/core/SvgIcon";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";


const ThemeButton = (props) => {
  const {
    children,
    variant,
    onClick,
    startIcon,
    color,
    bgColor,
    hoverColor,
    type,
    size
  } = props;

  const ColorButton = withStyles((theme) => ({
    root: {
      borderRadius: 20,
      color: variant === 'outlined' ? bgColor || 'black' : color || "white",
      backgroundColor: variant === 'outlined' ? 'white' : bgColor || orange[600],
      border: variant === 'outlined' ? `solid 1 px ${bgColor}` : 'none',
      borderColor: variant === 'outlined' ? `${bgColor}` : 'none',
      '&:hover': {
        backgroundColor: variant === 'outlined' ? 'white' : hoverColor || orange[800],
        color: variant === 'outlined' ? bgColor || 'black' : color || "white"
      },
    },
  }))(Button);

  return <ColorButton
    type={type || 'button'}
    size={size || "large"}
    variant={variant || "contained"}
    onClick={onClick}
    startIcon={startIcon}
  > {children} </ColorButton>;
};

ThemeButton.defaultProps = {
  onClick: () => console.log('No Action'),
  startIcon: <SvgIcon/>
};

export default ThemeButton;