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

  React.useEffect(() => {
    if (value === '' && defaultValue) {
      setValue(defaultValue);
    }
  }, [defaultValue, value]);

  return (
    <React.Fragment>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
          name={name}
          value={value}
          onChange={action}
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