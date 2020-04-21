import React, {useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

export default function CadastroEquipamento (props) {
  useEffect(() => {
    setDiagnosis(props.diagnosis);
  }, [props]);

  const {updateDiagnosis} = props;

  const [diagnosis, setDiagnosis] = useState(props.diagnosis);

  const updateParent = (event) => {
    event.preventDefault();
    const doc = {};
    doc[event.target.name] = event.target.value;
    updateDiagnosis(doc);
  };

  return (
    <React.Fragment>
      <Typography
        variant="h6"
        gutterBottom
      >
        1. Cadastro De Diagnóstico
      </Typography>

      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          xs={12}
          sm={12}
        >
          <TextField
            InputLabelProps={{
              shrink: true
            }}
            onChange={updateParent}
            defaultValue={diagnosis.resultado_tecnico}
            name="resultado_tecnico"
            multiline
            rows="6"
            id="resultadoDoDiagnosticoTecnico"
            label="Resultado do Diagnostico Técnico"
            fullWidth
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
        >
          <TextField
            InputLabelProps={{
              shrink: true
            }}
            onChange={updateParent}
            defaultValue={diagnosis.demanda_servicos}
            name="demanda_servicos"
            multiline
            rows="6"
            id="demandaPorServicos"
            label="Demanda por Servicos"
            fullWidth
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
        >
          <TextField
            InputLabelProps={{
              shrink: true
            }}
            multiline
            rows="6"
            id="demandaPorInsumos"
            onChange={updateParent}
            defaultValue={diagnosis.demanda_insumos}
            name="demanda_insumos"
            label="Demanda por Insumos"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
