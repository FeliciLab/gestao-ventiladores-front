import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

export default function BuscarEquipamento(props) {
  const [equipment] = useState(props.equipamento);
  console.log(equipment);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        1. Busca do Equipamento
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField
            disabled
            name="numero_serie_equipamento"
            id="numerioDeSerieEquipamento"
            label="Número de Serie do Equipamento"
            value={equipment.triagem.numero_de_serie}
            fullWidth
          />
        </Grid>
        <Grid item xs={3} sm={3}>
          <TextField
            disabled
            id="nomeDoEquipamento"
            name="nome_equipamento"
            label="Nome do Equipamento"
            value={equipment.triagem.tipo}
            fullWidth
          />
        </Grid>
        <Grid item xs={3} sm={3}>
          <TextField
            disabled
            id="marca"
            name="marca"
            label="Marca"
            value={equipment.triagem.marca}
            fullWidth
          />
        </Grid>
        <Grid item xs={3} sm={3}>
          <TextField
            disabled
            name="modelo"
            id="modelo"
            label="Modelo"
            value={equipment.triagem.modelo}
            fullWidth
          />
        </Grid>
        <Grid item xs={3} sm={3}>
          <TextField
            disabled
            id="numeroDeSerie"
            name="numero_serie"
            label="Número de Série"
            value={equipment.triagem.numero_de_serie}
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
