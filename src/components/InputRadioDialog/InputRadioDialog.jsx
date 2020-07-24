import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import FormInputRadio from '../FormInputRadio/FormInputRadio';
import { useContext } from 'react';
import FormContext from '../../contexts/FormContext';


const InputRadioDialog = (props) => {
  const {
    action,
    name,
    label,
    hasOther,
    defaultValue,
    items,
  } = props;

  const { register } = useContext(FormContext);

  const [valueInput, setValueInput] = React.useState('');
  const [open, setOpen] = React.useState(false);

  function updateInput() {
    setValueInput(defaultValue);
  }

  useEffect(updateInput, [defaultValue]);

  function changeRadio(event) {
    setValueInput(event.target.value);
    setOpen(false);
  }

  function updateOpen(value) {
    setOpen(value);
  }

  function openDialog() {
    setOpen(false);
    setOpen(true);
  }

  return (
    <>
      <FormInputRadio
        openDialog={open}
        action={changeRadio}
        updateOpen={updateOpen}
        defaultValue={defaultValue}
        name={name}
        label={label}
        hasOther={hasOther}
        items={items}
        dialogTitle={label}
      />

      <FormControl
        fullWidth
        onClick={openDialog}
      >
        <InputLabel htmlFor="standard-adornment-amount">{label}</InputLabel>
        <Input
          inputRef={register}
          value={valueInput}
          name={name}
          endAdornment={<InputAdornment position="end"><ArrowDropDownIcon /></InputAdornment>}
          readOnly
        />
      </FormControl>
    </>
  );
};

InputRadioDialog.defaultProps = {
  name: '',
  label: '',
  hasOther: true,
  defaultValue: '',
};

InputRadioDialog.propTypes = {
  action: PropTypes.func.isRequired,
  items: PropTypes.instanceOf(Array).isRequired,
  name: PropTypes.string,
  label: PropTypes.string,
  hasOther: PropTypes.bool,
  defaultValue: PropTypes.string,
};

export default InputRadioDialog;
