import React, {useEffect} from "react";
import Container from "@material-ui/core/Container";
import TableDemand from "./TableDemand";

const FormDemand = () => {
  const [demandList, setDemandList] = React.useState([]);

  useEffect(() => {
    const data = rows;
    setDemandList(data);
  });

  console.log(demandList);
  return (
    <Container>
      <TableDemand data={demandList}></TableDemand>
    </Container>
  );
};

export default FormDemand;

function createData(id, amount, name, type, value, provider, info) {
  return {id, amount, name, type, value, provider, info};
}
const rows = [
  createData(1, 1, "teste", "NI", 67, "Fornecedor"),
  createData(2, 20, "teste2", "NI", 51, "Fornecedor"),
  createData(3, 5, "teste3", "NI", 24, "Fornecedor"),
  createData(4, 5, "teste4", "NI", 24, "Fornecedor"),
  createData(5, 1, "teste5", "NI", 49, "Fornecedor"),
  createData(6, 1, "teste6", "NI", 87, "Fornecedor"),
  createData(7, 2, "teste7", "NI", 37, "Fornecedor"),
  createData(8, 3, "teste8", "NI", 94, "Fornecedor"),
  createData(9, 3, "teste9", "NI", 65, "Fornecedor"),
  createData(10, 2, "teste10", "NI", 98, "Fornecedor"),
  createData(11, 1, "teste11", "NI", 81, "Fornecedor"),
  createData(12, 1, "teste12", "NI", 9, "Fornecedor"),
  createData(13, 1, "teste13", "NI", 63, "Fornecedor"),
];
