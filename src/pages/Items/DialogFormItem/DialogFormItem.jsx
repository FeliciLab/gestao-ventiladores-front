import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import FormItem from '../FormItem';
import FormDialog from '../../../components/FormDialog/FormDialog';
import FormContext from '../../../contexts/FormContext';
import { saveItem } from '../../../modelServices/itemService/itemService';

const DialogFormItem = (props) => {
  const { open, closeDialog } = props;
  const { errors, triggerValidation } = useContext(FormContext);

  const handleSave = (data, e) => {
    e.preventDefault();
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
        <FormItem />
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
