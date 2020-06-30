import React from 'react';
import PropTypes from 'prop-types';
import FullDialog from '../../pages/_common/components/FullDialog';
import ModalActionSaveCancel from '../ModalActionSaveCancel/ModalActionSaveCancel';

const FormDialog = (props) => {
  const { open, title, handleCancel, children, handleSave } = props;

  return (
    <form onSubmit={handleSave}>
      <FullDialog
        open={open}
        title={title}
        handleClose={handleCancel}
        actionChildren={
          <ModalActionSaveCancel
            handleCancel={handleCancel}
            handleSave={handleSave}
          />
        }>
        {children}
      </FullDialog>
    </form>
  );
};

FormDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  handleCancel: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  children: PropTypes.instanceOf(Object).isRequired,
};

export default FormDialog;
