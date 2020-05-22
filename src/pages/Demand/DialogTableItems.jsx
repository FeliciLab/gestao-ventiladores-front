import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SaveSharpIcon from '@material-ui/icons/SaveSharp';
import FormRegisteredItems from '../Diagnosis/DiagnosisForm/FormRegisteredItems';
import ThemeButton from '../_common/forms/ThemeButton';


const useStyle = makeStyles(() => ({
  titleRow: {
    marginTop: '2rem',
    marginBottom: '2rem',
  },
}));

const DialogTableItems = (props) => {
  const classes = useStyle();
  const { action, dataDialog } = props;
  const [dataTable, setDataTable] = useState([]);

  if (dataTable.length === 0) {
    setDataTable(dataDialog || []);
  }

  function updateField(value, index, field) {
    const items = dataTable.slice();
    items[index][field] = value;
    setDataTable(items);
  }

  return (
    <>
      <Grid container justify="space-between" className={classes.titleRow}>
        <Grid item>
          <Typography variant="h4">
            LISTA DE ITENS SELECIONADOS
          </Typography>
        </Grid>
        <Grid item>
          <ThemeButton onClick={() => action(dataTable)} startIcon={<SaveSharpIcon />}>
            Salvar ordem de compra
          </ThemeButton>
        </Grid>
      </Grid>

      <FormRegisteredItems
        items={dataTable}
        updateItemsFromTable={updateField}
      />
    </>
  );
};

DialogTableItems.propTypes = {
  action: PropTypes.func.isRequired,
  dataDialog: PropTypes.instanceOf(Array).isRequired,
};

export default DialogTableItems;
