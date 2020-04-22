import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SaveIcon from "@material-ui/icons/Save";
import ThemeButton from "../_common/forms/ThemeButton";

export default function HeaderFormPage (props) {
  const {serviceOrderNumber, saveForm} = props;
  return (
    <Grid container justify={"space-between"} style={{marginTop: '3rem'}}>
      <Grid item xs={12} sm="auto">
        <Typography variant={"h5"} component={"h5"}>
          Cadastro de Diagnóstico e Demanda por Insumos
        </Typography>
        <Typography variant={"h6"} component={"h6"}>
          <strong>OS Nº: {serviceOrderNumber || ''}</strong>
        </Typography>
      </Grid>
      <Grid item xs={12} sm="auto">
        <ThemeButton
          onClick={saveForm}
          startIcon={<SaveIcon/>}
        >
          Salvar
        </ThemeButton>
      </Grid>
    </Grid>
  );
}