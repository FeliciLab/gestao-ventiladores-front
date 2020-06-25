import React, { useContext, useEffect, useState } from 'react';
import { Grid, TextField } from '@material-ui/core';
import ItemContext from '../ItemContext';
import FormFieldMerge from './FormFieldMerge';
import { MergeItemContext } from '../ItemMergeDialog';

const FormMergeItems = () => {
  const { mergeItems } = useContext(ItemContext);
  const { model, handleSetModel } = useContext(MergeItemContext);

  const [names, setNames] = useState([]);
  const [types, setTypes] = useState([]);
  const [codes, setCodes] = useState([]);
  const [manufacturers, setManufacturers] = useState([]);
  const [unity, setUnity] = useState([]);
  const [description, setDescription] = useState([]);
  const [amount, setAmount] = useState(0);

  const handleData = () => {
    const itemsNames = [];
    const itemsTypes = [];
    const itemsCodes = [];
    const itemsManufacturers = [];
    const itemsUnity = [];
    const itemsDescription = [];
    let itemsAmount = 0;

    const repeatedItem = (list, value) => list.find((i) => i.label === value);

    Object.values(mergeItems).forEach((item) => {
      if (!repeatedItem(itemsNames, item.nome) && item.nome !== '') {
        itemsNames.push({ label: item.nome, value: item.nome });
      }

      if (!repeatedItem(itemsTypes, item.tipo) && item.tipo !== '') {
        itemsTypes.push({ label: item.tipo, value: item.tipo });
      }

      if (!repeatedItem(itemsCodes, item.codigo) && item.codigo !== '') {
        itemsCodes.push({ label: item.codigo, value: item.codigo });
      }

      if (
        !repeatedItem(itemsManufacturers, item.fabricante) &&
        item.fabricante !== ''
      ) {
        itemsManufacturers.push({
          label: item.fabricante,
          value: item.fabricante,
        });
      }

      if (
        !repeatedItem(itemsUnity, item.unidade_medida) &&
        item.unidade_medida !== ''
      ) {
        itemsUnity.push({
          label: item.unidade_medida,
          value: item.unidade_medida,
        });
      }

      if (
        !repeatedItem(itemsDescription, item.descricao) &&
        item.descricao !== ''
      ) {
        itemsDescription.push({ label: item.descricao, value: item.descricao });
      }

      itemsAmount += item.quantidade;
    });

    setNames(itemsNames);
    setTypes(itemsTypes);
    setCodes(itemsCodes);
    setManufacturers(itemsManufacturers);
    setUnity(itemsUnity);
    setDescription(itemsDescription);
    setAmount(itemsAmount);
    handleSetModel({ target: { name: 'quantidade', value: itemsAmount } });
  };

  useEffect(handleData, [mergeItems]);

  const changeAmount = (event) => {
    event.target.value = event.target.value < amount ? amount : event.target.value; 
    handleSetModel(event);
  }

  return (
    <Grid container spacing={4}>
      <Grid item xs={6}>
        <FormFieldMerge
          name="Nome"
          label="Nome"
          index={0}
          choices={names}
          value={model.nome || ''}
          handleSetModel={handleSetModel}
        />
      </Grid>
      <Grid item xs={6}>
        <FormFieldMerge
          label="Tipo"
          name="tipo"
          index={0}
          choices={types}
          value={model.tipo || ''}
          handleSetModel={handleSetModel}
        />
      </Grid>
      <Grid item xs={6}>
        <FormFieldMerge
          label="Fabricante"
          name="fabricante"
          index={0}
          choices={manufacturers}
          value={model.fabricante || ''}
          handleSetModel={handleSetModel}
        />
      </Grid>
      <Grid item xs={6}>
        <FormFieldMerge
          label="Unidade de Medida"
          name="unidade_medida"
          index={0}
          choices={unity}
          value={model.unidade_medida || ''}
          handleSetModel={handleSetModel}
        />
      </Grid>
      <Grid item xs={6}>
        <FormFieldMerge
          label="Código"
          name="codigo"
          index={0}
          choices={codes}
          value={model.codigo || ''}
          handleSetModel={handleSetModel}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Quantidade"
          name="quantidade"
          value={model.quantidade || 0}
          onChange={changeAmount}
          type="number"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <FormFieldMerge
          label="Descrição"
          name="descricao"
          index={0}
          choices={description}
          value={model.descricao || ''}
          handleSetModel={handleSetModel}
        />
      </Grid>
    </Grid>
  );
};

export default FormMergeItems;
