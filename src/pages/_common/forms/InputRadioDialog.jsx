import React, { useEffect } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DialogModelsEquipments from '../../Screening/ScreeningForm/DialogModelsEquipment';


const InputRadioDialog = (props) => {
  const {action, name, label, hasOther, defaultValue, items} = props;

  const [valueInput, setValueInput] = React.useState('');
  const [open, setOpen] = React.useState(false);

  useEffect(updateInput, [defaultValue]);

  function updateInput () {
    setValueInput(defaultValue);
  }

  function changeRadio (event) {
    action(event);
    setValueInput(event.target.value);
    setOpen(false);
  }

  function updateOpen (value) {
    setOpen(value);
  }

  function openDialog () {
    setOpen(false);
    setOpen(true);
  }

  return (<React.Fragment>
    <DialogModelsEquipments
      open={open}
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
        value={valueInput}
        endAdornment={<InputAdornment position="end"><ArrowDropDownIcon/></InputAdornment>}
        readOnly
      />
    </FormControl>
  </React.Fragment>);
};

export default InputRadioDialog;
