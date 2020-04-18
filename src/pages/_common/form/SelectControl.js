import React from 'react';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const SelectControl = (props) => {
  const {label, name, action, defaultValue, menuItems} = props;
  return (
    <React.Fragment>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
          name={name}
          defaultValue={defaultValue}
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