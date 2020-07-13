import React, {
  createContext,
  useContext,
} from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import ItemContext from '../../contexts/ItemContext';
import { mergeItemRequest } from '../../modelServices/itemService/itemService';
import FormMergeItems from './FormMergeItems/FormMergeItems';
import FormDialog from '../../components/FormDialog/FormDialog';
import FormContext from '../../contexts/FormContext';
import AlertContext from '../../contexts/AlertContext';

export const MergeItemContext = createContext({});

const DialogItemMerge = (props) => {
  const {
    mergeItems,
  } = useContext(ItemContext);

  const { open, closeDialog } = props;

  const { setAlertMessage } = useContext(AlertContext);

  const handleSave = (data) => {
    mergeItemRequest({ toUpdate: data, toRemove: Object.values(mergeItems).map((item) => item._id) })
      // .then(() => window.location.reload())
      .catch(() => {
        setAlertMessage('Não foi possível se conectar ao servidor. Entre em contato com o suporte', 'error');
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
