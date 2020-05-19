import React from 'react';
import Grid from '@material-ui/core/Grid';
import getCities from '../../../services/cities';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';


export default function ToIntututeForm (props) {
  const municipios = getCities('ce');

  const {updateForm, formModel} = props;

  function updateToForm (event) {
    const doc = {};
    doc[event.target.name] = event.target.value;
    updateForm(doc);
  }

  return (<React.Fragment>
    <Grid container justify={'space-between'} spacing={3}>
      <Grid item xs={6}>
        <TextField
          onChange={updateToForm}
          label={'Unidade/Instituição de Destino'}
          value={formModel.instituicao_destino}
          name={"instituicao_destino"}
          fullWidth
          required
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          select
          label={"Município de Origem"}
          value={formModel.cidade_destino}
          name={"cidade_destino"}
          onChange={updateToForm}
          fullWidth
        >
          <MenuItem value={undefined}></MenuItem>
          {municipios.map((item, index) => (<MenuItem key={index} value={item}>{item}</MenuItem>))}
        </TextField>
      </Grid>

      <Grid item xs={6}>
        <TextField
          onChange={updateToForm}
          label={'CNPJ da Unidade/Instituição de Destino'}
          value={formModel.cnpj_destino}
          name={"cnpj_destino"}
          fullWidth
          required
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          onChange={updateToForm}
          label={'Endereço da Unidade/Instituição de Destino'}
          value={formModel.endereco_destino}
          name={"endereco_destino"}
          fullWidth
          required
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          onChange={updateToForm}
          label={'Nome do responsável legal'}
          value={formModel.nome_responsavel_destino}
          name={"nome_responsavel_destino"}
          fullWidth
          required
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          onChange={updateToForm}
          label={'Contato do responsável legal'}
          value={formModel.contato_responsavel_destino}
          name={"contato_responsavel_destino"}
          fullWidth
          required
        />
      </Grid>
    </Grid>
  </React.Fragment>);
}