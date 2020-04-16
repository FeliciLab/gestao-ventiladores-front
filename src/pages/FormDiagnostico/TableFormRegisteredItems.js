import React, {useEffect, useState} from 'react';
import PropType from 'prop-types';
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import {TableCell, TableRow} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";
import InfoIcon from '@material-ui/icons/Info';
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";

const TableFormRegisteredItems = (props) => {
  useEffect(() => {
    setItems(props.items);
  }, [props.items]);

  const [items, setItems] = useState([]);

  const headTable = [
    {id: "tipo", name: "Tipo"},
    {id: "nome", name: "Nome do item"},
    {id: "unidade_medida", name: "Unidade"},
    {id: "quantidade", name: "Quantidade"},
    {id: "fabricante", name: "Fabricante"},
    {id: "codigo", name: "Codigo"},
  ];

  return (<React.Fragment>
    <TableContainer component={Paper}>
      <Table
        size={"small"}
        aria-label={"Tabela de itens cadastrados"}
      >
        <TableHead>
          <TableRow>
            {headTable.map((item, index) => (
              <TableCell key={index}>{item.name}</TableCell>
            ))}
            <TableCell>
              <Button
                endIcon={<InfoIcon style={{color: 'white'}}/>}
              >asdas</Button>
              <Chip
                size="small"
                label={"Descrição"}
                style={{color: "#ddddd"}}
                onDelete={() => false}
              />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item, index) => (
            <TableRow key={index}>
              {
                headTable.map(
                  (head, headIndex) => (
                    <TableCell key={headIndex}>{item[head.id]}</TableCell>
                  )
                )
              }
              <TableCell>
                <IconButton></IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </React.Fragment>);
};

TableFormRegisteredItems.protoType = {
  items: PropType.array.isRequired
};

export default TableFormRegisteredItems;