import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DialogModelsEquipments from '../../Screening/ScreeningForm/DialogModelsEquipment';
import { arrayToDictionary } from '../../../utils';

const InputRadioDialog = (props) => {
  const { action, name, label, hasOther, defaultValue, items } = props;

  const [valueInput, setValueInput] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const itemsDictionary = items.reduce(function (map, obj) {
    map[obj.value] = obj;
    return map;
  }, {});

  function updateInput() {
    setValueInput(defaultValue);
  }

  useEffect(updateInput, [defaultValue]);

  function changeRadio(event) {
    action(event);
    // console.log(event.target.value, itemsDictionary);
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
      <DialogModelsEquipments
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

      <FormControl fullWidth onClick={openDialog}>
        <InputLabel htmlFor="standard-adornment-amount">{label}</InputLabel>
        <Input
          value={
            itemsDictionary[valueInput]
              ? itemsDictionary[valueInput].label
              : valueInput
          }
          // value={valueInput}
          endAdornment={
            <InputAdornment position="end">
              <ArrowDropDownIcon />
            </InputAdornment>
          }
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
