import React from 'react';
import PropType from 'prop-types';
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import {TableCell, TableRow} from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";
import InfoIcon from '@material-ui/icons/Info';
import ChipStyled from "../_common/components/ChipStyled";
import {grey} from "@material-ui/core/colors";
import RowTableItem from "./RowTableItem";

const TableFormRegisteredItems = (props) => {
  const {items} = props;
  const {updateItemsFromTable} = props;

  const headTable = [
    {id: "tipo", name: "Tipo"},
    {id: "nome", name: "Nome do item"},
    {id: "unidade_medida", name: "Unidade"},
    {id: "quantidade", name: "Quantidade"},
    {id: "fabricante", name: "Fabricante"},
    {id: "codigo", name: "Codigo"},
  ];

  function updateParent (event, index, field) {
    updateItemsFromTable(event.target.value, index, field);
  }

  return (<React.Fragment>
    <TableContainer component={Paper}>
      <Table
        size={"small"}
        aria-label={"Tabela de itens cadastrados"}
      >
        <TableHead>
          <TableRow>
            {headTable.map((item, index) => (
              <TableCell key={`${index}_${new Date().toISOString()}`}>{item.name}</TableCell>
            ))}
            <TableCell align={"right"}>
              <ChipStyled
                color={"white"} bgColor={grey[500]} deleteIconColor={"white"} deleteIconBgColor={grey[500]}
                deleteIcon={<InfoIcon/>} size="small" label={"Descrição"} style={{color: "#ddddd"}}
                onDelete={() => false}
              />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item, index) => {
            return (
              <RowTableItem
                key={`${index}_${new Date().toISOString()}`} headTable={headTable} updateParent={updateParent}
                index={index} data={item}
              />
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  </React.Fragment>);
};

TableFormRegisteredItems.protoType = {
  items: PropType.array.isRequired
};

export default TableFormRegisteredItems;