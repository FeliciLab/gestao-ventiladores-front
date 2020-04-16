import React, {useEffect, useState} from 'react';
import {getEquipmentByStatus} from "../../models/equipamentos";
import Layout from "../_layout/Layout";
import Container from "@material-ui/core/Container";
import ActionTableList from "../_common/ActionTable/ActionTableList";
import DialogItems from "./DialogItems";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const headerData = [
  {id: 'numero_ordem_servico', name: 'Ordem de Serviço'},
  {id: 'numero_de_serie', name: 'Número de Série'},
  {id: 'marca', name: 'Marca'},
  {id: 'modelo', name: 'Modelo'},
  {id: 'instituicao_de_origem', name: 'Origem'},
];

const IndexDemand = (props) => {
  const [requestBlock, setRequestBlock] = useState(false);
  const [screening, setScreening] = useState([]);
  const [dataTable, setDataTable] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [dataDialog, setDataDialog] = useState([]);

  useEffect(() => {
    if (screening.length === 0 && !requestBlock) {
      getEquipmentByStatus('diagnostico')
        .then(result => {
          if (!result) return;

          setScreening(result);
          setDataTable(result.filter(item => {
            return item.diagnostico && item.diagnostico.itens.length > 0;
          }).map(item => {
            return {
              numero_ordem_servico: item.numero_ordem_servico,
              marca: item.triagem.marca || '',
              modelo: item.triagem.modelo || '',
              instituicao_de_origem: item.triagem.instituicao_de_origem || '',
              numero_de_serie: item.triagem.numero_de_serie,
            };
          }));
        })
        .catch(error => {
          console.log('consultando triagem', error);
        });
      setRequestBlock(true);
    }
  }, [requestBlock, screening]);

  const openDialogItems = (data) => {
    const _dataDialog = screening.find(item => item.numero_ordem_servico === data.numero_ordem_servico)
    setDataDialog(_dataDialog);
    setOpenDialog(true);
  };

  const toogleDialog = (value) => {
    setOpenDialog(value);
  };

  const menuOptions = [
    {
      name: 'Listar itens de compra',
      action: openDialogItems
    }
  ];

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

          <ActionTableList
            dataTable={dataTable}
            headerTable={headerData}
            menuOptions={menuOptions}
          >
          </ActionTableList>
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