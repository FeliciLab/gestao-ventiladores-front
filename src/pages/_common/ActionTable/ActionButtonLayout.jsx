import React from 'react';
import PropTypes from 'prop-types';
import ColorIconButton from '../forms/ColorIconButton';


const ActionButtonLayout = (props) => {
  const {
    item,
    menuOptions,
  } = props;

  return (
    <>
      {menuOptions.map((option) => (
        <ColorIconButton
          key={option.name}
          name={option.name}
          item={item}
          action={option.action}
          icon={option.icon}
        />
      ))}
    </>
  );
};

ActionButtonLayout.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
  menuOptions: PropTypes.instanceOf(Array).isRequired,
};

export default ActionButtonLayout;
