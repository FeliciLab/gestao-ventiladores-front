import React from 'react';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TableFormRegisteredItems from "./TableFormRegisteredItems";

const FormRegisteredItems = (props) => {
  React.useEffect(() => {
    setItems(props.items);
  }, [props.items]);

  const [items, setItems] = React.useState([]);

  return (
    <React.Fragment>
      <Paper>
        <Typography
          variant={"h6"}
          gutterBottom
          component={"h6"}
        >
          2.1 PEÇAS E ACESSÓRIOS CADASTRADOS
        </Typography>
        <TableFormRegisteredItems items={items}/>
      </Paper>
    </React.Fragment>
  );
};

export default FormRegisteredItems;