import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import { saveItem } from '../../../modelServices/itemService/itemService';
import FormItem from '../FormItem';
import ItemContext from '../ItemContext';
import FormDialog from '../../../components/FormDialog/FormDialog';

const DialogFormItem = (props) => {
  const { open, closeDialog } = props;

  const { item } = useContext(ItemContext);

  const handleSave = () => {
    saveItem(item)
      .then(() => console.log('ok'))
      .catch((e) => console.log('desok', e));
  };

  return (
    <FormDialog
      open={open}
      title="Formulário de Itens"
      handleCancel={closeDialog}
      handleSave={handleSave}>
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
