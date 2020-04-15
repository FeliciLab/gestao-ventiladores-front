import React, {useEffect, useState} from 'react';
import {Grid} from "@material-ui/core";
import CampoConteudo from "./CampoConteudo";


export default function DadosEquipamento (props) {
  useEffect(() => {
    setEquipamento(props.equipamento);
  }, [props.equipamento]);

  const [equipamento, setEquipamento] = useState({triagem: {}});
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
            texto={equipamento.triagem.numero_de_serie}
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
            texto={equipamento.triagem.nome_instituicao_origem}
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
            texto={equipamento.triagem.numero_do_patrimonio}
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
            texto={equipamento.triagem.municipio_origem}
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
            texto={equipamento.triagem.marca}
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
            texto={equipamento.triagem.tipo}
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
            texto={equipamento.triagem.modelo}
          ></CampoConteudo>
          <CampoConteudo
            titulo='Fabricante'
            texto={equipamento.triagem.fabricante}
          ></CampoConteudo>
        </div>
      </Grid>
    </Grid>
  );
}