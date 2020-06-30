import React, { useContext, useEffect, useState } from 'react';
import { Grid, Radio, TextField } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import ItemContext from '../ItemContext';
import { randomIndex } from '../../../utils';

const FormMergeItems = () => {
  const { mergeItems, modelMerge, setModelMerge } = useContext(ItemContext);
  const [amount, setAmount] = useState(0);
  const [rowChosen, setRowChosen] = useState(0);

  const handleSetModel = (event) => {
    const doc = {};
    doc[event.target.name] =
      event.target.name === 'quantidade' && event.target.value < amount
        ? amount
        : event.target.value;
    setModelMerge({ ...modelMerge, ...doc });
  };

  const headTable = [
    { id: 'tipo', label: 'Tipo' },
    { id: 'fabricante', label: 'Fabricante' },
    { id: 'codigo', label: 'Código' },
    { id: 'nome', label: 'Nome' },
    { id: 'unidade_medida', label: 'Unidade de Medida' },
    { id: 'quantidade', label: 'Quantidade' },
    { id: 'descricao', label: 'Descrição' },
  ];

  const handleData = () => {
    const itemsAmount = Object.values(mergeItems).reduce(
      (a, c) => a + c.quantidade,
      0
    );
    setAmount(itemsAmount);
    setModelMerge({
      ...modelMerge,
      ...Object.values(mergeItems)[0],
      quantidade: itemsAmount,
    });
  };

  const handleSelectItem = (key, index) => {
    const { quantidade } = modelMerge;
    setModelMerge({ ...modelMerge, ...mergeItems[key], quantidade });
    setRowChosen(index);
  };

  useEffect(handleData, [mergeItems]);

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h5">Itens selecionados</Typography>
          <Typography variant="caption">
            Selecione uma linha de referência
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell />
                  {headTable.map((head) => (
                    <TableCell key={randomIndex()}>{head.label}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.keys(mergeItems).map((key, index) => (
                  <TableRow
                    hover
                    key={randomIndex()}
                    onClick={() => handleSelectItem(key, index)}>
                    <TableCell>
                      <Radio value={index} checked={index === rowChosen} />
                    </TableCell>

                    {headTable.map((headItem) => (
                      <TableCell key={randomIndex()}>
                        {mergeItems[key][headItem.id]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5">Novo Item</Typography>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <TextField
                      label="Tipo"
                      name="tipo"
                      value={modelMerge.tipo}
                      onChange={handleSetModel}
                      fullWidth
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      label="Nome"
                      name="nome"
                      value={modelMerge.nome}
                      onChange={handleSetModel}
                      fullWidth
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      label="Código"
                      name="codigo"
                      value={modelMerge.codigo}
                      onChange={handleSetModel}
                      fullWidth
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      label="Fabricante"
                      name="fabricante"
                      value={modelMerge.fabricante}
                      onChange={handleSetModel}
                      fullWidth
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      label="Unidade de Medida"
                      name="unidade_medida"
                      value={modelMerge.unidade_medida}
                      onChange={handleSetModel}
                      fullWidth
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      label="Quantidade"
                      name="quantidade"
                      value={modelMerge.quantidade}
                      onChange={handleSetModel}
                      type="number"
                      fullWidth
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      label="Descrição"
                      name="descricao"
                      value={modelMerge.descricao}
                      onChange={handleSetModel}
                      fullWidth
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};
export default FormMergeItems;
