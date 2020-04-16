import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

export default function DadosResponsavel(props) {
  const {update} = props;

  const updateParent = (event) => {
    event.preventDefault();
    const doc = {};
    doc[event.target.name] = event.target.value;
    update(doc);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        3. Dados do Responsável
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={6} sm={6}>
          <TextField name="nome" id="nome" label="Nome" required fullWidth />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            onChange={updateParent}
            id="contato"
            name="contato"
            label="Contato"
            required
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
