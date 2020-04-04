import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import googlePublishedWebCsvMapper from "../OsPrint/googlePublishedWebCsvMapper";
import React from 'react';
import {Redirect} from 'react-router-dom';

const OsPrinter = () => {
  const testeUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT-AFOaCCtdSpb9RD8KYamFRMAWx3HBj0bj2J21uunmVD1x_OngnZOMNFXwUCFLcCjLJUGRZlDh9-iD/pub?output=csv';

  const [csv, setName] = React.useState(testeUrl);
  const [url, setUrl] = React.useState('/osprint?url=' + testeUrl);
  const [toprint, setToprint] = React.useState(false);

  const handleChange = (event) => {
    setName(event.target.value);
    setUrl(`/osprint?url=${csv}`)
  };

  const abrirDocumentoOs = (e) => {
    e.preventDefault();
    setToprint(true)
  };

  if (toprint === true) {
    return <Redirect to={url}/>
  }

  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <TextField id="url-csv" fullWidth label="URL do CSV" value={csv} onChange={handleChange}/>
        </Grid>
        <Grid item xs="auto">
          <Button variant="contained" onClick={abrirDocumentoOs}>Gerar OS</Button>
        </Grid>
      </Grid>

    </Container>
  )
}

export default OsPrinter
