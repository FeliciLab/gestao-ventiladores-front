import React, {useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import SaveIcon from "@material-ui/icons/Save";
import OrangeButton from "../_common/forms/OrangeButton";
import ControlledInput from "../_common/forms/ControlledInput";

export default function CreateNewItem (props) {
  useEffect(() => {
    setItem(props.itemDiagnosis);
    setClean(props.clean);
  }, [props]);

  const {updateItem, addNewItem} = props;

  const [item, setItem] = useState({});
  const [clean, setClean] = useState(false);

  const updateParent = (event) => {
    const doc = {};
    doc[event.target.name] = event.target.value;
    updateItem(doc);
  };

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
          <FormControl component="fieldset">
            <FormLabel component="legend">Tipo do item</FormLabel>
            <RadioGroup
              style={{flexDirection: 'row'}}
              aria-label="tipo"
              name="tipo"
              defaultValue={item.tipo}
              onChange={(event) => updateParent(event)}
            >
              <FormControlLabel
                value="pecas"
                control={<Radio color={"default"}/>}
                label="Peça"
              />
              <FormControlLabel
                value="acessorio"
                control={<Radio color={"default"}/>}
                label="Acessório"
              />
            </RadioGroup>
          </FormControl>
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
