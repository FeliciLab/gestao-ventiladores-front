import React from 'react';
import TextField from '@material-ui/core/TextField';


const ControlledInput = (props) => {
  React.useEffect(() => {
    setClean(props.clean);
  }, [props]);

  const {
    label,
    name,
    action,
    type,
    defaultValue,
    fullWidth
  } = props;

  const [data, setData] = React.useState('');
  const [clean, setClean] = React.useState(false);

  if (props.defaultValue && props.defaultValue !== '' && data === '') {
    setData(defaultValue)
  }

  if (clean && data !== '') {
    setData('');
  }

  const updateParent = (event) => {
    setData(event.target.value);
    action(event);
  };

  return (
    <React.Fragment>
      <TextField
        label={label}
        name={name}
        type={type || 'text'}
        value={data}
        onChange={updateParent}
        fullWidth={fullWidth || true}
      />
    </React.Fragment>
  );
};

export default ControlledInput;