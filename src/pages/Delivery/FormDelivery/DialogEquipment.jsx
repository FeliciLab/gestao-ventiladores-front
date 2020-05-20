import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SaveIcon from '@material-ui/icons/Save';
import orange from '@material-ui/core/colors/orange';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import ThemeButton from '../../_common/forms/ThemeButton';
import equipmentTypes from '../../../models/equipmentTypes';
import InputRadioDialog from '../../_common/forms/InputRadioDialog';
import { manufacturersEquipments, modelsEquipment } from '../../../models/manufacturers';
import typeInstitute from '../../../models/typeInstitute';
import FullDialog from '../../_common/components/FullDialog';
import getCities from '../../../services/cities';
import { randomIndex } from '../../../utils';


const useStyle = makeStyles((theme) => ({
  containerContent: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

const DialogEquipment = (props) => {
  const cities = getCities('CE');
  const classes = useStyle();
  const {
    open,
    handleClose,
    equipment,
    indexEquipment,
    updateEquipmentForm,
  } = props;

  const [formEquipment, setFormEquipment] = useState({});

  useEffect(() => {
    if (!equipment) return;
    setFormEquipment({ ...equipment });
  }, [equipment]);

  function handleUpdateAccessories(event) {
    const doc = {};
    doc[event.target.name] = event.target.value;
    setFormEquipment({ ...formEquipment, ...doc });
  }

  function saveEquipment() {
    updateEquipmentForm(formEquipment, indexEquipment);
  }

  return (
    <>
      <FullDialog
        open={open}
        handleClose={handleClose}
        title="Formulário de Edição do Equipamento"
        actionChildren={(
          <ThemeButton
            startIcon={<SaveIcon />}
            onClick={saveEquipment}
            name="Salvar"
            color={orange[600]}
            bgColor="#FFF"
            hoverColor={orange[50]}
          >
            Salvar
          </ThemeButton>
        )}
      >
        <Container className={classes.containerContent}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Grid item xs={12}>
                <Typography variant="h5">Observações:</Typography>
              </Grid>
              <Grid item xs={12}>
                <ul>
                  <li>
                    A dados do equipamento abaixo foram inicialmente baseados nos campos
                    cadastrados
                    no momento da triagem.
                  </li>
                  <li>
                    Qualquer alteração nos campos abaixo
                    <strong>atualizarão o equipamento no sistema</strong>
                    da Central de Ventilados.
                  </li>
                </ul>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="Nome do Equipamento"
                name="nome_equipamento"
                value={formEquipment.nome_equipamento}
                onChange={handleUpdateAccessories}
                required
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="Número de Série"
                name="numero_de_serie"
                value={formEquipment.numero_de_serie}
                onChange={handleUpdateAccessories}
                required
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="Número do Patrimônio"
                name="numero_do_patrimonio"
                value={formEquipment.numero_do_patrimonio}
                onChange={handleUpdateAccessories}
                required
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <InputRadioDialog
                action={handleUpdateAccessories}
                name="tipo"
                label="Tipo do Equipamento"
                hasOther
                value={formEquipment.tipo}
                defaultValue={formEquipment.tipo}
                items={equipmentTypes.map((item) => ({ label: item, value: item }))}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <InputRadioDialog
                action={handleUpdateAccessories}
                name="marca"
                label="Marca"
                hasOther
                value={formEquipment.marca}
                defaultValue={formEquipment.marca}
                items={manufacturersEquipments.map((item) => ({ label: item, value: item }))}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <InputRadioDialog
                action={handleUpdateAccessories}
                name="modelo"
                label="Modelo"
                hasOther
                value={formEquipment.modelo}
                defaultValue={formEquipment.modelo}
                items={modelsEquipment.map((item) => ({ label: item, value: item }))}
              />
            </Grid>
            <Grid item xs={6} md={2}>
              <TextField
                required
                id="fabricante"
                onChange={handleUpdateAccessories}
                value={formEquipment.fabricante}
                name="fabricante"
                label="Fabricante"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                select
                label="Município de Origem"
                value={formEquipment.municipio_origem}
                helperText={`Valor atual: ${formEquipment.municipio_origem}`}
                onChange={handleUpdateAccessories}
                name="municipio_origem"
              >
                {cities.map((option) => (
                  <MenuItem key={randomIndex()} value={option}>{option}</MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6} sm={4}>
              <TextField
                required
                id="nome_instituicao_origem"
                onChange={handleUpdateAccessories}
                value={formEquipment.nome_instituicao_origem}
                name="nome_instituicao_origem"
                label="Nome da Instituição"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                select
                label="Tipo da instituição"
                value={formEquipment.tipo_instituicao_origem}
                onChange={handleUpdateAccessories}
                name="tipo_instituicao_origem"
              >
                {typeInstitute.map((option) => (
                  <MenuItem key={randomIndex()} value={option}>{option}</MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={6} sm={6}>
              <TextField
                required
                id="nomeDoResponsavel"
                onChange={handleUpdateAccessories}
                value={formEquipment.nome_responsavel}
                name="nome_responsavel"
                label="Nome do Responsável"
                fullWidth
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <TextField
                id="constatoDoResponsavel"
                onChange={handleUpdateAccessories}
                value={formEquipment.contato_responsavel}
                name="contato_responsavel"
                label="Contato do Responsável"
                fullWidth
              />
            </Grid>
          </Grid>
        </Container>

      </FullDialog>
    </>
  );
};

DialogEquipment.defaultProps = {
  open: false,
};

DialogEquipment.propTypes = {
  handleClose: PropTypes.func.isRequired,
  equipment: PropTypes.instanceOf(Object).isRequired,
  indexEquipment: PropTypes.string.isRequired,
  updateEquipmentForm: PropTypes.func.isRequired,
  open: PropTypes.bool,
};

export default DialogEquipment;
