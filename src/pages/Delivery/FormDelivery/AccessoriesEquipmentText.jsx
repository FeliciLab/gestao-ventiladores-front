import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import TooptipInfo from '../../_common/components/TooltipInfo';
import InfoIcon from '@material-ui/icons/Info';


const AccessoriesEquipmentText = (props) => {
  const {
    equipmentId,
    formModel
  } = props;

  const hasAccessorieInForm = formModel && formModel.acessorios;
  const hasAccessorieInEquip = hasAccessorieInForm && formModel.acessorios.hasOwnProperty(equipmentId);

  if (!hasAccessorieInEquip) {
    return <Grid container spacing={1} wrap={'nowrap'} alignItems={'center'}>
      <Grid item xs={'auto'}>
        <Typography>Não revisado</Typography>
      </Grid>
      <Grid item xs={'auto'}>
        <TooptipInfo icon={<InfoIcon fontSize={'small'}/>}>
          <Typography variant={'subtitle1'}>
            Clique no botão azul ao lado para revisar, adicionar ou editar os acessórios desde equipamento que irá junto na
            entrega.
          </Typography>
        </TooptipInfo>
      </Grid>
    </Grid>;
  }

  const accessories = formModel.acessorios[equipmentId];

  return <React.Fragment>
    {accessories.map((accessorie, index) => {
      return (<Typography key={index}>{accessorie.descricao}</Typography>);
    })}
  </React.Fragment>;
};

export default AccessoriesEquipmentText;