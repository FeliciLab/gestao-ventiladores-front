import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

export default function HeaderFormPage (props) {
  const {equipment, saveForm} = props;
  return (
    <Grid
      container
      justify={"space-between"}
      style={{marginTop: '3rem'}}
    >
      <Grid
        item
        xs={12}
        sm="auto"
      >
        <Typography
          variant={"h5"}
          component={"h5"}
        >
          Cadastro de Diagnóstico e Demanda por Insumos
        </Typography>
        <Typography
          variant={"h6"}
          component={"h6"}
        >
          <strong>OS Nº: {equipment.numero_ordem_servico}</strong>
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm="auto"
      >
        <Button
          onClick={() => saveForm}
          variant="contained"
          style={{
            backgroundColor: "#ff9800",
            borderRadius: 20,
            color: "#fff",
          }}
          startIcon={<SaveIcon/>}
        >
          Salvar
        </Button>
      </Grid>
    </Grid>
  );
}