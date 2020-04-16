import React, {useEffect} from 'react';
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

const RadioControl = (props) => {
  useEffect(() => {
    setClean(props.clean);
  }, [props]);

  const [clean, setClean] = React.useState(false);
  const [value, setValue] = React.useState('');

  const {name, action, flexDirection, formLabel, items} = props;

  if (clean && value !== '') {
    setValue('');
  }

  const updateParent = (event) => {
    setValue(event.target.value);
    action(event);
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
        </RadioGroup>
      </FormControl>
    </React.Fragment>
  );
};

export function helperPropsItemsRadioControl (value, label) {
  return {value, label};
}

export default RadioControl;