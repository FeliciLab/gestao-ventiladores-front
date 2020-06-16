import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import FormMergeItems from './FormMergeItems/FormMergeItems';
import FullDialog from '../_common/components/FullDialog';
import ModalActionSaveCancel from '../../components/ModalActionSaveCancel/ModalActionSaveCancel';


const ItemMergeDialog = (props) => {
  const {
    open,
    closeDialog,
  } = props;

  const handleSave = () => {

  };

  return (
    <FullDialog
      open={open}
      title="Mesclar Itens"
      handleClose={closeDialog}
      actionChildren={
        (
          <ModalActionSaveCancel
            handleCancel={closeDialog}
            handleSave={handleSave}
          />
        )
      }
    >
      <Container>
        <FormMergeItems />
      </Container>
    </FullDialog>
  );
};

ItemMergeDialog.defaultProps = {
  open: false,
};

ItemMergeDialog.propTypes = {
  closeDialog: PropTypes.func.isRequired,
  open: PropTypes.bool,
};

export default ItemMergeDialog;
