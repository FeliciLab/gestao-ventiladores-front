import React, {useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SaveIcon from "@material-ui/icons/Save";
import OrangeButton from "../_common/forms/OrangeButton";
import ControlledInput from "../_common/forms/ControlledInput";
import RadioControl, {helperPropsItemsRadioControl} from "../_common/forms/RadioControl";

export default function CreateNewItem (props) {
  useEffect(() => {
    setClean(props.clean);
  }, [props]);

  const {updateItem, addNewItem} = props;

  const [clean, setClean] = useState(false);

  const updateParent = (event) => {
    const doc = {};
    doc[event.target.name] = event.target.value;
    updateItem(doc);
  };

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
            action={updateParent}
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
            action={updateParent}
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
            action={updateParent}
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
            action={updateParent}
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
            action={updateParent}
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
            action={updateParent}
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
            action={updateParent}
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
            onClick={addNewItem}
            startIcon={<SaveIcon/>}
          > ADICIONAR NOVO ITEM </OrangeButton>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
