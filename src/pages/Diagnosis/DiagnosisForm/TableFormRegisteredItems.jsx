import React, { useState } from 'react';
import PropType from 'prop-types';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import { grey } from '@material-ui/core/colors';
import ChipStyled from '../../_common/components/ChipStyled';
import RowTableItem from './RowTableItem';
import FormModalDescription from './FormModalDescription';
import { randomIndex } from '../../../utils';


const TableFormRegisteredItems = (props) => {
  const {
    updateItemsFromTable,
    items,
  } = props;

  const [open, setOpen] = useState(false);
  const [itemEdit, setItemEdit] = useState({});
  const [indexEdit, setIndexEdit] = useState(0);

  const headTable = [
    { id: 'tipo', name: 'Tipo' },
    { id: 'nome', name: 'Nome do item' },
    { id: 'unidade_medida', name: 'Unidade' },
    { id: 'quantidade', name: 'Quantidade' },
    { id: 'fabricante', name: 'Fabricante' },
    { id: 'codigo', name: 'Codigo' },
  ];

  const updateParent = (value, index, field) => {
    updateItemsFromTable(value, index, field);
  };

  const openModelEditDescription = (index) => {
    setItemEdit(items[index]);
    setIndexEdit(index);
    setOpen(true);
  };

  const updateDescription = (description) => {
    updateParent(description, indexEdit, 'descricao');
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table
          size="small"
          aria-label="Tabela de itens cadastrados"
        >
          <TableHead>
            <TableRow>
              {headTable.map((item) => (
                <TableCell key={randomIndex()}>
                  {item.name}
                </TableCell>
              ))}
              <TableCell align="right">
                <ChipStyled
                  color="white"
                  bgColor={grey[500]}
                  deleteIconColor="white"
                  deleteIconBgColor={grey[500]}
                  deleteIcon={<InfoIcon />}
                  size="small"
                  label="Descrição"
                  style={{ color: '#ddddd' }}
                  onDelete={() => false}
                />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item, index) => (
              <RowTableItem
                openModelEditDescription={openModelEditDescription}
                key={randomIndex()}
                headTable={headTable}
                updateParent={updateParent}
                index={index}
                data={item}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <FormModalDescription
        item={itemEdit}
        open={open}
        handleClose={handleClose}
        updateValue={updateDescription}
      />
    </>
  );
};

TableFormRegisteredItems.propTypes = {
  items: PropType.instanceOf(Array).isRequired,
  updateItemsFromTable: PropType.func.isRequired,
};

export default TableFormRegisteredItems;
