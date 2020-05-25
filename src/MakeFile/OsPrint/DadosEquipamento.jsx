import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import CampoConteudo from './CampoConteudo';


const DadosEquipamento = (props) => {
  const { equipamento } = props;

  if (!equipamento) {
    return (<></>);
  }

  return (
    <Grid container justify="center">
      <Grid item xs={6}>
        <div className="header-content">
          <CampoConteudo
            titulo="Equipamento"
            texto="Ventilador Mecânico"
          />
        </div>
      </Grid>
      <Grid item xs={6}>
        <div className="header-content">
          <CampoConteudo
            titulo="Número de série:"
            texto={equipamento.numero_de_serie}
          />
        </div>
      </Grid>

      <Grid item xs={6}>
        <div className="header-content">
          <CampoConteudo
            titulo="Origem"
            texto={equipamento.nome_instituicao_origem}
          />
        </div>
      </Grid>
      <Grid item xs={6}>
        <div className="header-content">
          <CampoConteudo
            titulo="Nº Patrimônio"
            texto={equipamento.numero_do_patrimonio}
          />
        </div>
      </Grid>

      <Grid item xs={6}>
        <div className="header-content">
          <CampoConteudo
            titulo="Cidade de Origem"
            texto={equipamento.municipio_origem}
          />
        </div>
      </Grid>
      <Grid item xs={6}>
        <div className="header-content">
          <CampoConteudo
            titulo="Marca"
            texto={equipamento.marca}
          />
        </div>
      </Grid>

      <Grid item xs={6}>
        <div className="header-content">
          <CampoConteudo
            titulo="Tipo de equipamento"
            texto={equipamento.tipo}
          />
        </div>
      </Grid>
      <Grid item xs={6}>
        <div className="header-content model-fab">
          <CampoConteudo
            titulo="Modelo"
            texto={equipamento.modelo}
          />
          <CampoConteudo
            titulo="Fabricante"
            texto={equipamento.fabricante}
          />
        </div>
      </Grid>
    </Grid>
  );
};

DadosEquipamento.defaultProps = {
  equipamento: {},
};

DadosEquipamento.propTypes = {
  equipamento: PropTypes.shape({
    numero_de_serie: PropTypes.string,
    nome_instituicao_origem: PropTypes.string,
    numero_do_patrimonio: PropTypes.string,
    municipio_origem: PropTypes.string,
    marca: PropTypes.string,
    tipo: PropTypes.string,
    modelo: PropTypes.string,
    fabricante: PropTypes.string,
  }),
};

export default DadosEquipamento;
