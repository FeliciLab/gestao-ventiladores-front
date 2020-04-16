import React, {useEffect, useState} from "react";
import Layout from "../_layout/Layout";
import Container from "@material-ui/core/Container";
import ActionTableList from "../_common/ActionTable/ActionTableList";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {useHistory} from "react-router-dom";
import api from "../../services/api";

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

  async function getAll() {
    try {
      const response = await api.get("/api/equipamentos", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      return error;
    }
  }

  function tableData(result) {
    console.log(result);
    setEquipments(result);
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
    getAll()
      .then((result) => {
        if (!result) return;
        tableData(result);
      })
      .catch((error) => {
        console.log("consultando erro", error);
      });
  }, []);

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
    {
      name: "Efetuar entrega",
      action: openFormEntrega,
    },
  ];

  return (
    <div>
      <Layout>
        <Container>
          <div style={{marginTop: "2rem"}}>
            <Grid container justify={"space-between"}>
              <Grid item xs={"auto"}>
                <Typography variant={"h5"} component={"h5"}>
                  Lista de entregas
                </Typography>
              </Grid>
              <Grid item xs={"auto"}></Grid>
            </Grid>
          </div>

          <ActionTableList
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
