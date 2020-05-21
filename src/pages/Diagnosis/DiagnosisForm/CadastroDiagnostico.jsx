import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import ErrorAlertText from '../../_common/alerts/ErrorAlertText';


const CadastroEquipamento = (props) => {
  const {
    errors,
    register,
    diagnosis,
    updateDiagnosis,
  } = props;

  const updateParent = (event) => {
    event.preventDefault();
    const doc = {};
    doc[event.target.name] = event.target.value;
    updateDiagnosis(doc);
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        1. Cadastro De Diagnóstico
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            inputRef={register({ required: true })}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={updateParent}
            value={diagnosis.resultado_tecnico}
            name="resultado_tecnico"
            multiline
            rows="6"
            id="resultadoDoDiagnosticoTecnico"
            label="Resultado do Diagnostico Técnico"
            fullWidth
          />
          <ErrorAlertText error={errors.resultado_tecnico} />
        </Grid>
        <Grid item xs={12}>
          <TextField
            InputLabelProps={{
              shrink: true,
            }}
            onChange={updateParent}
            value={diagnosis.demanda_servicos}
            name="demanda_servicos"
            multiline
            rows="6"
            id="demandaPorServicos"
            label="Demanda por Servicos"
            fullWidth
          />

        </Grid>
        <Grid item xs={12}>
          <TextField
            InputLabelProps={{
              shrink: true,
            }}
            onChange={updateParent}
            value={diagnosis.observacoes}
            name="observacoes"
            multiline
            rows="6"
            id="form-observacoes"
            label="Observações/Anotações Extras"
            fullWidth
          />
        </Grid>
      </Grid>
    </>
  );
};

CadastroEquipamento.propTypes = {
  errors: PropTypes.instanceOf(Object).isRequired,
  register: PropTypes.func.isRequired,
  diagnosis: PropTypes.instanceOf(Object).isRequired,
  updateDiagnosis: PropTypes.func.isRequired,
};

export default CadastroEquipamento;
