import React from 'react';
import Typography from "@material-ui/core/Typography";
import TableFormRegisteredItems from "./TableFormRegisteredItems";

const FormRegisteredItems = (props) => {
  React.useEffect(() => {
    setItems(props.items);
  }, [props.items]);

  const [items, setItems] = React.useState([]);

  const {updateItemsFromTable} = props;

  const updateParent = (event) => {
    updateItemsFromTable(event);
  };

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
          updateParent={updateParent}
        />
    </React.Fragment>
  );
};

export default FormRegisteredItems;