import React, {useEffect, useState} from "react";
import Layout from "../_layout/Layout";
import Container from "@material-ui/core/Container";
import TableCheckedList from "../_common/SelectableTable/TableCheckedList";
// import DadosEquipamento from "./DadosEquipamento";
import DialogItems from "./DialogItems";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {
  getEquipmentByStatus,
  getTodosEquipamentos,
} from "../../modelServices/equipamentoService";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";

// const headerData = [
//   {id: "numero_ordem_servico", name: "Ordem de Serviço"},
//   {id: "numero_de_serie", name: "Número de Série"},
//   {id: "marca", name: "Marca"},
//   {id: "modelo", name: "Modelo"},
//   {id: "instituicao_de_origem", name: "Origem"},
// ];

const headerData = [
  {id: "tipo", name: "Tipo"},
  {id: "nome_item", name: "Nome do item"},
  {id: "unidade", name: "Unidade"},
  {id: "quantidade", name: "Quantidade"},
  {id: "fabricante", name: "Fabricante"},
  {id: "codigo_item", name: "Código do item"},
];

const IndexDemand = (props) => {
  const classes = useStyles();
  const [requestBlock, setRequestBlock] = useState(false);
  const [screening, setScreening] = useState([]);
  const [dataTable, setDataTable] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [dataDialog, setDataDialog] = useState([]);

  // const [TodosEquipamentos, setTodosEquipamentos] = useState([]);

  useEffect(() => {
    getEquipamentos();

    if (screening.length === 0 && !requestBlock) {
      getEquipmentByStatus("diagnostico")
        .then((result) => {
          if (!result) return;

          setScreening(result);
          setDataTable(
            result
              .filter((item) => {
                return item.diagnostico && item.diagnostico.itens.length > 0;
              })
              .map((item) => {
                return {
                  numero_ordem_servico: item.numero_ordem_servico,
                  marca: item.triagem.marca || "",
                  modelo: item.triagem.modelo || "",
                  instituicao_de_origem:
                    item.triagem.instituicao_de_origem || "",
                  numero_de_serie: item.triagem.numero_de_serie,
                };
              })
          );
        })
        .catch((error) => {
          console.log("consultando triagem", error);
        });
      setRequestBlock(true);
    }
  }, [requestBlock, screening]);

  const openDialogItems = (data) => {
    const _dataDialog = screening.find(
      (item) => item.numero_ordem_servico === data.numero_ordem_servico
    );
    setDataDialog(_dataDialog);
    setOpenDialog(true);
  };

  const toogleDialog = (value) => {
    setOpenDialog(value);
  };

  const menuOptions = [
    {
      name: "Listar itens de compra",
      action: openDialogItems,
    },
  ];

  const getEquipamentos = async () => {
    const response = await getTodosEquipamentos();
    // setTodosEquipamentos(response.data);
    // console.log("aki", response.data);
    separarApenasItensDiagnostico(response.data);
  };

  const separarApenasItensDiagnostico = (TodosEquipamento) => {
    // console.log("separarApenasItensDiagnostico", TodosEquipamento);
    const ApenasDiagnosticos = TodosEquipamento.filter((item) => {
      // console.log("item", item.diagnostico);
      return item.diagnostico;
    });
    // console.log("ApenasDiagnosticos", ApenasDiagnosticos);

    const itensDoDiagnostico = ApenasDiagnosticos.map((item) => {
      return item.diagnostico.itens;
    });
    console.log("itensDoDiagnostico", itensDoDiagnostico);

    const listaUnica = itensDoDiagnostico.reduce((a, b) => a.concat(b));
    console.log("listaUnica", listaUnica);
  };

  return (
    <div>
      <Layout>
        <Container>
          <div style={{marginTop: "2rem"}}>
            <Grid container justify={"space-between"}>
              <Grid item xs={"auto"}>
                <Typography variant={"h5"} component={"h5"}>
                  Lista de equipamentos com diagnóstico e itens cadastrados
                </Typography>
              </Grid>
              <Grid item xs={"auto"}></Grid>
            </Grid>
          </div>

          <Paper className={classes.paper}>
            <TableCheckedList
              dataTable={[]}
              selectKeyField="nome"
              headerTable={headerData}
              // actionFunction={actionPrint}
              actionBarTitle="Lista de Itens"
              actionBarTextButton="Gerar Ordem de Compra"
            />
          </Paper>
        </Container>
      </Layout>
      <DialogItems
        openDialog={openDialog}
        dataDialog={dataDialog}
        toogleDialog={toogleDialog}
      />
    </div>
  );
};

export default IndexDemand;

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
}));
