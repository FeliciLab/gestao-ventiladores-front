import React from 'react';
import {Grid} from "@material-ui/core";
import CampoConteudo from "./CampoConteudo";


export default function DadosEquipamento (props) {
  const {equipamento} = props;

  if (!equipamento) {
    return (<div></div>);
  }

  return (
    <Grid
      container
      justify="center"
    >
      <Grid
        item
        xs={6}
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
        xs={6}
      >
        <div className={'header-content'}>
          <CampoConteudo
            titulo='Número de série:'
            texto={equipamento.numero_de_serie}
          ></CampoConteudo>
        </div>
      </Grid>

      <Grid
        item
        xs={6}
      >
        <div className={'header-content'}>
          <CampoConteudo
            titulo='Origem'
            texto={equipamento.nome_instituicao_origem}
          ></CampoConteudo>
        </div>
      </Grid>
      <Grid
        item
        xs={6}
      >
        <div className={'header-content'}>
          <CampoConteudo
            titulo='Nº Patrimônio'
            texto={equipamento.numero_do_patrimonio}
          ></CampoConteudo>
        </div>
      </Grid>

      <Grid
        item
        xs={6}
      >
        <div className={'header-content'}>
          <CampoConteudo
            titulo='Cidade de Origem'
            texto={equipamento.municipio_origem}
          ></CampoConteudo>
        </div>
      </Grid>
      <Grid
        item
        xs={6}
      >
        <div className={'header-content'}>
          <CampoConteudo
            titulo='Marca'
            texto={equipamento.marca}
          ></CampoConteudo>
        </div>
      </Grid>

      <Grid
        item
        xs={6}
      >
        <div className={'header-content'}>
          <CampoConteudo
            titulo='Tipo de equipamento'
            texto={equipamento.tipo}
          ></CampoConteudo>
        </div>
      </Grid>
      <Grid
        item
        xs={6}
      >
        <div className={'header-content model-fab'}>
          <CampoConteudo
            titulo='Modelo'
            texto={equipamento.modelo}
          ></CampoConteudo>
          <CampoConteudo
            titulo='Fabricante'
            texto={equipamento.fabricante}
          ></CampoConteudo>
        </div>
      </Grid>
    </Grid>
  );
}