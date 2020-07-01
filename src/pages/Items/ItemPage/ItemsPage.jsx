import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, Tab, Tabs } from '@material-ui/core';
import { orange } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import TableCheckedList from '../../_common/SelectableTable/TableCheckedList';
import ThemeButton from '../../_common/forms/ThemeButton';
import { Item, itemDiagnosisModel } from '../../../models/item';
import DialogFormItem from '../DialogFormItem/DialogFormItem';
import ItemContext from '../ItemContext';
import DialogItemMerge from '../DialogItemMerge';
import { useForm } from 'react-hook-form';
import AlertPopUp from '../../../components/AlertPopUp/AlertPopUp';

const useStyle = makeStyles((theme) => ({
  gridContainer: {
    marginTop: theme.spacing(1),
  },
}));

const ItemsPage = (props) => {
  const { items } = props;
  const { register, errors, triggerValidation, handleSubmit } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const [item, setItem] = useState({ ...itemDiagnosisModel });
  const [mergeItems, setMergeItems] = useState([]);
  const [tabValue, setTabValue] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [openMergeDialog, setOpenMergeDialog] = useState(false);

  const classes = useStyle();
  const selectKeyField = 'nome';
  const headerData = [
    { id: 'tipo', name: 'Tipo' },
    { id: 'fabricante', name: 'Fabricante' },
    { id: 'codigo', name: 'Código' },
    { id: 'nome', name: 'Nome' },
    { id: 'unidade_medida', name: 'Unidade de Medida' },
    { id: 'quantidade', name: 'Quantidade' },
    { id: 'descricao', name: 'Descrição' },
  ];

  const changeTab = (event, newValue) => {
    setTabValue(newValue);
  };

  const openEditDialog = (data) => {
    setItem({
      ...items.find((row) => row[selectKeyField] === data[selectKeyField]),
    });
    setOpenDialog(true);
  };

  const openNewDialog = () => {
    setItem({ ...Item({}) });
    setOpenDialog(true);
  };

  const closeDialog = () => {
    setOpenDialog(false);
    setOpenMergeDialog(false);
  };

  const mergeItemsDialog = (data) => {
    setMergeItems({
      ...items
        .filter((filtering) =>
          data.find((d) => filtering[selectKeyField] === d)
        )
        .reduce((acc, curr, index) => {
          acc[index] = curr;
          return acc;
        }, {}),
    });

    setOpenMergeDialog(true);
  };

  const actions = [
    {
      name: 'Editar',
      handleEvent: openEditDialog,
      icon: {
        bgColor: orange[500],
        hoverColor: orange[700],
        icon: <EditIcon />,
      },
    },
  ];

  return (
    <>
      <Grid container spacing={3} className={classes.gridContainer}>
        <Grid item xs={12}>
          <Grid container>
            <Grid item>
              <Tabs
                value={tabValue}
                onChange={changeTab}
                aria-label="abas-triagem"
                centered>
                <Tab label="Gestão de Itens" aria-controls="gestao-de-itens" />
              </Tabs>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container justify="flex-end">
            <Grid item>
              <ThemeButton onClick={openNewDialog} startIcon={<AddIcon />}>
                Cadastrar Novo Item
              </ThemeButton>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Paper>
            <TableCheckedList
              actions={actions}
              dataTable={items}
              selectKeyField={selectKeyField}
              headerTable={headerData}
              actionFunction={mergeItemsDialog}
              actionBarTitle="Lista de Items (Nenhum item selecionado)"
              actionBarTextButton="Mesclar itens"
            />
          </Paper>
        </Grid>
      </Grid>

      <ItemContext.Provider
        value={{ item, setItem, errors, register, handleSubmit }}>
        <DialogFormItem open={openDialog} closeDialog={closeDialog} />
      </ItemContext.Provider>

      <ItemContext.Provider
        value={{
          mergeItems,
          setMergeItems,
          item,
          setItem,
          register,
          errors,
          triggerValidation,
          handleSubmit,
        }}>
        <DialogItemMerge open={openMergeDialog} closeDialog={closeDialog} />
      </ItemContext.Provider>
      <AlertPopUp alertMessage="" />
    </>
  );
};

ItemsPage.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
};

export default ItemsPage;
