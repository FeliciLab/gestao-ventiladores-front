import React, { useEffect } from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';


const RadioControl = (props) => {
  useEffect(() => {
    setClean(props.clean);
  }, [props]);

  const [clean, setClean] = React.useState(false);
  const [value, setValue] = React.useState('');
  const [other, setOther] = React.useState('');

  const {name, action, flexDirection, formLabel, items, hasOther} = props;

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
      return action(event, value, other)
    }
  };


  return (
    <React.Fragment>
      <FormControl component="fieldset">
        <FormLabel component="legend">{formLabel}</FormLabel>
        <RadioGroup
          style={{flexDirection: flexDirection || 'row'}}
          aria-label="tipo"
          name={name}
          value={value}
          onChange={updateParent}
        >
          {items.map((item, index) => (
            <FormControlLabel
              key={index}
              value={item.value}
              control={<Radio color={"default"}/>}
              label={item.label}
            />
          ))}
          {hasOther ? (<FormControlLabel
            value={'other'}
            control={<Radio color={"default"}/>}
            label={'Outros'}
          />) : (<span></span>)}
        </RadioGroup>
        {hasOther ? (
          <TextField
            name={name}
            value={other}
            onChange={updateParent}
          />
        ) : (<span></span>)}
      </FormControl>
    </React.Fragment>
  );
};

export function helperPropsItemsRadioControl (value, label) {
  return {value, label};
}

export default RadioControl;