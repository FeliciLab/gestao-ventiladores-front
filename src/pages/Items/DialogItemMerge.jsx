import React, {
  createContext,
  useContext,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import ItemContext from './ItemContext';
import { mergeItemRequest } from '../../modelServices/itemService/itemService';
import AlertFormErrorSubmit from '../../components/AlertFormErrorSubmit/AlertFormErrorSubmit';
import FormMergeItems from './FormMergeItems/FormMergeItems';
import FormDialog from '../../components/FormDialog/FormDialog';


export const MergeItemContext = createContext({});

const useStyle = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const DialogItemMerge = (props) => {
  const { mergeItems, modelMerge } = useContext(ItemContext);

  const { register, errors, triggerValidation } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const classes = useStyle();
  const { open, closeDialog } = props;

  const [showError, setShowError] = useState(false);

  const handleSave = () => {
    mergeItemRequest({ toUpdate: modelMerge, toRemove: mergeItems })
      .then(() => window.location.reload())
      .catch(() => {
        setShowError(true);
      });
  };

  return (
    <FormDialog
      open={open}
      title="Mesclar Itens"
      handleCancel={closeDialog}
      handleSave={handleSave}
    >
      <Container className={classes.container}>
        <AlertFormErrorSubmit show={showError} setShow={setShowError} timeout />
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
