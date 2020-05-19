import React from 'react';
import TableFormRegisteredItems from './TableFormRegisteredItems';


const FormRegisteredItems = (props) => {
  const {
    items,
    updateItemsFromTable
  } = props;

  return (
    <React.Fragment>
      <TableFormRegisteredItems
        items={items}
        updateItemsFromTable={updateItemsFromTable}
      />
    </React.Fragment>
  );
};

export default FormRegisteredItems;