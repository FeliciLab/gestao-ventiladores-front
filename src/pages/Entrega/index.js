import React, {useEffect, useState} from "react";
import Layout from "../_layout/Layout";
import Container from "@material-ui/core/Container";
import ActionTableList from "../_common/ActionTable/ActionTableList";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {useHistory} from "react-router-dom";
import {getAllEquipments} from "../../modelServices/equipamentoService";
import {helperPropsColorIconButton} from "../_common/forms/ColorIconButton";
import {orange} from "@material-ui/core/colors";
import MarkunreadMailboxIcon from "@material-ui/icons/MarkunreadMailbox";

const headerData = [
  {id: "numero_ordem_servico", name: "Ordem de Serviço"},
  {id: "tipo", name: "Tipo do equipamento"},
  {id: "marca", name: "Marca"},
  {id: "modelo", name: "Modelo"},
  {id: "fabricante", name: "Fabricante"},
];

const IndexDiagnosis = (props) => {
  const history = useHistory();

  const [dataTable, setDataTable] = useState([]);
  const [equipments, setEquipments] = useState([]);

  async function getAll () {
    try {
      const response = await getAllEquipments();
      setEquipments(response);
      tableData(response);
      return response;
    } catch (error) {
      return error;
    }
  }

  function tableData (result) {
    const response = result.map((item) => {
      return {
        numero_ordem_servico: item.numero_ordem_servico,
        tipo: item.triagem.tipo,
        marca: item.triagem.marca || "",
        modelo: item.triagem.modelo || "",
        fabricante: item.triagem.fabricante || "",
      };
    });

    setDataTable(response);
  }

  useEffect(() => {
    getAll();
  }, [props]);

  const openFormEntrega = (value) => {
    history.push(
      {
        pathname: "/nova-entrega",
        state: {
          data: equipments.find(
            (item) => item.numero_ordem_servico === value.numero_ordem_servico
          ),
        },
      },
      [equipments]
    );
  };

  const menuOptions = [
    helperPropsColorIconButton(
      'Cadastrar Entrega',
      openFormEntrega,
      'white',
      orange[600],
      orange[700],
      <MarkunreadMailboxIcon fontSize={"small"}/>
      )
  ];

  return (
    <div>
      <Layout>
        <Container>
          <div style={{marginTop: "2rem"}}>
            <Grid
              container
              justify={"space-between"}
            >
              <Grid
                item
                xs={"auto"}
              >
                <Typography
                  variant={"h5"}
                  component={"h5"}
                >
                  Lista de entregas
                </Typography>
              </Grid>
              <Grid
                item
                xs={"auto"}
              ></Grid>
            </Grid>
          </div>

          <ActionTableList
            actionIconButton={true}
            dataTable={dataTable}
            headerTable={headerData}
            menuOptions={menuOptions}
          ></ActionTableList>
        </Container>
      </Layout>
    </div>
  );
};

export default IndexDiagnosis;
