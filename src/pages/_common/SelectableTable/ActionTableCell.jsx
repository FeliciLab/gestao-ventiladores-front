import React from 'react';
import PropTypes from 'prop-types';
import ColorIconButton from '../forms/ColorIconButton';

const ActionTableCell = (props) => {
  const { actions, isChecked, item } = props;
  if (!Array.isArray()) {
    return { actions };
  }

  return (
    <>
      {actions.map((action) => (
        <ColorIconButton
          key={Math.round(Math.random() * 100000)}
          disabled={isChecked}
          item={item}
          action={() => action.handleEvent(item)}
          name={action.name}
          bgColor={action.bgColor}
          hoverColor={action.hoverColor}
          icon={action.icon}
        />
      ))}
    </>
  );
};

ActionTableCell.propTypes = {
  actions: PropTypes.oneOfType([
    PropTypes.instanceOf(Object),
    PropTypes.instanceOf(Array),
  ]).isRequired,
  isChecked: PropTypes.bool.isRequired,
  item: PropTypes.instanceOf(Object).isRequired,
};

export default ActionTableCell;
