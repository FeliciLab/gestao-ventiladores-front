import React from 'react';
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";

const ControlledInput = (props) => {
  React.useEffect(() => {
    setClean(props.clean);
  }, [props]);

  const {label, name, action, type} = props;
  const [data, setData] = React.useState('');
  const [clean, setClean] = React.useState(false);

  if (clean && data !== '') {
    setData('');
  }

  const updateParent = (event) => {
    setData(event.target.value);
    action(event);
  };

  return (
    <React.Fragment>
      <FormControl fullWidth>
        <InputLabel htmlFor="component-helper">{label}</InputLabel>
        <Input
          type={type || 'text'}
          id="component-simple"
          value={data}
          onChange={updateParent}
          name={name}
        />
      </FormControl>
    </React.Fragment>
  );
};

export default ControlledInput;