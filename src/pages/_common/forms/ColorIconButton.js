import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import withStyles from "@material-ui/core/styles/withStyles";
import orange from "@material-ui/core/colors/orange";

const ColorIconButton = (props) => {
  const {item, action, name} = props;
  const {color, bgColor, hoverColor, icon, size} = props.icon;

  const ColorIconButton = withStyles((theme) => ({
    root: {
      color: color || 'white',
      backgroundColor: bgColor || orange[500],
      '&:hover': {
        backgroundColor: hoverColor || orange[700],
      },
    },
  }))(IconButton);

  return (<React.Fragment>
    <ColorIconButton
      title={name}
      onClick={() => action(item)}
      size={size || 'small'}
    >
      {icon}
    </ColorIconButton>
  </React.Fragment>);
};

export function helperPropsColorIconButton (name, action, color, bgColor, hoverColor, icon, size) {
  return {
    name,
    action,
    icon: {
      color,
      bgColor,
      hoverColor,
      icon,
      size: size || 'small'
    }
  };
}

export default ColorIconButton;