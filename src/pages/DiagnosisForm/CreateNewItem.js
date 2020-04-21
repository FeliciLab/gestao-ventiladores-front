import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SaveIcon from "@material-ui/icons/Save";
import OrangeButton from "../_common/forms/OrangeButton";
import ControlledInput from "../_common/forms/ControlledInput";
import RadioControl, {helperPropsItemsRadioControl} from "../_common/forms/RadioControl";
import {itemDiagnosisModel} from "../../models/itensDiagnosticos";

export default function CreateNewItem (props) {
  const {addNewItem} = props;

  const [clean, setClean] = useState(false);
  const [item, setItem] = useState(itemDiagnosisModel);

  function updateItem (event) {
    const doc = item;
    doc[event.target.name] = event.target.value;
    setItem(doc);
  };

  function registerItem () {
    addNewItem(item);
    setItem(Object.assign({}, itemDiagnosisModel));
    setClean(true);
    setTimeout(() => {
      setClean(false);
    }, 500);

  }

  const radioItems = [
    helperPropsItemsRadioControl('pecas', 'Peças'),
    helperPropsItemsRadioControl('acessorio', 'Acessórios')
  ];

  return (
    <React.Fragment>
      <Typography
        variant="h6"
        gutterBottom
      >
        2. Cadastro de Itens
      </Typography>

      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          xs={12}
          sm={6}
        >
          <RadioControl
            clean={clean}
            name={"tipo"}
            action={updateItem}
            flexDirection={"row"}
            formLabel={"Tipo do item"}
            items={radioItems}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
        >
          <ControlledInput
            label={"Fabricante"}
            action={updateItem}
            name={"fabricante"}
            clean={clean}
          />

        </Grid>

        <Grid
          item
          xs={12}
          sm={3}
        >
          <ControlledInput
            label={"Código do item"}
            action={updateItem}
            name={"codigo"}
            clean={clean}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
        >
          <ControlledInput
            label={"Nome do item"}
            action={updateItem}
            name={"nome"}
            clean={clean}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={3}
        >
          <ControlledInput
            label={"Unidade de medida"}
            action={updateItem}
            name={"unidade_medida"}
            clean={clean}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
        >
          <ControlledInput
            label={"Quantidade"}
            action={updateItem}
            name={"quantidade"}
            clean={clean}
            type={"number"}
          />
        </Grid>

        <Grid
          item
          xs={12}
        >
          <ControlledInput
            label={"Descrição do Item"}
            action={updateItem}
            name={"descricao"}
            clean={clean}
          />
        </Grid>
      </Grid>


      <Grid
        container
        justify={"flex-end"}
        style={{marginTop: '2rem'}}
      >
        <Grid
          item
          xs="auto"
        >
          <OrangeButton
            onClick={registerItem}
            startIcon={<SaveIcon/>}
          > ADICIONAR NOVO ITEM </OrangeButton>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
