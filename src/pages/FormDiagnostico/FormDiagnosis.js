import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import CadastroDiagnostico from "./CadastroDiagnostico";
import CadastroItens from "./CreateNewItem";
import Container from "@material-ui/core/Container";
import {ServiceOrderDiagnosis} from "../../models/ordem_servico";
import HeaderFormPage from "./HeaderFormPage";
import FormRegisteredItems from "./FormRegisteredItems";

const FormDiagnosis = (props) => {
  useEffect(() => {
    setEquipment(props.equipment);
    setDiagnosis(ServiceOrderDiagnosis(props.equipment));
  }, [props]);

  const classes = useStyles();

  const [equipment, setEquipment] = useState({});
  const [diagnosis, setDiagnosis] = useState({});
  const [itemsDiagnosis, setItemsDiagnosis] = useState([]);
  const [clean, setClean] = useState(false);

  if (itemsDiagnosis.length === 0 &&
    props.equipment &&
    props.equipment.diagnostico &&
    props.equipment.diagnostico.itens &&
    props.equipment.diagnostico.itens.length > 0
  ) {
    setItemsDiagnosis(props.equipment.diagnostico.itens);
  }

  function addNewItem (item) {
    const items = itemsDiagnosis.slice();
    items.push(item);
    setItemsDiagnosis(items);
    setClean(true);
  };

  const updateDiagnosis = (value) => {
    const doc = Object.assign({}, diagnosis, value);
    setDiagnosis(doc);
    setClean(false);
  };

  function updateItemsFromTable (value, index, field) {
    const items = itemsDiagnosis.map((item, idx) => {
      if (idx === index) {
        item[field] = value;
      }

      return item;
    });

    setItemsDiagnosis(items);
  };

  function saveForm () {
    const doc = {
      diagnosis: {
        ...diagnosis,
        itens: itemsDiagnosis
      }
    };
    console.log(doc)
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
            addNewItem={addNewItem}
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