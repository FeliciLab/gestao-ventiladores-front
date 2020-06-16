import React from 'react';
import PropTypes from 'prop-types';
import InputRadioDialog from '../../../components/InputRadioDialog/InputRadioDialog';


const MergeItemField = (props) => {
  const {
    label,
    name,
    index,
    choices,
    setModel,
    value,
  } = props;

  const handleUpdateField = (value) => {
    setModel();
  };

  return (
    <InputRadioDialog
      action={handleUpdateField}
      items={choices}
      name={name}
      label={label}
      hasOthe={true}
      defaultValue={value}
    />
  );
};

MergeItemField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  choices: PropTypes.instanceOf(Array).isRequired,
  setModel: PropTypes.func.isRequired,
  model: PropTypes.instanceOf(Object).isRequired,
};

export default MergeItemField;
