import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles(() => ({
  formCsv: {
    marginTop: '2rem'
  },
  formButton: {
    marginTop: '0.5rem'
  }
}));

const OsPrinter = (props) => {
  const classes = useStyle();

  const handleChange = (event) => {
    event.preventDefault();
    props.onMudarCsv(event.target.value);
  };

  const abrirDocumentoOs = (event) => {
    event.preventDefault();
    props.onAbrirDocumento(true);
  };

  return (
    <div className={classes.formCsv}>
      <Grid container>
        <Grid item xs={12}>
          <TextField id="url-csv" fullWidth label="URL do CSV" value={props.csvUrl} onChange={handleChange}/>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" disabled={props.toprint} className={classes.formButton} onClick={abrirDocumentoOs}>
            Carregar Ordem de Serviços
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default OsPrinter;
