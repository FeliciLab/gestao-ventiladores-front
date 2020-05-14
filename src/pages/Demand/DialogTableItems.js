import React, {useState} from 'react';
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import ThemeButton from "../_common/forms/ThemeButton";
import SaveSharpIcon from '@material-ui/icons/SaveSharp';
import FormRegisteredItems from "../Diagnosis/DiagnosisForm/FormRegisteredItems";


const DialogTableItems = (props) => {
  const classes = useStyle();
  const {action} = props;
  const [dataTable, setDataTable] = useState([]);

  if (dataTable.length === 0) {
    setDataTable(props.dataTable || []);
  }

  function updateField (value, index, field) {
    const items = dataTable.slice();
    items[index][field] = value;
    setDataTable(items)
  }

  return (
    <React.Fragment>
      <Grid container justify={"space-between"} className={classes.titleRow}>
        <Grid item xs={'auto'}>
          <Typography variant={"h4"}>
            LISTA DE ITENS SELECIONADOS
          </Typography>
        </Grid>
        <Grid item xs={'auto'}>
          <ThemeButton onClick={() => action(dataTable)} startIcon={<SaveSharpIcon/>}>Salvar ordem de compra</ThemeButton>
        </Grid>
      </Grid>

      <FormRegisteredItems
        items={dataTable}
        updateItemsFromTable={updateField}
      />
    </React.Fragment>
  );
};

const useStyle = makeStyles(() => ({
  titleRow: {
    marginTop: '2rem',
    marginBottom: '2rem'
  }
}));

export default DialogTableItems;