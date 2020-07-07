import React, {
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  Grid,
  Radio,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import ItemContext from '../../../contexts/ItemContext';
import { randomIndex } from '../../../utils';
import FormItem from '../FormItem';
import { mapTypeItems } from '../../../models/item';

const FormMergeItems = () => {
  const { mergeItems, item, setItem } = useContext(ItemContext);
  const [minAmount, setMinAmount] = useState(0);
  const [rowChosen, setRowChosen] = useState(0);

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
    setMinAmount(itemsAmount);
    setItem({
      ...item,
      ...Object.values(mergeItems)[0],
      quantidade: itemsAmount,
    });
  };

  const handleSelectItem = (key, index) => {
    const { quantidade } = item;
    setItem({ ...item, ...mergeItems[key], quantidade });
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
                        {headItem.id === 'tipo'
                          ? mapTypeItems[mergeItems[key][headItem.id]]
                          : mergeItems[key][headItem.id]}
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
          <FormItem minAmount={minAmount} />
        </Grid>
      </Grid>
    </>
  );
};
export default FormMergeItems;
