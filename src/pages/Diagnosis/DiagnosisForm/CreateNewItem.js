import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SaveIcon from "@material-ui/icons/Save";
import ThemeButton from "../../_common/forms/ThemeButton";
import {itemDiagnosisModel} from "../../../models/itensDiagnosticos";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import TextField from "@material-ui/core/TextField";
import {useForm} from "react-hook-form";
import ErrorAlertText from "../../_common/alerts/ErrorAlertText";

export default function CreateNewItem (props) {
  const {addNewItem} = props;
  const {register, errors, triggerValidation, handleSubmit} = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange'
  });

  const [item, setItem] = useState(itemDiagnosisModel);

  function updateItem (event) {
    const doc = {};
    doc[event.target.name] = event.target.value;
    setItem(Object.assign({}, item, doc));
  };

  function registerItem () {
    triggerValidation()
    setTimeout(() => {
      if (Object.keys(errors).length === 0) {
        addNewItem(item);
        setItem(Object.assign({}, itemDiagnosisModel));
      }
    }, 500)
  }

  return (
    <React.Fragment>
      <Typography
        variant="h6"
        gutterBottom
      >
        2. Cadastro de Itens
      </Typography>

      <form onSubmit={handleSubmit((values) => console.log(values))}>
        <Grid
          container
          spacing={3}
        >
          <Grid item xs={12} md={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Tipo do item</FormLabel>
              <RadioGroup
                aria-label="tipo-do-item" name="tipo" value={item.tipo} onChange={updateItem} style={{flexDirection: 'row'}}
                required
              >
                <FormControlLabel value="pecas" name="tipo" control={<Radio color={'default'}/>} label="Peça"/>
                <FormControlLabel value="acessorio" name="tipo" control={<Radio color={'default'}/>} label="Acessório"/>
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              inputRef={register({required: true})} fullWidth value={item.fabricante} name={'fabricante'}
              label={"Fabricante"} onChange={updateItem} required
            />
            <ErrorAlertText error={errors.fabricante}/>
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              inputRef={register({required: true})} fullWidth value={item.codigo} label={"Código do item"}
              onChange={updateItem} name={"codigo"} required
            />
            <ErrorAlertText error={errors.codigo}/>
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              inputRef={register({required: true})} fullWidth value={item.nome} label={"Nome do item"}
              onChange={updateItem} name={"nome"} required
            />
            <ErrorAlertText error={errors.nome}/>
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              inputRef={register({required: true})} fullWidth value={item.unidade_medida} label={"Unidade de medida"}
              onChange={updateItem} name={"unidade_medida"} required
            />
            <ErrorAlertText error={errors.unidade_medida}/>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              inputRef={register({required: true})} fullWidth value={item.quantidade} label={"Quantidade"}
              onChange={updateItem} name={"quantidade"} type={"number"} required
            />
            <ErrorAlertText error={errors.quantidade}/>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth value={item.descricao} label={"Descrição do Item"} onChange={updateItem} name={"descricao"}
            />
          </Grid>
        </Grid>


        <Grid container justify={"flex-end"} style={{marginTop: '2rem'}}>
          <Grid item xs="auto">
            <ThemeButton onClick={registerItem} startIcon={<SaveIcon/>}> ADICIONAR NOVO ITEM </ThemeButton>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
}
