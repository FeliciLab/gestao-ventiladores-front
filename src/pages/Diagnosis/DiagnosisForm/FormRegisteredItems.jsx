import React from 'react';
import PropTypes from 'prop-types';
import TableFormRegisteredItems from './TableFormRegisteredItems';


const FormRegisteredItems = (props) => {
  const {
    items,
    updateItemsFromTable,
  } = props;

  return (
    <>
      <TableFormRegisteredItems
        items={items}
        updateItemsFromTable={updateItemsFromTable}
      />
    </>
  );
};

FormRegisteredItems.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
  updateItemsFromTable: PropTypes.func.isRequired,
};

export default FormRegisteredItems;
