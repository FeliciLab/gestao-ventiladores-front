import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import ItemContext from '../../contexts/ItemContext';
import { mergeItemRequest } from '../../modelServices/itemService/itemService';
import FormMergeItems from './FormMergeItems/FormMergeItems';
import FormDialog from '../../components/FormDialog/FormDialog';
import AlertContext from '../../contexts/AlertContext';
import { fakeProgress } from '../../utils/fakeLoading';
import LoadingContext from '../../contexts/LoadingContext';

const DialogItemMerge = (props) => {
  const {
    mergeItems,
  } = useContext(ItemContext);
  const { open, closeDialog } = props;
  const { setAlertMessage } = useContext(AlertContext);
  const {
    setOpenLoading,
    setProgressLoading,
    setMessageLoading,
    progressLoading,
    openLoading,
  } = useContext(LoadingContext);

  const handleSave = (data) => {
    if (openLoading) {
      return;
    }

    setOpenLoading(true);
    setProgressLoading(0);
    setMessageLoading('Enviando informações...');
    const interval = fakeProgress(progressLoading, setProgressLoading);

    const doc = { ...data };
    delete doc._id;

    mergeItemRequest({
      toUpdate: doc,
      toRemove: Object.values(mergeItems).map((item) => item._id),
    })
      .then(() => window.location.reload())
      .catch(() => {
        setAlertMessage('Não foi possível se conectar ao servidor. Entre em contato com o suporte', 'error');
      })
      .finally(() => {
        clearInterval(interval);
        setTimeout(() => {
          setOpenLoading(false);
        }, 1000);
      });
  };

  return (
    <FormDialog
      open={open}
      title="Mesclar Itens"
      handleCancel={closeDialog}
      handleSave={handleSave}
    >
      <Container>
        <FormMergeItems />
      </Container>
    </FormDialog>
  );
};

DialogItemMerge.defaultProps = {
  open: false,
};

DialogItemMerge.propTypes = {
  closeDialog: PropTypes.func.isRequired,
  open: PropTypes.bool,
};

export default DialogItemMerge;
