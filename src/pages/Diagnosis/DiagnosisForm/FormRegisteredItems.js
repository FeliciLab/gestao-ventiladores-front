import React from 'react';
import Typography from "@material-ui/core/Typography";
import TableFormRegisteredItems from "./TableFormRegisteredItems";


const FormRegisteredItems = (props) => {
  const {
    items,
    updateItemsFromTable
  } = props;

  return (
    <React.Fragment>
      <Typography
        variant={"h6"}
        gutterBottom
        component={"h6"}
      >
        2.1 PEÇAS E ACESSÓRIOS CADASTRADOS
      </Typography>
      <TableFormRegisteredItems
        items={items}
        updateItemsFromTable={updateItemsFromTable}
      />
    </React.Fragment>
  );
};

export default FormRegisteredItems;