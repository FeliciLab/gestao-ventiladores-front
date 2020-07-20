import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
} from '@material-ui/core';
import moment from 'moment-timezone';
import 'moment/locale/pt-br';

const ScreeningEquipment = (props) => {
  const { equipment } = props;
  moment.locale('pt-br');

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6">
            <strong>Equipamento:</strong>
          </Typography>
        </Grid>

        <Grid item xs={3}>
          <Typography variant="body1">
            <strong>Criado em:</strong>
          </Typography>
          <Typography variant="body1">
            {moment(equipment.created_at)
              .tz('America/Fortaleza')
              .format('DD/MM/YYYY')}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="body1">
            <strong>Última atualização:</strong>
          </Typography>
          <Typography variant="body1">
            {moment(equipment.updated_at)
              .tz('America/Fortaleza')
              .format('DD/MM/YYYY')}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="body1">
            <strong>Número de Série:</strong>
          </Typography>
          <Typography variant="body1">{equipment.numero_de_serie}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="body1">
            <strong>Número do Patrimônio:</strong>
          </Typography>
          <Typography variant="body1">
            {equipment.numero_do_patrimonio}
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <Typography variant="body1">
            <strong>Tipo:</strong>
          </Typography>
          <Typography variant="body1">{equipment.tipo}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body1">
            <strong>Marca:</strong>
          </Typography>
          <Typography variant="body1">{equipment.marca}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body1">
            <strong>Modelo:</strong>
          </Typography>
          <Typography variant="body1">{equipment.modelo}</Typography>
        </Grid>

        <Grid item xs={4}>
          <Typography variant="body1">
            <strong>Fabricante:</strong>
          </Typography>
          <Typography variant="body1">{equipment.fabricante}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body1">
            <strong>Município de Origem:</strong>
          </Typography>
          <Typography variant="body1">{equipment.municipio_origem}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body1">
            <strong>Insituição de Origem:</strong>
          </Typography>
          <Typography variant="body1">
            {equipment.nome_instituicao_origem}
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <Typography variant="body1">
            <strong>Tipo da instituição de Origem:</strong>
          </Typography>
          <Typography variant="body1">
            {equipment.tipo_instituicao_origem}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body1">
            <strong>Nome do Responsável:</strong>
          </Typography>
          <Typography variant="body1">{equipment.nome_responsavel}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body1">
            <strong>Contato do Responsável:</strong>
          </Typography>
          <Typography variant="body1">
            {equipment.contato_responsavel}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

ScreeningEquipment.propTypes = {
  equipment: PropTypes.shape({
    created_at: PropTypes.oneOfType([
      PropTypes.instanceOf(Object),
      PropTypes.string,
    ]),
    updated_at: PropTypes.oneOfType([
      PropTypes.instanceOf(Object),
      PropTypes.string,
    ]),
    numero_de_serie: PropTypes.string,
    numero_do_patrimonio: PropTypes.string,
    tipo: PropTypes.string,
    marca: PropTypes.string,
    modelo: PropTypes.string,
    fabricante: PropTypes.string,
    municipio_origem: PropTypes.string,
    nome_instituicao_origem: PropTypes.string,
    tipo_instituicao_origem: PropTypes.string,
    nome_responsavel: PropTypes.string,
    contato_responsavel: PropTypes.string,
  }).isRequired,
};

export default ScreeningEquipment;
