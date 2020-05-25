import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import withStyles from '@material-ui/core/styles/withStyles';
import orange from '@material-ui/core/colors/orange';


const ColorIconButton = (props) => {
  const {
    item,
    action,
    name,
    icon,
    disabled,
  } = props;

  const ColoredIconButton = withStyles(() => ({
    root: {
      color: icon.color || 'white',
      backgroundColor: icon.bgColor || orange[500],
      '&:hover': {
        backgroundColor: icon.hoverColor || orange[700],
      },
    },
  }))(IconButton);

  return (
    <>
      <ColoredIconButton
        disabled={disabled}
        title={name}
        onClick={() => action(item)}
        size={icon.size || 'small'}
      >
        {icon.icon}
      </ColoredIconButton>
    </>
  );
};

export function helperPropsColorIconButton(name, action, color, bgColor, hoverColor, icon, size) {
  return {
    name,
    action,
    icon: {
      color,
      bgColor,
      hoverColor,
      icon,
      size: size || 'small',
    },
  };
}

ColorIconButton.defaultProps = {
  disabled: false,
};

ColorIconButton.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
  action: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.instanceOf(Object).isRequired,
  disabled: PropTypes.bool,
};

export default ColorIconButton;
