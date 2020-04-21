import React from 'react';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const SelectControl = (props) => {
  const {
    label,
    name,
    action,
    defaultValue,
    menuItems
  } = props;

  const [value, setValue] = React.useState('');

  if (value === '' && defaultValue) {
    setValue(defaultValue);
  }

  function updateValue (event) {
    setValue(event.target.value)
    action(event)
  }

  return (
    <React.Fragment>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
          name={name}
          value={value}
          onChange={updateValue}
        >
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              value={item.value}
            >{item.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </React.Fragment>
  );
};


export default SelectControl;