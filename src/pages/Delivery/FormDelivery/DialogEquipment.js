import React from 'react';
import ThemeButton from "../../_common/forms/ThemeButton";
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import {Dialog, DialogActions, DialogContent, DialogTitle} from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";


export default function DialogEquipment (props) {
  const {
    open,
    handleClose,
    equipment,
    indexEquipment,
    updateEquipmentForm
  } = props;

  return (<React.Fragment>
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Formulário de Equipamento</DialogTitle>
      <DialogContent>
      </DialogContent>
      <DialogActions>
        <ThemeButton
          startIcon={<CloseIcon/>}
          onClick={handleClose}
          bgColor={grey[600]}
          hoverColor={grey[800]}
          name={'Cancelar'}
        >
          Cancelar
        </ThemeButton>
        <ThemeButton
          startIcon={<SaveIcon/>}
          onClick={handleClose}
          name={'Salvar'}
        >
          Salvar
        </ThemeButton>
      </DialogActions>
    </Dialog>
  </React.Fragment>);
}