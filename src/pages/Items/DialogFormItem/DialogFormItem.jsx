import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import FormItem from '../FormItem';
import FormDialog from '../../../components/FormDialog/FormDialog';
import FormContext from '../../../contexts/FormContext';
import LoadingContext from '../../../contexts/LoadingContext';
import { saveItem } from '../../../modelServices/itemService/itemService';
import { fakeProgress } from '../../../utils/fakeLoading';

const DialogFormItem = (props) => {
  const { open, closeDialog } = props;
  const { errors, triggerValidation } = useContext(FormContext);
  const {
    setOpenLoading,
    setProgressLoading,
    setMessageLoading,
    progressLoading,
    openLoading,
  } = useContext(LoadingContext);

  const handleSave = (data, e) => {
    e.preventDefault();
    if (openLoading) {
      return;
    }
    setOpenLoading(true);
    setProgressLoading(0);
    setMessageLoading('Enviando informações...');
    const interval = fakeProgress(progressLoading, setProgressLoading);
    triggerValidation()
      .then(() => {
        if (Object.keys(errors).length > 0) {
          return;
        }

        saveItem(data)
          .then(() => {
            window.location.reload();
            closeDialog();
          });
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
      title="Formulário de Itens"
      handleCancel={closeDialog}
      handleSave={handleSave}
    >
      <Container>
        <FormItem minAmount={0} />
      </Container>
    </FormDialog>
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
