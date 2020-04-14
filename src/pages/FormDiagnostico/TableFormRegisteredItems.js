import React, {useEffect, useState} from 'react';
import PropType from 'prop-types';
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import {TableCell, TableRow} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";

const TableFormRegisteredItems = (props) => {
  useEffect(() => {
    setItems(props.items);
  }, [props.items]);

  const [items, setItems] = useState([]);

  const headTable = [
    {id: "quantidade", name: "Quantidade"},
    {id: "nome", name: "Nome"},
    {id: "tipo", name: "Tipo"},
    {id: "descricao", name: "Descricao"},
    {id: "valor", name: "Valor"},
    {id: "prioridade", name: "Prioridade"},
    {id: "unidade_medida", name: "Unidade de medida"},
    {id: "codigo", name: "Codigo"},
    {id: "fabricante", name: "Fabricante"},
  ]

  return <React.Fragment>
    <TableContainer component={Paper}>
      <Table size={"small"} aria-label={"Tabela de itens cadastrados"}>
        <TableHead>
          <TableRow>
            {headTable.map((item, index) => (
              <TableCell key={index}>{item.name}</TableCell>
            ))}
            <TableCell>Ação</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item, index) => (
            <TableRow>
              {headTable.map((head,headIndex) => {
                <TableCell key={headIndex}>{item[head.id]}</TableCell>
              })}
              <TableCell>
                <IconButton></IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </React.Fragment>;
};

TableFormRegisteredItems.protoType = {
  items: PropType.array.isRequired
};

export default TableFormRegisteredItems;