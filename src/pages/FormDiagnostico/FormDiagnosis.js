import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import CadastroDiagnostico from "./CadastroDiagnostico";
import CadastroItens from "./CreateNewItem";
import Container from "@material-ui/core/Container";
import {EquipmentDiagnosis} from "../../models/equipamentos";
import HeaderFormPage from "./HeaderFormPage";
import {itemDiagnosisModel} from "../../models/itensDiagnosticos";
import FormRegisteredItems from "./FormRegisteredItems";

const FormDiagnosis = (props) => {
  useEffect(() => {
    setEquipment(props.equipment);
    setDiagnosis(EquipmentDiagnosis(props.equipment));
    if (props.equipment.diagnosis) {
      setItemDiagnosis(props.equipment.diagnosis.itens);
    }
  }, [props]);
  const classes = useStyles();

  const [equipment, setEquipment] = useState({});
  const [diagnosis, setDiagnosis] = useState({});
  const [itemsDiagnosis, setItemsDiagnosis] = useState([
    {
      "quantidade": "2",
      "nome": "ashduha",
      "tipo": "pecas",
      "descricao": "ashduia",
      "valor": 0,
      "prioridade": "",
      "unidade_medida": "ashdiuh",
      "codigo": "dhauish",
      "fabricante": "Fabricante"
    }
  ]);
  const [itemDiagnosis, setItemDiagnosis] = useState(Object.assign({}, itemDiagnosisModel));
  const [clean, setClean] = useState(false);

  const addNewItem = () => {
    const doc = [...itemsDiagnosis, itemDiagnosis];
    updateItemsDiagnosis(doc);
    let item = Object.assign({}, itemDiagnosis);
    for (let i in item) {
      item[i] = itemDiagnosisModel[i];
    }

    setClean(true);
  };

  const updateState = (value, old, setFunc) => {
    setClean(false);
    const doc = Object.assign(old, value);
    setFunc(doc);
  };

  const updateDiagnosis = (value) => {
    updateState(value, diagnosis, setDiagnosis);
  };

  const updateItem = (value) => {
    updateState(value, itemDiagnosis, setItemDiagnosis);
  };

  const updateItemsDiagnosis = (value) => {
    updateState(value, itemsDiagnosis, setItemsDiagnosis);
  };

  const updateItemsFromTable = (doc) => {
    const items = itemsDiagnosis.map((item, index) => {
      if (index === doc.index) {
        return doc;
      }
      return item;
    });
    setItemsDiagnosis(items);
  };

  const saveForm = () => {

  };

  return (
    <React.Fragment>
      <CssBaseline/>

      <Container>
        <HeaderFormPage
          equipment={equipment}
          saveForm={saveForm}
        />

        <Paper className={classes.paper}>
          <CadastroDiagnostico
            diagnosis={diagnosis}
            updateDiagnosis={updateDiagnosis}
          />
        </Paper>

        <Paper className={classes.paper}>
          <CadastroItens
            itemDiagnosis={itemDiagnosis}
            addNewItem={addNewItem}
            updateItem={updateItem}
            clean={clean}
          />
        </Paper>

        <Paper className={classes.paper}>
          <FormRegisteredItems
            items={itemsDiagnosis}
            updateItemsFromTable={updateItemsFromTable}
          />
        </Paper>
      </Container>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

export default FormDiagnosis;