import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import TooptipInfo from '../../_common/components/TooltipInfo';
import { randomIndex } from '../../../utils';


const AccessoriesEquipmentText = (props) => {
  const {
    equipmentId,
    formModel,
  } = props;

  const hasAccessorieInForm = formModel && formModel.acessorios;
  const hasAccessorieInEquip = hasAccessorieInForm
    && Object.prototype.hasOwnProperty.call(formModel.acessorios, equipmentId);

  if (!hasAccessorieInEquip) {
    return (
      <Grid container spacing={1} wrap="nowrap" alignItems="center">
        <Grid item xs="auto">
          <Typography>Não revisado</Typography>
        </Grid>
        <Grid item xs="auto">
          <TooptipInfo icon={<InfoIcon fontSize="small" />}>
            <Typography variant="subtitle1">
              Clique no botão azul ao lado para revisar, adicionar ou editar os acessórios desde
              equipamento que irá junto na
              entrega.
            </Typography>
          </TooptipInfo>
        </Grid>
      </Grid>
    );
  }

  const accessories = formModel.acessorios[equipmentId];

  return (
    <>
      {accessories.map((accessorie) => (
        <Typography key={randomIndex()}>{accessorie.descricao}</Typography>
      ))}
    </>
  );
};

AccessoriesEquipmentText.propTypes = {
  equipmentId: PropTypes.string.isRequired,
  formModel: PropTypes.instanceOf(Object).isRequired,
};

export default AccessoriesEquipmentText;
