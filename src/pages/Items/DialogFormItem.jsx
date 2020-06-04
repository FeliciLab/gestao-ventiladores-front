import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import orange from '@material-ui/core/colors/orange';
import Container from '@material-ui/core/Container';
import ThemeButton from '../_common/forms/ThemeButton';
import FullDialog from '../_common/components/FullDialog';
import { saveItem } from '../../modelServices/itemService';
import CreateNewItem from './CreateNewItem';
import ItemContext from './ItemContext';

const DialogFormItem = (props) => {
  const { open, closeDialog } = props;

  const { item } = useContext(ItemContext);

  return (
    <>
      <FullDialog
        open={open}
        handleClose={closeDialog}
        title="Formulário de Itens"
        actionChildren={
          <>
            <Grid container spacing={2}>
              <Grid item>
                <ThemeButton
                  onClick={closeDialog}
                  startIcon={<CloseIcon />}
                  variant="outlined"
                  borderColor="white">
                  Cancelar
                </ThemeButton>
              </Grid>
              <Grid item>
                <ThemeButton
                  startIcon={<SaveIcon />}
                  onClick={() => saveItem(item)}
                  name="Salvar"
                  color={orange[600]}
                  bgColor="#FFF"
                  hoverColor={orange[50]}>
                  Salvar
                </ThemeButton>
              </Grid>
            </Grid>
          </>
        }>
        <Container>
          <CreateNewItem addNewItem={() => ({})} />
        </Container>
      </FullDialog>
    </>
  );
};

DialogFormItem.defaultProps = {
  open: false,
};

DialogFormItem.propTypes = {
  closeDialog: PropTypes.func.isRequired,
  open: PropTypes.bool,
};

export default DialogFormItem;
