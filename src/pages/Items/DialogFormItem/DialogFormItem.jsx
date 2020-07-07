import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import FormItem from '../FormItem';
import ItemContext from '../../../contexts/ItemContext';
import FormDialog from '../../../components/FormDialog/FormDialog';
import FormContext from '../../../contexts/FormContext';
import { saveItem } from '../../../modelServices/itemService/itemService';

const DialogFormItem = (props) => {
  const { open, closeDialog } = props;

  const { item } = useContext(ItemContext);
  const { errors, triggerValidation, resetForm } = useContext(FormContext);

  const handleSave = () => {
    triggerValidation()
      .then(() => {
        if (Object.keys(errors).length > 0) {
          console.log(errors);
          return;
        }

        saveItem(item)
          .then(() => {
            console.log('ok');
            resetForm();
          })
          .catch((e) => console.log('desok', e));
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
