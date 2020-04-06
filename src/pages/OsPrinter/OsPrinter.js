import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import googlePublishedWebCsvMapper from "../OsPrint/googlePublishedWebCsvMapper";
import React from 'react';
import {Redirect} from 'react-router-dom';

const OsPrinter = () => {
  const [csv, setName] = React.useState('');
  const [url, setUrl] = React.useState('/osprint?url=' + csv);
  const [toprint, setToprint] = React.useState(false);

  const handleChange = (event) => {
    setName(event.target.value);
    setUrl(`/osprint?url=${event.target.value}`)
    setToprint(true)
  };

  const abrirDocumentoOs = (e) => {
    e.preventDefault();
  };

  if (toprint) {
    return <Redirect to={url}/>
  }

  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <TextField id="url-csv" fullWidth label="URL do CSV" value={csv} onChange={handleChange}/>
        </Grid>
        <Grid item xs="auto">
          <Button variant="contained" disabled={!toprint || csv === ''} onClick={abrirDocumentoOs}>Gerar OS</Button>
        </Grid>
      </Grid>

    </Container>
  )
}

export default OsPrinter
