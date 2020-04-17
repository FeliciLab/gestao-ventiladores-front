import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import withStyles from "@material-ui/core/styles/withStyles";

const ColorIconButton = (props) => {
  const {item, action, name} = props;
  const {color, bgColor, hoverColor, icon, size} = props.icon;

  const ColorIconButton = withStyles((theme) => ({
    root: {
      color: color,
      backgroundColor: bgColor,
      '&:hover': {
        backgroundColor: hoverColor,
      },
    },
  }))(IconButton);

  return (<React.Fragment>
    <ColorIconButton title={name} onClick={() => action(item)} size={size || 'small'}>
      {icon}
    </ColorIconButton>
  </React.Fragment>);
};

export function helperPropsColorIconButton (name, action, color, bgColor, hoverColor, icon) {
  return {name, action, icon: {color, bgColor, hoverColor, icon}};
}

export default ColorIconButton;