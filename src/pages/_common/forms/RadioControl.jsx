import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';


const RadioControl = (props) => {
  const [value, setValue] = useState('');
  const [other, setOther] = useState('');

  const {
    name,
    action,
    flexDirection,
    formLabel,
    items,
    hasOther,
    clean,
  } = props;

  if (clean && value !== '') {
    setValue('');
    setOther('');
  }

  const updateParent = (event) => {
    if (value !== 'other' && event.target.value === 'other') {
      setValue(event.target.value);
    }

    if (event.target.value !== 'other' && value !== 'other') {
      setValue(event.target.value);
      return action(event, value, other);
    }

    if (event.target.value !== 'other') {
      setOther(event.target.value);
      return action(event, value, other);
    }

    return false;
  };

  return (
    <>
      <FormControl component="fieldset">
        <FormLabel component="legend">{formLabel}</FormLabel>
        <RadioGroup
          style={{ flexDirection: flexDirection || 'row' }}
          aria-label="tipo"
          name={name}
          value={value}
          onChange={updateParent}
        >
          {items.map((item) => (
            <FormControlLabel
              key={item.value}
              value={item.value}
              control={<Radio color="default" />}
              label={item.label}
            />
          ))}
          {hasOther
            ? (
              <FormControlLabel
                value="other"
                control={<Radio color="default" />}
                label="Outros"
              />
            )
            : (<></>)}
        </RadioGroup>
        {hasOther
          ? (
            <TextField
              name={name}
              value={other}
              onChange={updateParent}
            />
          )
          : (<></>)}
      </FormControl>
    </>
  );
};

export function helperPropsItemsRadioControl(value, label) {
  return { value, label };
}

RadioControl.defaultProps = {
  name: '',
  flexDirection: 'row',
  formLabel: '',
  items: [],
  hasOther: true,
  clean: false,
};

RadioControl.propTypes = {
  action: PropTypes.func.isRequired,
  name: PropTypes.string,
  flexDirection: PropTypes.string,
  formLabel: PropTypes.string,
  items: PropTypes.instanceOf(Array),
  hasOther: PropTypes.bool,
  clean: PropTypes.bool,
};

export default RadioControl;
