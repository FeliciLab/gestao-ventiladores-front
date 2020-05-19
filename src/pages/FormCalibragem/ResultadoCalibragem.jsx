import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';


export default function ResultadoCalibragem(props) {
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
  });

  const handleChange = (event) => {
    setState({...state, [event.target.name]: event.target.checked});
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        2. Resultado da Calibragem
      </Typography>

      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
          />
        }
        label="sim"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
          />
        }
        label="nao"
      />
    </React.Fragment>
  );
}
