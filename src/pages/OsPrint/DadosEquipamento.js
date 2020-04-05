import React from 'react';
import {Grid} from "@material-ui/core";
import CampoConteudo from "./CampoConteudo";


export default function DadosEquipamento (props) {
  if (!props.equipamento) {
    return (<div></div>)
  }
  return (
    <Grid container>
      <Grid item xs={4}>
        <div className={'header-content'}>
          <CampoConteudo data={{label: 'Equipamento', text: 'Ventilador Mecânico'}}></CampoConteudo>
          <CampoConteudo data={{label: 'Tipo', text: props.equipamento.selecione_o_tipo_do_equipamento}}></CampoConteudo>
        </div>
      </Grid>
      <Grid item xs={8}>
        <div className={'header-content'}>
          <CampoConteudo data={{label: 'Número de série:', text: props.equipamento.informe_o_número_de_série}}></CampoConteudo>
        </div>
      </Grid>

      <Grid item xs={4}>
        <div className={'header-content'}>
          <CampoConteudo data={{label: 'Marca', text: props.equipamento.selecione_a_marca_do_equipamento}}></CampoConteudo>
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className={'header-content'}>
          <CampoConteudo data={{label: 'Modelo', text: props.equipamento.selecione_o_modelo_do_equipamento}}></CampoConteudo>
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className={'header-content'}>
          <CampoConteudo
            data={{label: 'Fabricante', text: props.equipamento.selecione_a_marca_do_equipamento}}></CampoConteudo>
        </div>
      </Grid>

      <Grid item xs={12}>
        <div className={'header-content'}>
          <CampoConteudo
            data={{label: 'Nº Patrimônio', text: props.equipamento.se_públicoinforme_o_número_do_patrimônio}}></CampoConteudo>
        </div>
      </Grid>
    </Grid>
  )
}