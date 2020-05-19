import React from 'react';
import ColorIconButton from '../forms/ColorIconButton';


const ActionButtonLayout = (props) => {
  const {item, menuOptions} = props;
  return <React.Fragment>
    {menuOptions.map((option, index) => (
        <ColorIconButton
          key={index}
          name={option.name}
          item={item}
          action={option.action}
          icon={option.icon}
        />
    ))}
  </React.Fragment>;
};

export default ActionButtonLayout;