import React, {useState} from 'react';
import {Grid} from "@material-ui/core";
import CampoConteudo from "./CampoConteudo";


export default function DadosEquipamento (props) {
  if (!props.equipamento) {
    return (<div></div>);
  }

  return (
    <Grid
      container
      justify="center"
    >
      <Grid
        item
        xs={5}
      >
        <div className={'header-content'}>
          <CampoConteudo
            titulo='Equipamento'
            texto='Ventilador Mecânico'
          ></CampoConteudo>
        </div>
      </Grid>
      <Grid
        item
        xs={5}
      >
        <div className={'header-content'}>
          <CampoConteudo
            titulo='Número de série:'
            texto={props.equipamento.numero_de_serie}
          ></CampoConteudo>
        </div>
      </Grid>

      <Grid
        item
        xs={5}
      >
        <div className={'header-content'}>
          <CampoConteudo
            titulo='Tipo'
            texto={props.equipamento.triagem.tipo}
          ></CampoConteudo>
        </div>
      </Grid>
      <Grid
        item
        xs={5}
      >
        <div className={'header-content'}>
          <CampoConteudo
            titulo='Nº Patrimônio'
            texto={props.equipamento.triagem.numero_do_patrimonio}
          ></CampoConteudo>
        </div>
      </Grid>

      <Grid
        item
        xs={5}
      >
        <div className={'header-content'}>
          <CampoConteudo
            titulo='Marca'
            texto={props.equipamento.triagem.marca}
          ></CampoConteudo>
        </div>
      </Grid>
      <Grid
        item
        xs={5}
      >
        <div className={'header-content model-fab'}>
          <CampoConteudo
            titulo='Fabricante'
            texto={props.equipamento.triagem.fabricante}
          ></CampoConteudo>
          <CampoConteudo
            titulo='Modelo'
            texto={props.equipamento.triagem.modelo}
          ></CampoConteudo>
        </div>
      </Grid>
    </Grid>
  );
}