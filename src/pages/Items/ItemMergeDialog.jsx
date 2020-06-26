import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import FormMergeItems from './FormMergeItems/FormMergeItems';
import FullDialog from '../_common/components/FullDialog';
import ModalActionSaveCancel from '../../components/ModalActionSaveCancel/ModalActionSaveCancel';
import ItemContext from './ItemContext';
import { mergeItemRequest } from '../../modelServices/itemService/itemService';
import AlertFormErrorSubmit from '../../components/AlertFormErrorSubmit/AlertFormErrorSubmit';
import { useForm } from 'react-hook-form';

export const MergeItemContext = createContext({});

const useStyle = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const ItemMergeDialog = (props) => {
  const { mergeItems } = useContext(ItemContext);
  const { register, errors, triggerValidation } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const classes = useStyle();
  const { open, closeDialog } = props;

  const [model, setModel] = useState({});
  const [showError, setShowError] = useState(false);

  const handleSetModel = (event) => {
    const doc = {};
    doc[event.target.name] = event.target.value;
    setModel({ ...model, ...doc });
  };

  const handleSave = () => {
    mergeItemRequest({ toUpdate: model, toRemove: mergeItems })
      .then(() => window.location.reload())
      .catch(() => {
        setShowError(true);
      });
  };

  return (
    <FullDialog
      open={open}
      title="Mesclar Itens"
      handleClose={closeDialog}
      actionChildren={
        <ModalActionSaveCancel
          handleCancel={closeDialog}
          handleSave={handleSave}
        />
      }>
      <Container className={classes.container}>
        <AlertFormErrorSubmit show={showError} setShow={setShowError} timeout />
        <MergeItemContext.Provider value={{ model, handleSetModel }}>
          <FormMergeItems />
        </MergeItemContext.Provider>
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
