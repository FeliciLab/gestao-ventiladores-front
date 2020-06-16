import React, {
  useContext,
  useEffect,
  useState,
} from 'react';
import { Grid } from '@material-ui/core';
import ItemContext from '../ItemContext';
import MergeItemField from '../MergeItemField/MergeItemField';


const FormMergeItems = () => {
  const { mergeItems } = useContext(ItemContext);

  const [model, setModel] = useState({});
  const [names, setNames] = useState([]);

  useEffect(() => {
    const itemsNames = [];
    Object.values(mergeItems).forEach((item) => {
      if (itemsNames.indexOf(item.nome) < 0) {
        itemsNames.push(item.nome);
      }
    });
    setNames(itemsNames);
  }, [mergeItems]);

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <MergeItemField
            label="Nome"
            index={0}
            choices={names}
            value={model.nome}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default FormMergeItems;
