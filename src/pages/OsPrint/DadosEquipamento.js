import React from 'react';
import {Grid} from "@material-ui/core";
import CampoConteudo from "./CampoConteudo";


export default function DadosEquipamento (props) {

  if (!props.equipamento) {
    return (<div></div>)
  }
  return (
    <Grid container>

      <Grid item xs={6}>
        <div className={'header-content'}>
          <CampoConteudo titulo='Equipamento' texto='Ventilador Mecânico'></CampoConteudo>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div className={'header-content'}>
          <CampoConteudo titulo='Número de série:' texto={props.equipamento.informe_o_número_de_série}></CampoConteudo>
        </div>
      </Grid>

      <Grid item xs={6}>
        <div className={'header-content'}>
          <CampoConteudo titulo='Tipo' texto={props.equipamento.selecione_o_tipo_do_equipamento}></CampoConteudo>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div className={'header-content'}>
          <CampoConteudo
            titulo='Nº Patrimônio' texto={props.equipamento.se_públicoinforme_o_número_do_patrimônio}></CampoConteudo>
        </div>
      </Grid>

      <Grid item xs={4}>
        <div className={'header-content'}>
          <CampoConteudo titulo='Marca' texto={props.equipamento.selecione_a_marca_do_equipamento}></CampoConteudo>
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className={'header-content'}>
          <CampoConteudo titulo='Modelo' texto={props.equipamento.selecione_o_modelo_do_equipamento}></CampoConteudo>
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className={'header-content'}>
          <CampoConteudo
            titulo='Fabricante' texto={props.equipamento.selecione_a_marca_do_equipamento}></CampoConteudo>
        </div>
      </Grid>
    </Grid>
  )
}