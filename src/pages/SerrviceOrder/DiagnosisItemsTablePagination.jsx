import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TableContainer from '@material-ui/core/TableContainer';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core';
import { getItemDiagnosis } from '../../models/item';
import { randomIndex } from '../../utils';

const DiagnosisItemsTablePagination = (props) => {
  const { items } = props;
  const rowsPerPage = 5;
  const [page, setPage] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Tipo</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Fabricante</TableCell>
              <TableCell>Código</TableCell>
              <TableCell>Unidade de Medida</TableCell>
              <TableCell>Quantidade</TableCell>
              <TableCell>Descrição</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items
              .sort((a, b) => a - b)
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item) => {
                const itemDiag = getItemDiagnosis(item);
                return (
                  <TableRow key={randomIndex()}>
                    <TableCell>
                      {itemDiag.tipo === 'pecas' ? 'Peça' : 'Acessório'}
                    </TableCell>
                    <TableCell>{itemDiag.nome || ''}</TableCell>
                    <TableCell>{itemDiag.fabricante || ''}</TableCell>
                    <TableCell>{itemDiag.codigo || ''}</TableCell>
                    <TableCell>{itemDiag.unidade_medida || ''}</TableCell>
                    <TableCell>{itemDiag.quantidade || 0}</TableCell>
                    <TableCell>{itemDiag.descricao || ''}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5]}
        component="div"
        count={items.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
      />
    </>
  );
};

DiagnosisItemsTablePagination.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
};

export default DiagnosisItemsTablePagination;
