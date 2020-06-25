import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import InputRadioDialog from '../../../components/InputRadioDialog/InputRadioDialog';

const FormFieldMerge = (props) => {
  const { choices, index, handleSetModel, value, name, label } = props;

  if (choices.length === 0) {
    return (
      <TextField
        label={label}
        name={name}
        value={value}
        onChange={(event) => handleSetModel(event, index)}
        fullWidth
      />
    );
  }

  return (
    <InputRadioDialog
      action={(event) => handleSetModel(event, index)}
      items={choices}
      name={name}
      label={label}
      defaultValue={value}
      hasOther
    />
  );
};

FormFieldMerge.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  choices: PropTypes.instanceOf(Array).isRequired,
  index: PropTypes.number.isRequired,
  handleSetModel: PropTypes.func.isRequired,
};

export default FormFieldMerge;
